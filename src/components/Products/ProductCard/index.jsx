export function ProductCard({ product, action, id }) {
  function prodOnClick() {
    action(product);
  }
  return (
    <li key={id}>
      <figure>
        <img src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <section className="productInfo">
        <h3>{product.name}</h3>
        <small> {product.category}</small>
        <p>R$ {product.price}</p>
        <button onClick={() => prodOnClick()}>Adicionar</button>
      </section>
    </li>
  );
}
