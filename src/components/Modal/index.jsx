import PropTypes from "prop-types";
import React, { memo } from "react";
import { MdOutlineCancel } from "react-icons/md";
import IconButton from "../IconButton";
import { Container, Content, Wrapper } from "./Modal.style";

const Modal = ({ handleClick, children }) => {
  return (
    <Wrapper>
      <Container onClick={handleClick} />
      <Content>
        <IconButton handleClick={handleClick}>
          <MdOutlineCancel />
        </IconButton>

        {children}
      </Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(Modal);
