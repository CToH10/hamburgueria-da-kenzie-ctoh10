import styled from "styled-components";

export const StyledModal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(189, 189, 189, 0.5);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100%;

  aside {
    position: relative;
    top: 30vh;
    left: 1vw;
  }

  @media (min-width: 750px) {
    aside {
      top: 20vh;
      left: 35vw;
    }
  }

  html[dark] {
    background-color: rgba(224, 224, 224, 0.2);
  }
`;
