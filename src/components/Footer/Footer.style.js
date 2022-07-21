import { Link } from "react-router-dom";
import styled from "styled-components";

import FooterBackground from "../../assets/images/footer-bg.jpg";

export const Wrapper = styled.footer`
  background-image: ${`url(${FooterBackground})`};
  position: relative;
  padding: 6rem 2rem;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterLogo = styled.div`
  width: 15rem;
  margin-bottom: 3rem;
  margin-top: -2rem;
`;
export const FooterLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FooterContentMenus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rem;

  ${"" /* Breakpoint */}
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
  }

  ${"" /* Breakpoint */}
  @media screen and (max-width: 480px) {
    gap: 5rem;
  }
`;
export const FooterContentMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: var(--txt-color);
  text-transform: capitalize;
  font-size: var(--font-big);
  font-weight: 600;
  line-height: 2.5;
  text-align: center;

  span {
    transition: var(--transition);
  }

  &:hover span {
    color: var(--main-color);
    border-bottom: 1px solid var(--main-color);
  }
`;
