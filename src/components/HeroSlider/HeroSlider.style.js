import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
export const ImgSide = styled.img`
  filter: blur(2px);
`;
