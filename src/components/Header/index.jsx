import { Button } from "../Button";
import { StyledHeader } from "./style";

export function Header({ action }) {
  return (
    <StyledHeader>
      <img src="../../assets/burguer.svg" alt="BurguerKenzie" />

      <section>
        <button>Go dark</button>
        <form>
          <input type="text" placeholder="Digite sua pesquisa" />
          <Button
            action={(event) => event.preventDefault()}
            text={"Pesquisar"}
          />
        </form>
      </section>
    </StyledHeader>
  );
}
