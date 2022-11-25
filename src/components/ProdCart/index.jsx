import { StyledCartList } from "../../styles/list";
import { StyledAside } from "../../styles/style";
import { ProdOnCart } from "./Prod";
import { StyledCartTitle, StyledEmptyCart, StyledTotal } from "./style";

export function ProdCart({ list = [], action, empty }) {
  let priceTotal = list.map((elem) => elem.price * elem.quantity);

  if (list.length !== 0) {
    priceTotal = priceTotal
      .reduce((previousValue, current) => previousValue + current)
      .toFixed(2);

    priceTotal = priceTotal.replaceAll(".", ",");
  }
  return (
    <StyledAside>
      <StyledCartTitle>Carrinho de compras</StyledCartTitle>

      <StyledCartList>
        {list.length !== 0 ? (
          <>
            {ProdOnCart(list, action)}
            <StyledTotal>
              <section className="cartTotal">
                <strong>Total:</strong>
                <p>R$ {priceTotal}</p>
              </section>
              <button onClick={empty}> Remover todos</button>
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
