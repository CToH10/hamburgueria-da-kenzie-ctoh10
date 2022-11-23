export function ProductCard({ id, name, category, price, image }, action) {
  return (
    <li key={id}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <h3>{name}</h3>
      <small> {category}</small>
      <p>R$ {price}</p>
      <button onClick={action}>Adicionar</button>
    </li>
  );
}
