import { StyledList } from "../../styles/list";
import { StyledMain } from "../../styles/style";
import { ProductCard } from "./ProductCard";

export function ProductsList({ list, action }) {
  return (
    <StyledMain>
      <StyledList direction={"row"} liDirecion={"column"}>
        {list.map((product) => (
          <ProductCard product={product} action={action} key={product.id} />
        ))}
      </StyledList>
    </StyledMain>
  );
}
