import styled from "styled-components";

export const StyledLanding = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;

  img:first-of-type {
    width: 100%;
    max-width: 300px;
  }
  @media (min-width: 1000px) {
    align-items: flex-start;
    width: 30%;
  }

  figure {
    background-color: var(--color-primary-50);
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
  }

  img:last-child {
    display: none;
  }

  @media (min-width: 1000px) {
    img:last-child {
      display: inline;
    }
  }

  section {
    box-shadow: 0px 0px 5px 1px var(--grey-20);
    border-radius: 4px;
    padding: 1vh 2vw;
    display: flex;
    gap: 5vw;
    max-width: 350px;
  }

  section p {
    color: var(--font-grey-50);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-3);
    width: fit-content;
  }

  @media (min-width: 1000px) {
    section {
      max-width: 360px;
      gap: 3vw;
    }
  }
`;
