import { useContext } from "react";
import { DashContext } from "../../../Contexts/DashContext";
import { Button } from "../../Button";
import { FaTrash } from "react-icons/fa";

export function ProdOnCart() {
  const { prodCart, removeProdCart, addProdCart, removeAllProdCart } =
    useContext(DashContext);

  return prodCart.map((prod) => {
    return (
      <li key={prod.id} id={prod.id + ""}>
        <img src={prod.img} alt="" />
        <section>
          <section className="cartProdInfo">
            <h3>{prod.name}</h3>
            <section>
              <Button
                label={"Remover unidade"}
                action={() => removeProdCart(prod)}
                className="removeProduct"
                text={"-"}
              ></Button>
              <p>{prod.quantity}</p>
              <Button
                label={"Adicionar unidade"}
                action={() => addProdCart(prod)}
                className="addProduct"
                text={"+"}
              ></Button>
            </section>
          </section>
          <Button
            label={"Remover todos"}
            action={() => removeAllProdCart(prod)}
            className="remove"
            text={<FaTrash />}
          ></Button>
        </section>
      </li>
    );
  });
}
