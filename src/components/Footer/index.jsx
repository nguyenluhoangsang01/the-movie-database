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
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

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
              <StyledLink to="/" onClick={handleScrollToTop}>
                <span>home</span>
              </StyledLink>
              <StyledLink to="/about" onClick={handleScrollToTop}>
                <span>about us</span>
              </StyledLink>
              <StyledLink to="/contact" onClick={handleScrollToTop}>
                <span>contact us</span>
              </StyledLink>
              <StyledLink to="/term-of-services" onClick={handleScrollToTop}>
                <span>term of services</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/faq" onClick={handleScrollToTop}>
                <span>FAQ</span>
              </StyledLink>
              <StyledLink to="/live" onClick={handleScrollToTop}>
                <span>live</span>
              </StyledLink>
              <StyledLink to="/premium" onClick={handleScrollToTop}>
                <span>premium</span>
              </StyledLink>
              <StyledLink to="/privacy-policy" onClick={handleScrollToTop}>
                <span>privacy policy</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/top-imdb" onClick={handleScrollToTop}>
                <span>top IMDB</span>
              </StyledLink>
              <StyledLink to="/recent-release" onClick={handleScrollToTop}>
                <span>recent release</span>
              </StyledLink>
              <StyledLink to="/must-watch" onClick={handleScrollToTop}>
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
