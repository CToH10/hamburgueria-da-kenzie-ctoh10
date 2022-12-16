import styled from "styled-components";

export const StyledEnterSection = styled.section`
  margin: 0 auto;
  width: 90%;
  max-width: 540px;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 5vh;

  box-shadow: 0px 0px 5px 1px var(--grey-20);
  border-radius: 4px;
  padding: 2vh 2vw;

  h3 {
    color: var(--font-grey-100);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-1);
  }

  section:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section:first-of-type a {
    max-width: 220px;
    background-color: inherit;
    border: none;
    text-decoration: underline;
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-3);
  }

  @media (min-width: 500px) {
    section:first-of-type {
      flex-direction: column;
    }
  }

  @media (min-width: 1000px) {
    section:first-of-type {
      flex-direction: row;
    }
  }

  section:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5vh;
  }

  section p {
    color: var(--font-grey-50);
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-3);
  }

  section a {
    border: 2px solid var(--grey-0);
    border-radius: 4px;
    background-color: var(--grey-0);
    color: var(--font-grey-50);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-2);
    text-decoration: none;
    text-align: center;
    width: 100%;
    padding: 1.5vh 0;
  }
`;

export const StyledFormPages = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6vh;
  position: absolute;
  top: 10vh;

  @media (min-width: 500px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 90%;
    left: 5vw;
    top: 15vh;
    transform: translate(0, 0);
  }
`;
