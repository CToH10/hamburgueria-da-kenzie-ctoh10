import { ProdOnCart } from "./Prod";

export function ProdCart({ list = [], action }) {
  //na quantidade, usar um filter com o id
  //passar a lista como um todo?
  //se tiver id igual, aumentar quantidade
  let priceTotal = list.map((elem) => elem.price * elem.quantity);
  return (
    <aside>
      <h2>Carrinho de compras</h2>

      {list.length !== 0 ? (
        <p>
          R${" "}
          {priceTotal
            .reduce((previousValue, current) => previousValue + current)
            .toFixed(2)}
        </p>
      ) : (
        <p>Nenhum item adicionado</p>
      )}
      <ul>{ProdOnCart(list, action)}</ul>
    </aside>
  );
}
