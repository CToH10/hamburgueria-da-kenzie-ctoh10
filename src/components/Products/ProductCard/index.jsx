export function ProductCard({ product, action, id }) {
  return (
    <li key={id}>
      <figure>
        <img src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <h3>{product.name}</h3>
      <small> {product.category}</small>
      <p>R$ {product.price}</p>
      <button onClick={() => action(product)}>Adicionar</button>
    </li>
  );
}
