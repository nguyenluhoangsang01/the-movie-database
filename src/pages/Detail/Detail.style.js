import styled from "styled-components";

export const Wrapper = styled.div``;

export const Banner = styled.div`
  height: 50vh;
  position: relative;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  filter: blur(1.5px);
`;

export const Content = styled.div`
  max-width: var(--max-width);
  position: relative;
  padding: 0 2rem;
  margin: -15rem auto 5rem;
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 1024px) {
    gap: 0;
  }
`;

export const Poster = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--border-radius);
  width: 27.5rem;
  height: 43rem;

  @media screen and (max-width: 1024px) {
    width: 0;
  }
`;

export const Info = styled.div`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    font-size: var(--font-super-big);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2rem;
    cursor: text;
    text-transform: capitalize;
  }

  .genres {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    }

    p {
      font-size: var(--font-med);
      font-weight: 500;
      padding: 0.3rem 0;
      border: 2px solid var(--white-color);
      border-radius: var(--border-radius);
      text-transform: capitalize;
    }
  }

  & > p {
    font-size: var(--font-big);
    font-weight: 500;
    cursor: text;
  }
`;
