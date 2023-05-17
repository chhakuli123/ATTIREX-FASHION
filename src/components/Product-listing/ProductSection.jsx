import React from "react";

import { useProductsData } from "context";
import {FiltersSidebar,ProductCard} from "components"

const ProductSection = () => {
  const {state}=useProductsData()

  return (
    <div className="product-section">
   <FiltersSidebar/>
      <div className="product-list">
        {state.filteredProducts.map((product) => (
         <ProductCard product={product}/>
        ))}
      </div>
    </div>
  );
};
export  {ProductSection};
