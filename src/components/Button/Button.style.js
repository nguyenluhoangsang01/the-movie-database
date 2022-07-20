import styled from "styled-components";

export const Wrapper = styled.button`
  cursor: pointer;
  font-family: var(--font-family);

  border: ${({ border }) =>
    border ? `3px solid var(--white-color)` : `3px solid var(--main-color)`};
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "var(--main-color)"};
  color: var(--txt-color);
  border-radius: var(--border-radius);
  padding: 0.3em 2.7rem;
  font-size: var(--font-big);
  font-weight: 600;
  box-shadow: ${({ boxShadowUnset }) =>
    boxShadowUnset ? "unset" : "var(--box-shadow-button)"};
  transition: var(--transition);

  &:hover {
    box-shadow: ${({ boxShadowUnset }) =>
      boxShadowUnset ? "unset" : "var(--box-shadow-button-hover)"};
    background-color: ${({ outline }) =>
      outline ? "var(--white-color)" : "var(--main-color)"};
    color: ${({ outline }) =>
      outline ? "var(--main-color)" : "var(--white-color)"};
  }

  ${"" /* Breakpoint */}
  @media screen and (max-width: 768px) {
    padding: 0.1em 2rem;
  }

  ${"" /* Breakpoint */}
  @media screen and (max-width: 480px) {
    font-size: var(--font-med);
  }
`;
