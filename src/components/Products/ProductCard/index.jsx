import { toast } from "react-toastify";

export function ProductCard({ product, action, id }) {
  function prodOnClick() {
    toast.success(`${product.name} adicionado com sucesso`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

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
