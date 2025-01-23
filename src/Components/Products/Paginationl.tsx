import React from "react";
import Link from "next/link";
import { useProducts } from "@/Hooks/useProducts";
import NoItem from "../NoItem/NoItem";

const Pagination = ({
  currentPage,
  totalProducts,
  offset
}: {
  currentPage: number;
  totalProducts: number;
  offset: number;
}) => {
  const totalPages = Math.ceil(totalProducts / 12);
  const { products } = useProducts({offset});
  console.log(products, "products");

  if (products.length === 0) return <NoItem />;
  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`px-4 py-2 border rounded mx-1 ${
              currentPage === page ? "bg-mainColor text-white" : "bg-white"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};
export default Pagination;
