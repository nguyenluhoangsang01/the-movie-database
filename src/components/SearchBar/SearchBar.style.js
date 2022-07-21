import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto 5rem;
  width: 100%;
  max-width: var(--max-width);
`;

export const Content = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: var(--border-radius);
  border: 3px solid var(--white-color);
  height: 4rem;
  padding: 2rem;
  font-size: var(--font-big);
  color: var(--txt-color);
  padding-right: 10rem;
  transition: var(--transition);
  caret-color: var(--main-color);

  ::placeholder {
    opacity: 0.5;
  }
`;

export const BackButton = styled.button`
  margin-bottom: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--txt-color);
  transition: var(--transition);

  :hover {
    color: var(--main-color);
  }
`;

export const SearchButton = styled.button`
  font-size: 2rem;
  cursor: pointer;
  color: var(--white-color);
  background-color: var(--main-color);
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  padding: 0 3rem;
  height: calc(100% - 4px);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  border-left: 4px solid white;
  transition: var(--transition);
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.8;
  }
`;

export const Info = styled.div`
  font-size: var(--font-big);
  font-style: italic;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: text;

  span {
    color: var(--main-color);
    font-weight: 700;
    margin: 0 1rem;
    text-transform: uppercase;
  }
`;
