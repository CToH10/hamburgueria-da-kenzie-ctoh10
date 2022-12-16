import { iProduct } from "../../Contexts/DashContext";
import { StyledList } from "../../styles/list";
import { StyledMain } from "../../styles/style";
import { ProductCard } from "./ProductCard";

interface iProps {
  list: iProduct[];
}

export function ProductsList({ list }: iProps) {
  return (
    <StyledMain>
      <StyledList>
        {list.map((product) => (
          <ProductCard product={product} />
        ))}
      </StyledList>
    </StyledMain>
  );
}
