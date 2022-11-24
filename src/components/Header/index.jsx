import { useState } from "react";
import { StyledHeader } from "../../styles/style";
import { Button } from "../Button";

export function Header({ action }) {
  const [input, setInput] = useState("");

  return (
    <StyledHeader>
      <img src="../../assets/burguer.svg" alt="BurguerKenzie" />

      <section>
        <button>Go dark</button>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            action(input);
          }}
        >
          <input
            type="text"
            placeholder="Digite sua pesquisa"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <Button action={() => action(input)} text={"Pesquisar"} />
        </form>
      </section>
    </StyledHeader>
  );
}
