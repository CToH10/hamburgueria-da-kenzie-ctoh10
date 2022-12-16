import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  fieldset {
    position: relative;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  fieldset label {
    background-color: var(--white);
    color: var(--font-grey-50);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-4);
    position: absolute;
    left: 2vw;
    top: -1.2vh;
    padding: 0;
    border-radius: 4px;
  }

  fieldset p {
    color: var(--color-secondary);
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-2);
    position: relative;
    left: 4vw;
  }

  input {
    background-color: var(--grey-0);
    border-radius: 8px;
    color: var(--font-grey-50);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-4);
    padding: 1.2vh 1vw;
    border: 2px solid var(--grey-0);
  }

  input:focus {
    background-color: var(--white);
    color: var(--font-grey-100);
    outline: none;
    border: 2px solid var(--grey-100);
  }

  .login {
    background-color: var(--color-primary);
    color: var(--font-white);
  }
`;
