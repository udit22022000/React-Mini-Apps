import React from "react";
import Routes from "./Routes/Routes";

const Main = () => {
  return (
    <div
      style={{
        width: "90vw",
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Routes />
    </div>
  );
};

export { Main };
