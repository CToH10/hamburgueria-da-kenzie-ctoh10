import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/Products";
import { DashContext } from "../../Contexts/DashContext";
import { UserContext } from "../../Contexts/UserContext";

export const DashboardPage = () => {
  const { prodList, filter, getProds } = useContext(DashContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    user ? getProds() : navigate("/login");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      {filter.length > 0 ? (
        <ProductsList list={filter} />
      ) : (
        <ProductsList list={prodList} />
      )}
    </>
  );
};
