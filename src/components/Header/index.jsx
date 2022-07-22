import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import RMDBLogo from "../../assets/images/react-movie-logo.svg";
import { Content, LogoImg, NavLinks, Wrapper } from "./Header.style";

const headerNavLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "movies",
    path: "/movie",
  },
  {
    name: "tv series",
    path: "/tv",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const scrollTopMaxHeight = 100;

  useEffect(() => {
    const shrinkHeader = () => {
      document.body.scrollTop > scrollTopMaxHeight ||
      document.documentElement.scrollTop > scrollTopMaxHeight
        ? headerRef.current.classList.add("shrink")
        : headerRef.current.classList.remove("shrink");
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => window.removeEventListener("scroll", shrinkHeader);
  }, []);

  return (
    <Wrapper ref={headerRef}>
      <Content>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <LogoImg src={RMDBLogo} alt="react-movie-logo" />
        </Link>

        <NavLinks>
          {headerNavLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid var(--main-color)" : "none",
              })}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
      </Content>
    </Wrapper>
  );
};

export default Header;
