import React from "react";
import { AppContext } from "../Context/AppContextProvider";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isAuth, token, handleLoginUser } = React.useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginUser({ email, password });
  };

  return (
    <div>
      <h1>{token}</h1>
      <form onSubmit={handleSubmit}>
        <input
          placehoder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export { Login };
