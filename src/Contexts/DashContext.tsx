import { createContext, useContext, useState } from "react";
import { iDefaultError, UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface iDashContext {
  prodList: iProduct[];
  emptyList(): void;
  filter: iProduct[];
  searchBar(input: string): void;
  addProdCart(product: iCart): void;
  prodCart: iCart[];
  removeProdCart(product: iCart): void;
  getProds(): Promise<void>;
  removeAllProdCart(product: iCart): void;
}

interface iDashContextProps {
  children: React.ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCart extends iProduct {
  quantity: number;
}

export const DashContext = createContext({} as iDashContext);

export const DashProvider = ({ children }: iDashContextProps) => {
  const [prodList, setProdList] = useState<iProduct[]>([]);
  const [prodCart, setProdCart] = useState<iCart[]>([]);
  const [filter, setFilter] = useState<iProduct[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const headers = {
    Authorization: `Bearer ${user}`,
  };

  async function getProds() {
    try {
      let list = await api.get<iProduct[]>("/products", { headers: headers });
      list.data ? setProdList([...list.data]) : navigate("/login");
    } catch (err) {
      const error = err as AxiosError<iDefaultError>;
      let message;
      message = error.response?.data;
      toast.error(`${message}`);
    }
  }

  function searchBar(input: string) {
    input === ""
      ? setFilter(prodList)
      : setFilter(
          prodList.filter(
            (elem: { name: string; category: string }) =>
              elem.name.toLowerCase().includes(input) ||
              elem.category.toLowerCase().includes(input)
          )
        );
  }

  function addProdCart(product: iCart) {
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    if (index === -1) {
      toast.success(`${product.name} adicionado com sucesso`);
      setProdCart([...prodCart, product]);
    } else {
      prodCart.map((prod) =>
        prod.id === prodCart[index].id
          ? (prod.quantity = prod.quantity + 1)
          : prod
      );
      toast.success(`${product.name} adicionado novamente`);
      setProdCart([...prodCart]);
    }
  }

  function removeProdCart(product: iCart) {
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    prodCart.map((prod) => {
      if (prod.id === prodCart[index].id && prodCart[index].quantity >= 2) {
        prod.quantity = prod.quantity - 1;
        return setProdCart([...prodCart]);
      } else if (prod.quantity === 1 && prod.id === product.id) {
        let filtered = prodCart.filter((elem) => elem.id !== product.id);
        return setProdCart(filtered);
      } else {
        return <></>;
      }
    });
  }

  function removeAllProdCart(product: iCart) {
    let index = prodCart.findIndex((elem) => elem.id === product.id);
    prodCart.map((prod) => {
      if (prod.id === prodCart[index].id) {
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
    <DashContext.Provider
      value={{
        prodList,
        prodCart,
        addProdCart,
        filter,
        searchBar,
        emptyList,
        removeProdCart,
        getProds,
        removeAllProdCart,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
