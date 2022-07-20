import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../assets/images/react-movie-logo.svg";
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
            <FooterLogoImg src={RMDBLogo} alt="react-movie-logo" />
          </Link>
        </FooterLogo>

        <FooterContent>
          <FooterContentMenus>
            <FooterContentMenu>
              <StyledLink to="/">home</StyledLink>
              <StyledLink to="/">contact us</StyledLink>
              <StyledLink to="/">term of services</StyledLink>
              <StyledLink to="/">about us</StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/">live</StyledLink>
              <StyledLink to="/">FAQ</StyledLink>
              <StyledLink to="/">premium</StyledLink>
              <StyledLink to="/">privacy policy</StyledLink>
            </FooterContentMenu>

            <FooterContentMenu>
              <StyledLink to="/">you must watch</StyledLink>
              <StyledLink to="/">recent release</StyledLink>
              <StyledLink to="/">top IMDB</StyledLink>
            </FooterContentMenu>
          </FooterContentMenus>
        </FooterContent>
      </Content>
    </Wrapper>
  );
};

export default Footer;
