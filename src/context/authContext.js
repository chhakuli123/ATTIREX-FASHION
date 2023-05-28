import { createContext, useContext, useReducer } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT, loginService, signupService } from "utils";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const initialState = {
    token: localStorageToken?.token || null,
    currentUser: localStorageToken?.user || null,
    isLoggedIn: false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          token: action.payload.token,
          currentUser: action.payload.user,
          isLoggedIn: true,
        };
      case LOGOUT:
        return {
          ...state,
          token: null,
          currentUser: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signupHandler = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await signupService(
        firstName,
        lastName,
        email,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        dispatch({
          type: LOGIN,
          payload: { user: createdUser, token: encodedToken },
        });

        toast.success(`${createdUser.firstName}!`, {
          icon: "👗",
          message: "Step into the glamorous realm of Attirex Fashion!",
          duration: 5000,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error signing you up.");
    }
  };

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        dispatch({
          type: LOGIN,
          payload: { user: foundUser, token: encodedToken },
        });
        toast.success(`Welcome back, ${foundUser.firstName}!`, {
          icon: "👋",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("User does not exist! Please sign up.");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    dispatch({ type: LOGOUT });
    toast.success("Logged out!");
  };

  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
        currentUser: state.currentUser,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
