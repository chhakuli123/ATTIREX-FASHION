import { createContext, useReducer, useContext, useEffect } from "react";

import { filterReducer } from "reducer";
import { useProductsData } from "context";
import { UPDATE_PRODUCTS } from "utils";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const { productsData } = useProductsData();

  // Set the initial state for the filter context
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

  // Update the products in the state when productsData changes
  useEffect(() => {
    dispatch({ type: UPDATE_PRODUCTS, productsData });
  }, [productsData]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to consume the FilterContext
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterContextProvider };
