import { useState } from "react";
import { StyledHeader } from "../../styles/style";
import { Button } from "../Button";
import { MdDarkMode } from "react-icons/md";
import burguer from "../../assets/burguer.svg";

export function Header({ action }) {
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("dark", true);
  }

  function darkMode() {
    if (dark) {
      document.documentElement.removeAttribute("dark");

      setDark(false);
    } else {
      document.documentElement.setAttribute("dark", true);
      setDark(true);
    }
  }

  return (
    <StyledHeader>
      <img src={burguer} alt="BurguerKenzie" />

      <section>
        <Button className="darkMode" action={darkMode} text={<MdDarkMode />} />
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
