import { Carousel, Categories, ClothingCategories, SaleBanner } from "components";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SaleBanner/>
      <ClothingCategories/>
    </div>
  );
};

export { HomePage };
