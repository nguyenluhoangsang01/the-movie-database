import React, { memo } from "react";
import { Wrapper } from "./IconButton.style";
import PropTypes from "prop-types";

const IconButton = ({ handleClick, children }) => {
  return (
    <Wrapper type="button" onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

IconButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default memo(IconButton);
