import { useContext } from "react";
import { DashContext, iProduct } from "../../../Contexts/DashContext";

interface iProps {
  product: iProduct;
}

export function ProductCard({ product }: iProps) {
  const { addProdCart } = useContext(DashContext);
  function prodOnClick() {
    addProdCart({ ...product, quantity: 1 });
  }
  return (
    <li key={product.id} id={`${product.id}`}>
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
