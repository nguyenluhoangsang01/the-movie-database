import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 2rem;
  margin: var(--header-height) auto 3rem;
`;
export const Content = styled.div`
  max-width: var(--max-width);
  margin: 16rem auto 0;

  h2 {
    font-size: var(--font-super-big);
    font-weight: 700;
    margin-bottom: 2rem;
    cursor: text;
  }

  .flex {
    display: flex;
    gap: 8rem;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 0;
    }

    .height {
      width: 70%;
      height: 100%;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    .sidebar {
      width: 30%;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      h4 {
        font-weight: 500;
        font-size: var(--font-big);
        margin-bottom: 3rem;
        cursor: text;
      }

      ul {
        margin-left: 2rem;
        list-style: disc;

        li {
          margin-bottom: 1rem;
          cursor: pointer;

          span {
            font-size: var(--font-med);
            border-bottom: 1px solid var(--white-color);
          }
        }
      }
    }
  }
`;
