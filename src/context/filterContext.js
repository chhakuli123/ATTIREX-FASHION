import { createContext, useReducer, useContext } from "react";

import { filterReducer } from "reducer";
import { useProductsData } from "context";
import { useEffect } from "react";
import { UPDATE_PRODUCTS } from "utils";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const { productsData } = useProductsData();

  const initialState = {
    products: productsData,
    sortByPrice: "",
    sortByRating: "",
    priceRange: { min: 0, max: 12000 },
    selectedSections: [],
    filteredProducts: productsData,
    selectedCategory: [],
    searchQuery: "",
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: UPDATE_PRODUCTS, productsData });
  }, [productsData]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterContextProvider };
