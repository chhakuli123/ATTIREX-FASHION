//----------------Search Products---------------//
const searchProducts = (state, searchQuery) => {
  const query = searchQuery.toLowerCase();
  const filteredProducts = state.products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(query);
  });

  return {
    ...state,
    filteredProducts: filteredProducts,
  };
};

//------------Update Products-------------------//
const updateProducts = (state, action) => {
  return {
    ...state,
    products: action.productsData,
    filteredProducts: action.productsData,
  };
};

//------------Sorting By Price-------------------//
const sortProducts = (state, payload) => {
  if (payload === "highToLow") {
    return {
      ...state,
      sortByPrice: payload,
      filteredProducts: [...state.products].sort((a, b) => b.price - a.price),
    };
  } else if (payload === "lowToHigh") {
    return {
      ...state,
      sortByPrice: payload,
      filteredProducts: [...state.products].sort((a, b) => a.price - b.price),
    };
  } else if (payload === "aToz") {
    return {
      ...state,
      sortByPrice: payload,
      filteredProducts: [...state.products].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    };
  } else if (payload === "zToa") {
    return {
      ...state,
      sortByPrice: payload,
      filteredProducts: [...state.products].sort((a, b) =>
        b.name.localeCompare(a.name)
      ),
    };
  }
  return {
    ...state,
    sortByPrice: payload,
    filteredProducts: [...state.products],
  };
};
//------------Sorting By Price slider-------------------//

const updatePriceRange = (state, payload) => {
  return {
    ...state,
    priceRange: payload,
    filteredProducts: [...state.products].filter(
      (product) => product.price >= payload.min && product.price <= payload.max
    ),
  };
};
//------------Sorting By Ratings-------------------//

const sortByRating = (state, payload) => {
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
};
//------------Sorting By Section-------------------//
const filterBySection = (state, payload) => {
  const section = payload;
  const { selectedSections } = state;
  const updatedSections = selectedSections.includes(section)
    ? selectedSections.filter((s) => s !== section)
    : [...selectedSections, section];

  const filteredSectionProducts =
    updatedSections.length > 0
      ? state.products.filter((product) =>
          updatedSections.includes(product.section)
        )
      : state.products;

  return {
    ...state,
    selectedSections: section,
    filteredProducts: filteredSectionProducts,
  };
};
//------------Sorting By Category-------------------//
const filterByCategory = (state, payload) => {
  const category = payload;
  const { selectedCategory } = state;
  const updatedCategory = selectedCategory.includes(category)
    ? selectedCategory.filter((c) => c !== category)
    : [...selectedCategory, category];

  const filteredCategoryProducts =
    updatedCategory.length > 0
      ? state.products.filter((product) =>
          updatedCategory.includes(product.category)
        )
      : state.products;

  return {
    ...state,
    selectedCategory: updatedCategory,
    filteredProducts: filteredCategoryProducts,
  };
};
//------------Clear Filters-------------------//
const clearFilters = (state) => {
  return {
    ...state,
    sortByPrice: "",
    sortByRating: "",
    selectedSections: [],
    selectedCategory: [],
    filteredProducts: state.products,
    priceRange: { min: 800, max: 12000 },
  };
};

export {
  searchProducts,
  updateProducts,
  sortProducts,
  updatePriceRange,
  sortByRating,
  filterBySection,
  filterByCategory,
  clearFilters,
};
