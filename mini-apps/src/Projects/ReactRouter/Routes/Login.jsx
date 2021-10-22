import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isAuth, handleSignIn, handleSignOut } = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return !isAuth ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  ) : (
    <Redirect to="/users" />
  );
};

export { Login };
