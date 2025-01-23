import React from "react";
import ProudctImage from "./ProudctImage";
import ProductDescription from "./ProductDescription";
import ProductsInfo from "./ProductsInfo";
import ProductsAd from "./ProductsAd";
import { Product } from "@/Types/products.typs";

export default function ProductDetails({ products }: { products: Product }) {
  return (
    <section
      className="grid  gap-12
    lg:grid-cols-[2.5fr_1fr] 
    grid-cols-1 
    "
    >
      <div className="flex flex-col">
        <div className=" md:grid grid-cols-[1fr_1.5fr] gap-4">
          <div className="image mb-6">
            <ProudctImage products={products.images} />
          </div>
          <div>
            {" "}
            <ProductDescription products={products} />
          </div>
        </div>
        <div>
          <ProductsInfo />
        </div>
      </div>
      <div>
        <ProductsAd />
      </div>
    </section>
  );
}
