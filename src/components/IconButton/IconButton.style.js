import styled from "styled-components";

export const Wrapper = styled.button`
  font-size: var(--font-super-big);
  cursor: pointer;
  display: flex;
  color: var(--txt-color);
  transition: var(--transition);

  &:hover {
    color: var(--main-color);
  }
`;
