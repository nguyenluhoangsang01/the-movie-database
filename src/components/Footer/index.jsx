import React from "react";
import { Link } from "react-router-dom";
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
        <FooterLogo>
          <Link to="/">
            <FooterLogoImg src={TMDBLogo} alt="react-movie-logo" />
          </Link>
        </FooterLogo>

        <FooterContent>
          <FooterContentMenus>
            <FooterContentMenu>
              <StyledLink to="/">
                <span>home</span>
              </StyledLink>
              <StyledLink to="/">
                <span>about us</span>
              </StyledLink>
              <StyledLink to="/">
                <span>contact us</span>
              </StyledLink>
              <StyledLink to="/">
                <span>term of services</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/">
                <span>FAQ</span>
              </StyledLink>
              <StyledLink to="/">
                <span>live</span>
              </StyledLink>
              <StyledLink to="/">
                <span>premium</span>
              </StyledLink>
              <StyledLink to="/">
                <span>privacy policy</span>
              </StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/">
                <span>top IMDB</span>
              </StyledLink>
              <StyledLink to="/">
                <span>recent release</span>
              </StyledLink>
              <StyledLink to="/">
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
