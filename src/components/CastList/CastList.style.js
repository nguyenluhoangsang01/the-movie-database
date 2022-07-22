import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 3rem;

  h2 {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    cursor: text;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const CastItem = styled.div`
  img {
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
