"use client";
import CartItem from "@/Components/Cart/CartItem";
import NoItem from "@/Components/NoItem/NoItem";
import { useAppSelector } from "@/Hooks/useRedux";
import {
  getCarts,
  getTotalPrice,
  getTotalQuantity,
} from "@/Store/storeSlice/cartSlice";
import { ProductsCart } from "@/Types/store.types";

import Link from "next/link";
import React from "react";
export default function Cart() {
  const totalQuantity = useAppSelector(getTotalQuantity);
  const totalPrice = useAppSelector(getTotalPrice);
  const cart = useAppSelector(getCarts);
  if (cart.length == 0) return <NoItem />;
  return (
    <section className="container">
      <h2 className="text-xl font-semibold text-textColor  sm:text-2xl text-center mb-6">
        Shopping Cart
      </h2>
      <div className="px-4 2xl:px-0 flex flex-wrap lg:flex-nowrap lg:justify-between gap-6">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="rounded-lg  border  bg-white p-4 shadow-sm md:p-6">
            <div className="rounded-lg  space-y-3  bg-white p-4 shadow-sm md:p-6">
              {cart.map((item:ProductsCart,index) => 
              <CartItem item={item} key={index}/>
              )}
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 h-full bg-white p-4 shadow-sm  sm:p-6 w-full lg:w-1/3">
          <p className="text-xl font-semibold text-textColor ">
            Order Summary
          </p>
          <div className="space-y-4 mt-4">
            <dl className="flex justify-between">
              <dt className="text-base font-normal text-gray-500 ">
                Original price
              </dt>
              <dd className="text-base font-medium text-textColor ">
                {totalPrice}$
              </dd>
            </dl>
            <dl className="flex justify-between">
              <dt className="text-base font-normal text-gray-500 ">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-600">-$00</dd>
            </dl>
            <dl className="flex justify-between">
              <dt className="text-base font-normal text-gray-500 ">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-textColor ">
                $00
              </dd>
            </dl>
            <dl className="flex justify-between border-t pt-4 dark:border-gray-700">
              <dt className="text-base font-bold text-textColor ">
                Total item
              </dt>
              <dd className="text-base font-bold text-textColor ">
                {totalQuantity}
              </dd>
            </dl>
            <dl className="flex justify-between border-t pt-4 dark:border-gray-700">
              <dt className="text-base font-bold text-textColor ">
                Total
              </dt>
              <dd className="text-base font-bold text-textColor ">
                {totalPrice}$
              </dd>
            </dl>
          </div>

          <Link href="/Payment" className="block mt-4 w-full btn">
            Proceed to Checkout
          </Link>
          <p className="text-center w-full">or</p>
          <Link className="mt-4 w-full btn block " href="/Products/Products">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
