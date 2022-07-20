import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const HeadingText = styled.h3`
  font-size: var(--font-big);
  text-transform: uppercase;
  font-weight: 700;
  cursor: text;
`;
export const ContentBody = styled(Swiper)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

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
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 2px var(--main-color);
  text-transform: uppercase;
  text-align: center;
  font-style: italic;
  transition: var(--transition);
  opacity: 0;
`;

export const StyledLink = styled(Link)`
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
