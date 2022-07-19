import styled from "styled-components";

export const Wrapper = styled.button`
  font-size: var(--font-close-button);
  cursor: pointer;
  display: flex;
  color: var(--txt-color);
  transition: var(--transition);
  margin-left: auto;
  margin-bottom: 2rem;

  &:hover {
    color: var(--main-color);
  }
`;
