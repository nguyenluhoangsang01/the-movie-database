import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageSlide = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  transition: var(--transition);
`;

export const Title = styled.h4`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  font-weight: 700;
  text-shadow: 2px 2px 2px var(--main-color);
  text-transform: uppercase;
  text-align: center;
  font-style: italic;
  transition: var(--transition);
  opacity: 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  position: relative;

  :hover {
    ${Title} {
      top: 50%;
      opacity: 1;
    }

    ${ImageSlide} {
      filter: blur(5px);
    }
  }
`;
