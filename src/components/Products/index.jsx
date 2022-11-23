import { ProductCard } from "./ProductCard";

export function ProductsList({ list, action }) {
  return (
    <ul>
      {list.map((product) => (
        <ProductCard product={product} action={action} />
      ))}
    </ul>
  );
}
