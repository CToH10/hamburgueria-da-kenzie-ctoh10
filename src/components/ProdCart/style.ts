import styled from "styled-components";

export const StyledTotal = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  margin: 0 auto 10px;
  height: 8vh;
  border-top: 3px solid var(--grey-20);

  @media (min-width: 750px) {
    margin: 0 auto 35px;
  }

  .cartTotal {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 8vh;
  }

  strong {
    font-weight: var(--font-weight-2);
    color: var(-grey-100);
  }

  p {
    font-weight: var(--font-weight-2);
    color: var(--font-grey-50);
  }

  button {
    padding: 1.5vh 0;
    border-radius: 8px;
    border: 2px solid var(--grey-20);
    background-color: var(--grey-20);
    color: var(--grey-50);
    font-weight: var(--font-weight-2);
    width: 100%;
  }

  @media (min-width: 750px) {
    button {
      padding: 2vh 0;
    }
  }
`;

export const StyledCartTitle = styled.h2`
  background-color: var(--color-primary);
  color: var(--font-white);
  font-weight: var(--font-weight-1);
  margin: 0 auto;
  text-align: start;
  padding: 1vh 0 1vh 1vw;
  border-radius: 5px 5px 0 0;

  @media (min-width: 750px) {
    margin: 0;
    width: 79%;
  }
`;

export const StyledEmptyCart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;

  h3 {
    font-weight: var(--font-weight-1);
    color: var(-grey-100);
  }

  p {
    font-weight: var(--font-weight-4);
    color: var(-grey-50);
  }
`;
