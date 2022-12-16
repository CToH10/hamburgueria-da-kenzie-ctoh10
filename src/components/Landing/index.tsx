import burguer from "../../assets/burguer.svg";
import dots from "../../assets/dots.svg";
import { StyledLanding } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
export const LandingImages = () => {
  return (
    <StyledLanding>
      <img src={burguer} alt="" />
      <section>
        <figure>
          <FiShoppingBag
            color="green"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </figure>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </p>
      </section>
      <img src={dots} alt="" />
    </StyledLanding>
  );
};
