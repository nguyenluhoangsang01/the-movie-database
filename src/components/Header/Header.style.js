import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0 4rem;
  height: var(--header-height);
  background-color: transparent;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    ${"" /* Breakpoint */}
    @media screen and (max-width: 468px) {
      margin: 0 auto;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  ${"" /* Breakpoint */}
  @media screen and (max-width: 600px) {
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

  ${"" /* Breakpoint */}
  @media screen and (max-width: 468px) {
    position: absolute;
    bottom: var(--footer-height);
    left: 0;
    right: 0;
  }
`;
