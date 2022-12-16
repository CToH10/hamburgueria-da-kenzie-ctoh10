import { useContext, useEffect, useRef } from "react";
import { DashContext } from "../../Contexts/DashContext";
import { StyledCartList } from "../../styles/list";
import { StyledAside } from "../../styles/style";
import { ProdOnCart } from "./Prod";
import { StyledCartTitle, StyledEmptyCart, StyledTotal } from "./style";

interface iCartProps {
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

export function ProdCart({ setIsOpen }: iCartProps) {
  const { prodCart, emptyList } = useContext(DashContext);
  let priceTotal: string | number[] = prodCart.map(
    (elem) => elem.price * elem.quantity
  );

  if (prodCart.length !== 0) {
    priceTotal = priceTotal
      .reduce((previousValue, current) => previousValue + current)
      .toFixed(2);

    priceTotal = priceTotal.replaceAll(".", ",");
  }

  const modalRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function closeModal(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const element = modalRef.current;
      if (element === null) {
        return null;
      }
      if (!element.contains(target)) {
        setIsOpen("none");
      }
    }
    window.addEventListener("mousedown", closeModal);

    return () => {
      window.removeEventListener("mousedown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAside ref={modalRef}>
      <StyledCartTitle>Carrinho de compras</StyledCartTitle>

      <StyledCartList>
        {prodCart.length !== 0 ? (
          <>
            {ProdOnCart()}
            <StyledTotal>
              <section className="cartTotal">
                <strong>Total:</strong>
                <p>R$ {priceTotal}</p>
              </section>
              <button onClick={emptyList}> Remover todos</button>
            </StyledTotal>
          </>
        ) : (
          <StyledEmptyCart className="emptyCart">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </StyledEmptyCart>
        )}
      </StyledCartList>
    </StyledAside>
  );
}
