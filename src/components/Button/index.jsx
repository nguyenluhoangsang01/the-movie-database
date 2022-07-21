import React, { memo } from "react";
import { Wrapper } from "./Button.style";
import PropTypes from "prop-types";

const Button = ({
  handleClick,
  children,
  transparent,
  boxShadowUnset,
  border,
  outline,
  searchIcon,
}) => {
  return (
    <Wrapper
      onClick={handleClick}
      transparent={transparent}
      boxShadowUnset={boxShadowUnset}
      border={border}
      outline={outline}
      className={`${searchIcon && `search-icon`}`}
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
  outline: PropTypes.bool,
};

export default memo(Button);
