import axios from "axios";

const loginService = async (email, password) =>
  await axios.post("/api/auth/login", {
    email: email,
    password: password,
  });

const signupService = async (firstName, lastName, email, password) =>
  await axios.post("/api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

export { loginService, signupService };
