export function ProdOnCart(list, action) {
  return list.map((prod) => {
    if (typeof prod === "object") {
      return (
        <li key={prod.id} id={prod.id}>
          <img src={prod.img} alt="" />
          <section>
            <section className="cartProdInfo">
              <h3>{prod.name}</h3>
              <small> {prod.category}</small>
              <p>Quantidade: {prod.quantity}</p>
            </section>
            <button onClick={() => action(prod)} className="remove">
              Remover
            </button>
          </section>
        </li>
      );
    } else {
      return <></>;
    }
  });
}
