"use client";
import Banner from "@/Components/Banner/Iphone";
import FillterDisplay from "@/Components/Products/FillterDisplay";
import Pagination from "@/Components/Products/Paginationl";
import Products from "@/Components/Products/Products";
import ProductsFillter from "@/Components/Products/ProductsFillter";
import ProductsNav from "@/Components/Products/ProductsNav";
import React, { use } from "react";
const Page = ({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: Promise<{ id: string; category: string; dis: string }>;
  searchParams: Promise<{ page?: string | number }>;
}) => {
  const params = use(paramsPromise);
  const searchParams = use(searchParamsPromise);
  const offset = (parseInt(searchParams.page?.toString() || "1") - 1) * 12;
  return (
    <section className="container">
      <div className="my-md">
        <ProductsNav slug={params} />
      </div>
      <div className="grid md:grid-cols-[1fr_3fr] gap-12">
        <div>
          <ProductsFillter />
        </div>
        <div>
          <Banner />
          <div>
            <FillterDisplay offset={offset} />
            <Products offset={offset} />
          </div>
          <Pagination
            currentPage={parseInt(searchParams.page?.toString() || "1")}
            totalProducts={50}
            offset={offset}
          />
        </div>
      </div>
    </section>
  );
};
export default Page;
