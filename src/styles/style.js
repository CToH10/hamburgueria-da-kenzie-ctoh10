import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 21vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: var(--grey-0);
  padding: 1.5vh 0;

  @media (min-width: 750px) {
    height: 10vh;
    flex-direction: row;
    padding: 1.5vh 7vw;
    align-items: center;
    gap: 0;
    justify-content: space-between;
  }

  img {
    height: 4vh;
    width: 98vw;
    object-fit: fill;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    align-items: center;
  }
  @media (min-width: 750px) {
    section {
      flex-direction: row;
      justify-content: space-between;
    }

    img {
      width: 13vw;
    }
  }

  .darkMode {
    width: 10vw;
    height: 5vh;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 750px) {
    .darkMode {
      width: 3vw;
    }
  }

  form {
    position: relative;
    display: flex;
    width: 90%;
  }

  form input {
    position: relative;
    left: 0;
    min-width: 89vw;
    height: 6vh;
    border-radius: 8px;
    padding: 0.5vh 2vw;
    border: 2px solid var(--grey-20);
    background-color: var(--white);
    color: var(--font-grey-100);
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-2);
    outline: none;
  }

  form input:focus {
    border: 2px solid var(--grey-100);
    outline: none;
  }

  form input ::placeholder {
    color: (--font-grey-50);
  }

  form button {
    position: relative;
    top: 0.8vh;
    right: 29vw;
    height: 70%;
    padding: 0 2vw;
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--font-white);
    font-weight: var(--font-weight-3);
    cursor: pointer;
  }

  @media (min-width: 750px) {
    form {
      width: 70%;
    }

    form input {
      min-width: 25vw;
    }

    form button {
      top: 0.8vh;
      right: 9vw;
      padding: 0.7vh 2vw;
    }
  }
`;

export const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 750px) {
    width: 59%;
    margin: 0;
    position: relative;
    left: 5vw;
  }
`;

export const StyledAside = styled.aside`
  @media (min-width: 750px) {
    width: 40%;
    margin: 0;
    position: absolute;
    left: 60vw;
    top: 13vh;
  }
`;
