import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  }

  function addProdCart(product) {
    //não pode repetir
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    if (index === -1) {
      toast.success(`${product.name} adicionado com sucesso`);
      setProdCart([...prodCart, { ...product, quantity: 1 }]);
    } else {
      toast.error(`${product.name} já adicionado`);
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

  function emptyList() {
    setProdCart([]);
  }

  return (
    <section className="App">
      <Header action={searchBar} />
      {filter ? (
        <ProductsList list={filter} action={addProdCart} />
      ) : (
        <ProductsList list={prodList} action={addProdCart} />
      )}
      <ProdCart
        list={prodCart}
        action={removeProdCart}
        empty={emptyList}
      ></ProdCart>
    </section>
  );
}

export default App;
