import { useContext, useState } from "react";
import { StyledHeader } from "../../styles/style";
import { Button } from "../Button";
import {
  MdLightbulb,
  MdLightbulbOutline,
  MdLogout,
  MdShoppingCart,
  MdSearch,
} from "react-icons/md";
import burguer from "../../assets/burguer.svg";
import { useNavigate } from "react-router-dom";
import { DashContext } from "../../Contexts/DashContext";
import { ModalBackground } from "../Modal";
import { ProdCart } from "../ProdCart";

export function Header() {
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isOpen, setIsOpen] = useState("none");
  const { searchBar, prodCart } = useContext(DashContext);
  const navigate = useNavigate();

  if (dark) {
    document.documentElement.setAttribute("dark", "true");
  }

  function darkMode() {
    if (dark) {
      document.documentElement.removeAttribute("dark");
      setDark(false);
    } else {
      document.documentElement.setAttribute("dark", "true");
      setDark(true);
    }
  }
  let cartTotal = 0;

  if (prodCart.length > 0) {
    cartTotal = prodCart
      .map((elem) => elem.quantity)
      .reduce((previousQuant, currentQuant) => previousQuant + currentQuant);
  }

  return (
    <>
      <StyledHeader>
        <img src={burguer} alt="BurguerKenzie" />

        <section>
          <section className="buttons">
            <Button
              className="darkMode"
              label={"Modo escuro"}
              action={darkMode}
              text={
                dark ? (
                  <MdLightbulbOutline
                    preserveAspectRatio="none"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <MdLightbulb
                    preserveAspectRatio="none"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )
              }
            />
            <Button
              text={
                <MdLogout
                  preserveAspectRatio="none"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
              action={() => {
                navigate("/login");
                window.localStorage.clear();
              }}
              className={"logout"}
              label={"Sair"}
            />
            <Button
              text={
                <MdShoppingCart
                  preserveAspectRatio="none"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
              action={() => setIsOpen("flex")}
              className={""}
              label={"Carrinho de compras"}
            />
            <span>{cartTotal}</span>
          </section>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              searchBar(input);
            }}
          >
            <input
              type="text"
              aria-label="Digite sua pesquisa"
              placeholder="Digite sua pesquisa"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <Button
              action={() => searchBar(input)}
              text={<MdSearch />}
              className={""}
              label={"Pesquisar"}
            />
          </form>
        </section>
      </StyledHeader>
      <ModalBackground isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProdCart setIsOpen={setIsOpen} />
      </ModalBackground>
    </>
  );
}
