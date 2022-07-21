import styled from "styled-components";

import FooterBackground from "../../assets/images/footer-bg.jpg";

export const Wrapper = styled.div`
  background-image: ${`url(${FooterBackground})`};

  padding: var(--header-height) 0 2rem;
  text-align: center;
  margin-bottom: 2rem;

  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CatalogHeading = styled.h2`
  font-size: var(--font-super-big);
  text-transform: uppercase;
  font-weight: 700;
  cursor: text;
`;

export const CatalogContent = styled.div`
  margin-top: 5rem;
`;
