import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 100%;
  max-width: var(--max-width);
`;

export const Content = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: var(--border-radius);
  border: 3px solid var(--main-color);
  border-right: none;
  height: 4rem;
  padding: 2rem;
  font-size: var(--font-big);
  color: var(--txt-color);
  padding-right: 12rem;
  transition: var(--transition);
  caret-color: var(--main-color);

  ::placeholder {
    opacity: 0.5;
  }

  :focus {
    border-color: var(--white-color);
  }
`;
