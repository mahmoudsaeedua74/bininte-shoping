"use client";
import React, { useEffect } from "react";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import { setSelectedTab } from "@/Store/storeSlice/ProductsRelatiedSlice";
import { useCategory } from "@/Hooks/useCategory";
import Link from "next/link";
import RelatedProduct from "../Products/RelatedProduct";
export default function SellerMenu() {
  const selectedTab = useAppSelector(
    (store) => store.RelatedProductSlice.selectedTab
  );
  const categories = useCategory();
  const dispatch = useRootDispatch();
  useEffect(() => {
    dispatch(setSelectedTab(categories?.length > 0 ? categories[0].id : null));
  }, [categories, dispatch]);
  return (
    <section className=" text-center">
      <div className="text-3xl font-semibold my-12">
        <p>BEST SELLER</p>
      </div>
      <div className="">
        <ul
          className="text-center
         flex md:flex-row gap-x-10 gap-y-6 flex-col justify-center items-center cursor-default my-10"
        >
          {categories?.slice(0, 5).map((item) => (
            <li
              role="listitem"
              key={item.id}
              
              className={`
            ${
              selectedTab === item.id
                ? "border-b-2 border-[#33A0FF] text-[#33A0FF] transition-colors"
                : "" + "cursor-pointer"
            }
            `}
              onClick={() => dispatch(setSelectedTab(item.id))}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <RelatedProduct limit={8} />
        <Link
        href={"/Products/Products"}
        className="text-mainColor mx-auto text-center  border-b-mainColor font-bold border-b-2"
      >
        LOAD MORE
      </Link>
      </div>
    </section>
  );
}
