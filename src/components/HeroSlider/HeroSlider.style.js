import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

export const ImgSide = styled.img`
  filter: blur(1.5px);
  width: 100%;

  @media screen and (max-width: 480px) {
    padding-bottom: 33rem;
    border-bottom: 1px solid var(--white-color);
  }

  @media (min-width: 480px) and (max-width: 655px) {
    padding-bottom: 20rem;
    border-bottom: 1px solid var(--white-color);
  }
`;
