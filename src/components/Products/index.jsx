import { ProductCard } from "./ProductCard";

export function ProductsList({ list, action }) {
  return (
    <main>
      <ul>
        {list.map((product) => (
          <ProductCard product={product} action={action} key={product.id} />
        ))}
      </ul>
    </main>
  );
}
