import React from "react";
// components
import ProductItem from "./ProductItem";
// types
import { Product } from "@/app/types";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  if (!products) {
    return <div>Loading Products...</div>;
  }

  return (
    <section className="sec-product bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>
        <div className="row">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
