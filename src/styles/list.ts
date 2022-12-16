import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  gap: 8vw;
  padding: 3vh 2vw;

  @media (min-width: 350px) {
    gap: 3vw;
  }

  @media (min-width: 750px) {
    gap: 5vw;
    width: 100%;
    flex-wrap: wrap;
  }

  li {
    background-color: var(--white);
    box-shadow: 0px 0px 5px 1px var(--grey-20);
    border-radius: 5px;
    min-height: 45vh;
    min-width: 65vw;
    display: flex;
    flex-direction: column;
    gap: 3vh;
  }

  li:hover {
    box-shadow: 0px 0px 5px 1px var(--color-primary);

    .productInfo button {
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
    }
  }

  @media (min-width: 350px) {
    li {
      min-width: 37vw;
    }
  }

  @media (min-width: 750px) {
    li {
      min-width: 24vw;
      max-width: 24vw;
    }
  }

  @media (min-width: 970px) {
    li {
      min-width: 17vw;
      max-width: 17vw;
    }
  }

  li figure {
    margin: 0;
    max-height: 50%;
    height: 18vh;
    width: 100%;
    background-color: var(--grey-0);
  }

  li figure figcaption {
    display: none;
  }

  li figure img {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  .productInfo {
    width: 100%;
    height: 100%;
    min-height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 2vh;
    padding: 0 0 0 2vw;
  }

  @media (min-width: 750px) {
    .productInfo {
      min-height: 22vh;
      justify-content: space-around;
    }
  }

  .productInfo h3 {
    max-height: 4vh;
    max-width: 86%;
    text-align: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-1);
    color: var(--font-grey-100);
  }

  .productInfo small {
    color: var(--font-grey-50);
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
  }

  .productInfo p {
    color: var(--color-primary);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-2);
  }

  .productInfo button {
    border: 2px solid var(--grey-20);
    border-radius: 4px;
    background-color: var(--grey-20);
    padding: 0.7vh 3vw;
    color: var(--font-white);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-2);
    cursor: pointer;
  }
`;

export const StyledCartList = styled(StyledList)`
  flex-direction: column;
  background-color: var(--grey-0);
  margin: 0 auto;
  border-radius: 0px 0px 5px 5px;
  max-height: 50vh;
  width: 95vw;

  @media (min-width: 750px) {
    width: 79%;
    margin: 0;
    padding: 0 0 0 1vw;
    min-height: 40vh;
    overflow: auto;
    flex-direction: row;

    .emptyCart {
      position: relative;
      left: 8vw;
    }
  }

  li {
    flex-direction: row;
    background-color: inherit;
    box-shadow: none;
    min-height: 20vh;
    width: 90vw;
    gap: 2vw;
    align-items: center;
  }

  li:hover {
    box-shadow: none;
  }

  li img {
    border-radius: 5px;
    background-color: var(--grey-20);
    height: 13vh;
    width: 30vw;
    min-height: 13vh;
    min-width: 30vw;
    object-fit: contain;
  }

  li section {
    display: flex;
    justify-content: space-between;
    max-width: 63%;
    width: 100%;
    height: 13vh;
  }

  li .cartProdInfo {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 62%;
    height: fit-content;
    max-height: 15vh;
  }

  li .cartProdInfo section {
    background-color: var(--gray-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1vw;
    max-width: 62%;
    height: fit-content;
    max-height: 15vh;
    border-radius: 4px;
    padding: 4px;
  }

  li .cartProdInfo section button {
    color: var(--font-grey-100);
    font-weight: var(--font-weight-2);
    border: none;
    cursor: pointer;
    height: fit-content;
    padding: 4px;
    text-align: center;
    border-radius: 4px;
  }

  li .cartProdInfo section button {
    color: var(--font-grey-100);
    font-weight: var(--font-weight-2);
    border: none;
    cursor: pointer;
    height: fit-content;
    padding: 4px;
    text-align: center;
    border-radius: 4px;
  }

  .removeProduct {
    background-color: var(--color-secondary);
  }

  .addProduct {
    background-color: var(--color-primary);
  }

  p {
    width: fit-content;
  }

  li .cartProdInfo h3 {
    max-height: 4vh;
    max-width: 86%;
    text-align: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-1);
    color: var(--grey-100);
  }

  /*li .cartProdInfo small, */
  li .cartProdInfo p {
    color: var(--font-grey-50);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-4);
  }

  .remove {
    align-self: flex-start;
    background-color: inherit;
    border: none;
    color: var(--gray-4);
    cursor: pointer;
  }

  @media (min-width: 750px) {
    li {
      width: 90%;
    }

    li img {
      width: 8vw;
      height: 7vw;
      min-width: 7vw;
    }

    li section {
      gap: 8vw;
    }

    li .cartProdInfo {
      gap: 2vh;
    }

    li .cartProdInfo section {
      max-width: fit-content;
    }

    li .cartProdInfo h3 {
      min-width: 13vw;
    }
  }
`;
