import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0 2rem;
  height: var(--header-height);
  background-color: transparent;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 480px) {
    position: unset;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem 0;
  color: var(--txt-color);

  a {
    @media screen and (max-width: 480px) {
      margin: 0 auto;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  a {
    text-transform: capitalize;
    font-size: var(--font-big);
    transition: var(--transition);
    font-weight: 600;

    :hover {
      color: var(--main-color);
    }
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    background-color: var(--body-bg);
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 0;
    z-index: 1;
  }
`;
