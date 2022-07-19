import PropTypes from "prop-types";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import IconButton from "../IconButton";
import { Container, Content, Wrapper } from "./Modal.style";

const Modal = ({ handleClick }) => {
  return (
    <Wrapper>
      <Container onClick={handleClick} />
      <Content>
        <IconButton handleClick={handleClick}>
          <MdOutlineCancel />
        </IconButton>
      </Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
