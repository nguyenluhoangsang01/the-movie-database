import React from "react";
import TMDBLogo from "../../assets/images/tmdb_logo.svg";
import {
  Content,
  FooterContent,
  FooterContentMenu,
  FooterContentMenus,
  FooterLogo,
  FooterLogoImg,
  StyledLink,
  Wrapper,
} from "./Footer.style";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <FooterLogo
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          <FooterLogoImg src={TMDBLogo} alt="react-movie-logo" />
        </FooterLogo>

        <FooterContent>
          <FooterContentMenus>
            <FooterContentMenu>
              <StyledLink to="/">
                <span>home</span>
              </StyledLink>
              <StyledLink to="/about">
                <span>about us</span>
              </StyledLink>
              <StyledLink to="/contact">
                <span>contact us</span>
              </StyledLink>
              <StyledLink to="/term-of-services">
                <span>term of services</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/faq">
                <span>FAQ</span>
              </StyledLink>
              <StyledLink to="/live">
                <span>live</span>
              </StyledLink>
              <StyledLink to="/premium">
                <span>premium</span>
              </StyledLink>
              <StyledLink to="/privacy-policy">
                <span>privacy policy</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/top-imdb">
                <span>top IMDB</span>
              </StyledLink>
              <StyledLink to="/recent-release">
                <span>recent release</span>
              </StyledLink>
              <StyledLink to="/must-watch">
                <span>you must watch</span>
              </StyledLink>
            </FooterContentMenu>
          </FooterContentMenus>
        </FooterContent>
      </Content>
    </Wrapper>
  );
};

export default Footer;
