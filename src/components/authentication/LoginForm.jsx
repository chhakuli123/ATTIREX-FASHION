import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import { InputField } from "./signup-form/InputFeild";

const LoginForm = () => {
  const { loginHandler } = useAuth();

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
    hidePassword: true
  });

  const guestUserDetails = {
    email: "daisykhurana@gmail.com",
    password: "Daisy@789",
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  const handlePasswordToggle = () => {
    setUserLoginDetails((prevState) => ({
      ...prevState,
      hidePassword: !prevState.hidePassword,
    }));
  };
  const loginAsGuestHandler = () => {
    setUserLoginDetails({
      email: guestUserDetails.email,
      password: guestUserDetails.password,
      hidePassword: true, 
    });
    loginHandler(guestUserDetails);
  };

  return (
    <div className="form__container">
      <form onSubmit={loginFormSubmitHandler} className="form">
        <h2 className="form__title">Login</h2>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={userLoginDetails.email}
          onChange={(event) =>
            setUserLoginDetails({
              ...userLoginDetails,
              email: event.target.value,
            })
          }
        />
        <InputField
          label="Password"
          type={userLoginDetails.hidePassword ? "password" : "text"}
          id="password"
          value={userLoginDetails.password}
          onChange={(event) =>
            setUserLoginDetails({
              ...userLoginDetails,
              password: event.target.value,
            })
          }
          toggleHide={handlePasswordToggle}
          hidePassword={userLoginDetails.hidePassword}
        />
        <button type="submit" className="form__button">
          LOGIN
        </button>
        <button
          type="button"
          onClick={loginAsGuestHandler}
          className="form__button form__button--guest"
        >
          LOGIN AS GUEST
        </button>
        <div className="form__footer">
          <span className="form__footer-text">Don't have an account?</span>
          <Link to="/signup" className="btn-link-primary" replace>
            Create One
          </Link>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
