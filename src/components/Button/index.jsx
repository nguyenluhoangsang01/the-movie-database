import React from "react";
import { Wrapper } from "./Button.style";

const Button = ({
  handleClick,
  children,
  transparent,
  boxShadowUnset,
  border,
}) => {
  return (
    <Wrapper
      onClick={handleClick}
      transparent={transparent}
      boxShadowUnset={boxShadowUnset}
      border={border}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
