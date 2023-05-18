import { createContext, useEffect, useState, useContext } from "react";

const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
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
    <ProductsDataContext.Provider value={{ productsData }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

const useProductsData = () => useContext(ProductsDataContext);

export { useProductsData, ProductsDataProvider };
