import Link from "next/link";
import React from "react";
import Order from "./Order";
import { Product } from "@/Types/products.typs";
import StarRating from "../ui/StarRating";
import Color from "../ui/Color";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
export default function ProductDescription({
  products,
}: {
  products: Product;
}) {
  return (
    <div className="flex flex-col gap-y-4 text-sm cursor-default p-4">
      <h3
        className="text-[24px] font-semibold capitalize text-textColor"
        id="productTitle"
      >
        {products.title}
      </h3>
      <div className="flex items-center gap-x-5">
        <div>
          <StarRating />
        </div>
        <p className="text-secondColor" aria-live="polite">
          0 reviews
        </p>
        <Link
          href={"/"}
          className="text-mainColor font-semibold"
          aria-label="Submit a review"
        >
          Submit a review
        </Link>
      </div>
      <div className="border-b-2 border-borderColor w-full"></div>
      <div className="text-[24px] flex gap-2">
        <p className="text-salmonColor">${products.price}</p>
        <p className="line-through text-secondColor">$599</p>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="font-bold text-textColor">Availability : </p>
        <p>in Stock</p>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="font-bold text-textColor">Category :</p>
        <p>Accessories</p>
      </div>
      <p className="font-bold text-textColor">Free shipping</p>
      <div className="border-b-2 border-borderColor w-full"></div>
      <div className="flex gap-4 items-center">
        <p className="font-bold text-textColor">Select Color:</p>
        <Color />
      </div>
      <div className="flex gap-8 items-center">
        <p className="font-bold">Size :</p>
        <select
          defaultValue={"xs"}
          className="w-1/4 max-w-xs p-1
         text-gray-700
          bg-white border-2
           border-[#F1F3F4] 
           rounded-md shadow-sm 
           focus:outline-none px-2
            focus:ring-[#F1F3F4] 
            focus:border-[#F1F3F4] transition-all duration-300"
          aria-label="Select size"
        >
          <option value="xs">xs</option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="xl">xl</option>
          <option value="2xl">2xl</option>
        </select>
      </div>
      <div className="border-b-2 border-borderColor w-full"></div>
      <Order products={products}/>
      <div className="border-b-2 border-borderColor w-full"></div>
      <div className="flex justify-between gap-4">
        <button
          type="button"
          className=" btnFacebook
        space-x-2"
          aria-label="Share on Facebook"
        >
          <FaFacebookF size={20} />
          <span>Share on Facebook</span>
        </button>
        <button
          type="button"
          className="space-x-2 btnTwitter"
          aria-label="Share on Twitter"
        >
          <FaTwitter />
          <span> Share on Twitter</span>
        </button>
      </div>
    </div>
  );
}
