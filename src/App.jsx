import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProdCart } from "./components/ProdCart";
import { ProductsList } from "./components/Products";
import { api } from "./services/api";

function App() {
  const [prodList, setProdList] = useState([]);
  const [prodCart, setProdCart] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function fetchList() {
      try {
        let list = await api.get("");
        setProdList([...list.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchList();
  }, []);

  function searchBar(input) {
    input === ""
      ? setFilter(prodList)
      : setFilter(
          prodList.filter(
            (elem) =>
              elem.name.toLowerCase().includes(input) ||
              elem.category.toLowerCase().includes(input)
          )
        );
    // console.log(products);
  }

  function addProdCart(product) {
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    if (index === -1) {
      setProdCart([...prodCart, { ...product, quantity: 1 }]);
    } else {
      prodCart.map((prod) =>
        prod.id === prodCart[index].id
          ? { ...prod, ...(prod.quantity = prod.quantity + 1) }
          : prod
      );
      setProdCart([...prodCart]);
    }
  }

  function removeProdCart(product) {
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    // && prod.quantity > 2
    prodCart.map((prod) => {
      if (prod.id === prodCart[index].id && prodCart[index].quantity >= 2) {
        prod = { ...prod, ...(prod.quantity = prod.quantity - 1) };
        return setProdCart([...prodCart]);
      } else if (prod.quantity === 1 && prod.id === product.id) {
        let filtered = prodCart.filter((elem) => elem.id !== product.id);
        return setProdCart(filtered);
      } else {
        return <></>;
      }
    });
  }

  return (
    <section className="App">
      <Header action={searchBar} />
      {filter ? (
        <ProductsList list={filter} action={addProdCart} />
      ) : (
        <ProductsList list={prodList} action={addProdCart} />
      )}
      <ProdCart list={prodCart} action={removeProdCart}></ProdCart>
    </section>
  );
}

export default App;
