import styled from "styled-components";
// import { css } from "styled-components";

export const StyledHeader = styled.header`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  border-bottom: 3px solid red;
  padding: 1.5vh 0;

  form {
    position: relative;
    display: flex;
    width: 90%;
    left: 5vw;
  }

  form input {
    position: relative;
    left: 0;
    min-width: 89vw;
    height: 5vh;
  }

  form button {
    position: relative;
    right: 25vw;
  }

  @media (min-width: 750px) {
    height: 5vh;
  }
`;
