import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 5rem;
  overflow: hidden;

  @media (min-width: 1024px) and (max-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
