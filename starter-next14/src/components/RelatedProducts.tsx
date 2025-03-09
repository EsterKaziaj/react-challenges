import React from "react";
// components
import ProductItem from "./ProductItem";
// types
import { Product } from "@/app/types";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const RelatedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  if (!products) {
    return <div>Loading Products...</div>;
  }

  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
