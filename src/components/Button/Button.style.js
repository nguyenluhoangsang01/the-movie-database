import styled from "styled-components";

export const Wrapper = styled.button`
  cursor: pointer;
  font-family: var(--font-family);

border:${({ border }) =>
  border ? `3px solid var(--white-color)` : `3px solid var(--main-color)`};
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "var(--main-color)"};
  color: var(--txt-color);
  border-radius: var(--border-radius);
  padding: 0.5rem 2rem;
  font-size: var(--font-big);
  font-weight: 600;
  box-shadow: ${({ boxShadowUnset }) =>
    boxShadowUnset ? "unset" : "var(--box-shadow-button)"}
  transition: var(--transition);

  &:hover {
		box-shadow: ${({ boxShadowUnset }) =>
      boxShadowUnset ? "unset" : "var(--box-shadow-button)"}
  transition: var(--transition);
  }
`;
