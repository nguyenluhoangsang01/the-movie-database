import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 15%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    margin: 4rem auto 0;
  }
`;

export const Text = styled.div`
  width: 55%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const Heading = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: var(--font-super-big);
  margin-bottom: 4rem;
  line-height: 1;
  cursor: auto;
  transition: var(--transition-top-opacity);
  animation: ${({ slideChanged }) => slideChanged && "topToBottom 0.7s linear"};

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
export const Overview = styled.p`
  position: relative;
  font-size: var(--font-big);
  font-weight: 500;
  margin-bottom: 3rem;
  line-height: 1.5;
  cursor: auto;
  transition: var(--transition);
  animation: ${({ slideChanged }) => slideChanged && "topToBottom 1.5s linear"};

  @media screen and (max-width: 768px) {
    font-size: var(--font-med);
  }
`;

export const Actions = styled.div`
  position: relative;
  display: flex;
  gap: 3rem;
  transition: var(--transition);
  animation: ${({ slideChanged }) => slideChanged && "topToBottom 2s linear"};
`;

export const Poster = styled.img`
  border-radius: var(--border-radius);
  width: 32rem;
  transition: var(--transition);
  animation: ${({ slideChanged }) => slideChanged && "zoomOut 0.5s linear"};
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 0;
  }
`;
