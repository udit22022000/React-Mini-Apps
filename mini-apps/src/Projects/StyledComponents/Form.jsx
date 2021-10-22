import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px auto;
  width: 60px;
  height: 50px;
  background: ${({ toggle }) => {
    if (toggle) {
      return "green";
    } else {
      return "red";
    }
  }};
`;

//useLayout..

const Form = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <Wrapper toggle={toggle} onClick={() => setToggle(!toggle)}>
      TOGGLE
    </Wrapper>
  );
};

export { Form };
