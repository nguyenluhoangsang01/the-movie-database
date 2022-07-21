import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  padding: 0 2rem;
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

  span {
    font-size: 2rem;
    display: inline-flex;
    align-self: center;
    justify-self: center;
    margin-left: 0.5rem;
  }
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
