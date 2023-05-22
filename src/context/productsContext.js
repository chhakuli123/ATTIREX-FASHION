import { createContext, useEffect, useState, useContext } from "react";

const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  // Function to fetch the products data
  const getProductsData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProductsData(data.products);
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  };

  // Use useEffect to fetch the products data when the component mounts
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ProductsDataContext.Provider value={{ productsData }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

// Custom hook to consume the ProductsDataContext
const useProductsData = () => useContext(ProductsDataContext);

export { useProductsData, ProductsDataProvider };
