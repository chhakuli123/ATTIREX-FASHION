import React from "react";
import { useFilter } from "context";
import { FiltersSidebar, ProductCard } from "components";

const ProductSection = () => {
  const { state } = useFilter();

  return (
    <div className="product-section">
      <FiltersSidebar />
      <div className="product-list">
        {state.filteredProducts.length === 0 ? (
          <h1>Product does not found...</h1>
        ) : (
          state.filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
      </div>
    </div>
  );
};

export { ProductSection };
