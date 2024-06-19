import React from "react";
import Cards from "@/components/secundarios/cards/cards";
import Carousel from "../../components/secundarios/carousel/carousel";
import { getProductsDB } from "@/helpers/product-helper";

const HomePage = async () => {
  const products = await getProductsDB();
  return (
    <div >
      <div >
        <Carousel />
      </div>
      <div >
        <Cards products={products} />
      </div>
    </div>
  );
};

export default HomePage;
