import { useReducer } from "react";
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { filterReducer, initialState } from "reducer";

export const ProoductsDataContext = createContext();
const ProductsDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProductsData(data.products);
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <ProoductsDataContext.Provider value={{ productsData, state, dispatch }}>
      {children}
    </ProoductsDataContext.Provider>
  );
};

const useProductsData = () => useContext(ProoductsDataContext);

export { useProductsData, ProductsDataProvider };
