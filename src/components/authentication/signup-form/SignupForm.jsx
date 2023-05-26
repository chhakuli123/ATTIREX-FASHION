import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputField } from "./InputFeild";
import { validateSignupForm } from "./formValidation";
import { useAuth } from "context";

import "../sharedform.css";

const SignupForm = () => {
  const { signupHandler } = useAuth();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    passwordMatch: true,
    hide: { password: true, confirmPassword: true }, //These properties control the visibility of the password and confirm password fields, respectively. Both are initially set to true, indicating that the password fields are hidden by default.
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signupFormSubmitHandler = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateSignupForm(userDetails);

    if (isValid) {
      signupHandler(userDetails);
    } else {
      setUserDetails({ ...userDetails, errors });
    }
  };

  const handleInputFocus = (field) => {
    setUserDetails((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [field]: "", // Clear the corresponding error when the input field is focused
      },
    }));
  };
  return (
    <div className="form__container">
      <form onSubmit={signupFormSubmitHandler} className="form">
        <h2 className="form__title">Sign Up</h2>

        <InputField
          id="firstName"
          label="First Name:"
          type="text"
          value={userDetails.firstName}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              firstName: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("firstName")}
          error={userDetails.errors.firstName}
        />

        <InputField
          id="lastName"
          label="Last Name:"
          type="text"
          value={userDetails.lastName}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              lastName: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("lastName")}
          error={userDetails.errors.lastName}
        />

        <InputField
          id="email"
          label="Email:"
          type="email"
          value={userDetails.email}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              email: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("email")}
          error={userDetails.errors.email}
        />

        <InputField
          id="password"
          label="Password:"
          type={userDetails.hide.password ? "password" : "text"}
          value={userDetails.password}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              password: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("password")}
          error={userDetails.errors.password}
          toggleHide={() =>
            setUserDetails((prevState) => ({
              ...prevState,
              hide: {
                ...prevState.hide,
                password: !prevState.hide.password,
              },
            }))
          }
          hidePassword={userDetails.hide.password}
        />

        <InputField
          id="confirmPassword"
          label="Confirm Password:"
          type={userDetails.hide.confirmPassword ? "password" : "text"}
          value={userDetails.confirmPassword}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              confirmPassword: event.target.value,
              passwordMatch: event.target.value === userDetails.password,
            })
          }
          onFocus={() => handleInputFocus("confirmPassword")}
          error={userDetails.errors.confirmPassword}
          toggleHide={() =>
            setUserDetails((prevState) => ({
              ...prevState,
              hide: {
                ...prevState.hide,
                confirmPassword: !prevState.hide.confirmPassword,
              },
            }))
          }
          hidePassword={userDetails.hide.confirmPassword}
        />

        <button type="submit" className="form__button">
          SIGN UP
        </button>
        <div className="form__footer">
          <span className="form__footer-text">Already have an account?</span>
          <Link to="/login" className="btn-link-primary" replace>
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export { SignupForm };
