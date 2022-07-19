import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--modal-color);
  z-index: 10000;
`;

export const Content = styled.div`
  padding: 2rem 4rem;
  padding-bottom: 4rem;
  background-color: var(--body-bg);
  border-radius: var(--border-radius);
  width: 70%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20000;
`;
