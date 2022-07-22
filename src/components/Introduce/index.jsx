import PropTypes from "prop-types";
import React from "react";
import { Wrapper } from "./Introduce.style";

const Introduce = ({ title, src, p1, p2, p3, p4, p5, p6 }) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <img src={src} alt="introduce" />
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
      <p>{p6}</p>
    </Wrapper>
  );
};

Introduce.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  p4: PropTypes.string,
  p5: PropTypes.string,
  p6: PropTypes.string,
};

export default Introduce;
