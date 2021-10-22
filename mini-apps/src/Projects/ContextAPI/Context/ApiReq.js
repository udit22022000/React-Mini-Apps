import axios from "axios";
function loginUser({ email, password }) {
  return axios.post("https://reqres.in/api/login", {
    email: email,
    password: password,
  });
}

export { loginUser };
