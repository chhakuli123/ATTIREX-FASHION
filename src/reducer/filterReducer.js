import { products } from "backend/db/products";

export const initialState = {
  products: products,
  sortByPrice: "",
  sortByRating: "",
  priceRange: { min: 0, max: 1000 },
  selectedSections: [],
  filteredProducts: products,
  selectedCategory: [],
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS":
      if (action.payload === "highToLow") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort(
            (a, b) => b.price - a.price
          ),
        };
      } else if (action.payload === "lowToHigh") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort(
            (a, b) => a.price - b.price
          ),
        };
      } else if (action.payload === "aToz") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      } else if (action.payload === "zToa") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
          ),
        };
      }
      return {
        ...state,
        sortByPrice: action.payload,
        filteredProducts: products,
      };
    case "UPDATE_PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
        filteredProducts: products.filter(
          (product) =>
            product.price >= action.payload.min &&
            product.price <= action.payload.max
        ),
      };
    case "SORT_BY_RATING":
      const { payload } = action;
      let sortedProducts;

      if (payload === "4stars") {
        sortedProducts = state.filteredProducts.filter(
          (product) => product.rating >= 4
        );
      } else if (payload === "3stars") {
        sortedProducts = state.filteredProducts.filter(
          (product) => product.rating >= 3
        );
      } else if (payload === "2stars") {
        sortedProducts = state.filteredProducts.filter(
          (product) => product.rating >= 2
        );
      } else if (payload === "1star") {
        sortedProducts = state.filteredProducts.filter(
          (product) => product.rating >= 1
        );
      } else {
        sortedProducts = state.filteredProducts;
      }

      return {
        ...state,
        sortByRating: payload,
        filteredProducts: sortedProducts,
      };
    case "FILTER_BY_SECTION":
      const section = action.payload;
      const { selectedSections } = state;
      const updatedSections = selectedSections.includes(section)
        ? selectedSections.filter((s) => s !== section)
        : [...selectedSections, section];

      const filteredSectionProducts =
        updatedSections.length > 0
          ? state.products.filter((product) =>
              updatedSections.includes(product.section)
            )
          : products;

      return {
        ...state,
        selectedSections: section,
        filteredProducts: filteredSectionProducts,
      };
    case "FILTER_BY_CATEGORY":
      const category = action.payload;
      const { selectedCategory } = state;
      const updatedCategory = selectedCategory.includes(category)
        ? selectedCategory.filter((c) => c !== category)
        : [...selectedCategory, category];

      const filteredCategoryProducts =
        updatedCategory.length > 0
          ? state.products.filter((product) =>
              updatedCategory.includes(product.category)
            )
          : products;

      return {
        ...state,
        selectedCategory: updatedCategory,
        filteredProducts: filteredCategoryProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...initialState,
        selectedSections: [],
        selectedCategory: [],
        filteredProducts: products,
      };

    default:
      return state;
  }
};
export { filterReducer };
