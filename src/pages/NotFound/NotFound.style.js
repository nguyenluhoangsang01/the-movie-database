import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: var(--header-height);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: var(--white-color);
  border-top: 1px solid var(--white-color);
  border-bottom: 1px solid var(--white-color);
  animation: toggleColor 1s infinite;
  transition: var(--transition);

  @keyframes toggleColor {
    0% {
      color: var(--txt-color);
    }
    100% {
      color: var(--main-color);
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
    height: 30vh;
    margin-top: 0;
  }
`;
