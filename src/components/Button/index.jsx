import React from "react";
import { Wrapper } from "./Button.style";
import PropTypes from "prop-types";

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

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  boxShadowUnset: PropTypes.bool,
  border: PropTypes.bool,
};

export default Button;
