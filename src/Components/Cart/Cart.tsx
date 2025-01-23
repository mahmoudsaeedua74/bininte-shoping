import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import isComingSoon from "@/Components/assets/images/isComingSoon.jpeg";
import {
  deleteItem,
  getCarts,
  getTotalPrice,
} from "@/Store/storeSlice/cartSlice";
import { CartProps } from "@/Types/products.typs";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

export default function Cart({ setCartOpen, cartOpen }: CartProps) {
  const cart = useAppSelector(getCarts);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispatch = useRootDispatch();

  return (
    <div className="flex justify-end   ">
      <div className="px-4 z-50 py-6 sm:px-6 md:px-8 sm:py-8 bg-[#FAFAFB] rounded-md  border-2 mt-2 border-borderColor shadow-lg me-4 absolute">
        <button
          className="absolute -top-0 end-2 text-textColor text-4xl font-bold hover:text-black pb-4"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <AiFillCloseCircle />
        </button>
        <div className="flow-root">
          <ul className="-my-8">
            {cart.slice(0, 2).map((item, index) => {
              if (cart.length == 0) return <p key={index}>no item yet sorry</p>;
              return (
                <li
                  key={index}
                  className="flex flex-col space-y-3 py-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                >
                  <div className="shrink-0 relative">
                    <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow">
                      {item.quantity}
                    </span>
                    <Image
                      className="h-24 w-24 max-w-full rounded-lg object-cover sm:h-28 sm:w-28"
                      src={isComingSoon}
                      alt="Nike Air Max"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-400 my-2">
                          {" "}
                          {item.title}
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-600 transition-all mt-4 duration-200"
                      onClick={() => dispatch(deleteItem(item.productId))}
                    >
                      <MdDeleteForever size={25} />
                    </button>
                  </div>
                </li>
              );
            })}
            <li className="text-center my-3">
              <Link
                href={"/cart"}
                className="text-center w-full mx-auto text-mainColor py-3"
              >
                show more...
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-6 space-y-3  border-t border-b py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="text-lg font-semibold text-gray-900">{totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">Shipping</p>
            <p className="text-lg font-semibold text-gray-900">$0.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">
            <span className="text-sm font-normal text-gray-400">$</span>{" "}
            {totalPrice}
          </p>
        </div>

        <div className="mt-6 text-center flex gap-4">
          <button
            type="button"
            className="group 
            inline-flex w-full items-center 
            justify-center rounded-md
             bg-mainColor px-4 py-3 sm:px-6 sm:py-4 text-lg font-semibold text-white hover:bg-gray-800 transition-all duration-200"
          >
            pay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:ml-2 ml-4 h-5 w-5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <Link
            href={"/cart"}
            onClick={() => setCartOpen(!cartOpen)}
            type="button"
            className="group 
            inline-flex w-full items-center 
            justify-center rounded-md
          bg-white border-mainColor border-4
          text-mainColor px-4 py-3 sm:px-6 sm:py-4 text-lg font-semibold 
           hover:bg-gray-800 transition-all duration-200
              hover:text-white  hover:border-gray-800
          "
          >
            cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:ml-2 ml-4 h-5 w-5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
