import {
  CLEAR_FILTERS,
  FILTER_BY_CATEGORY,
  FILTER_BY_SECTION,
  SEARCH_PRODUCTS,
  SORT_BY_RATING,
  SORT_PRODUCTS,
  UPDATE_PRICE_RANGE,
  UPDATE_PRODUCTS,
  clearFilters,
  filterByCategory,
  filterBySection,
  searchProducts,
  sortByRating,
  sortProducts,
  updatePriceRange,
  updateProducts,
} from "utils";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return searchProducts(state, action.payload);
    case UPDATE_PRODUCTS:
      return updateProducts(state, action);
    case SORT_PRODUCTS:
      return sortProducts(state, action.payload);
    case UPDATE_PRICE_RANGE:
      return updatePriceRange(state, action.payload);
    case SORT_BY_RATING:
      return sortByRating(state, action.payload);
    case FILTER_BY_SECTION:
      return filterBySection(state, action.payload);
    case FILTER_BY_CATEGORY:
      return filterByCategory(state, action.payload);
    case CLEAR_FILTERS:
      return clearFilters(state);
    default:
      return state;
  }
};
export { filterReducer };
