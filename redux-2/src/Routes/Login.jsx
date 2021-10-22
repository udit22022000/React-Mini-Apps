import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginFailure, loginSuccess } from "../Redux/auth/action";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (email === "admin" && password === "admin") {
      dispatch(loginSuccess("fake token"));
    } else {
      dispatch(loginFailure(""));
    }
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{
        margin: "10px auto",
        width: "20vw",
        minWidth: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%" }}
      />
      <input
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={handleSubmit} style={{ width: "50%" }}>
        SUBMIT
      </button>
    </div>
  );
};

export { Login };
