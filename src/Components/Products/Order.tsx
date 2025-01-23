"use client";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "@/Store/storeSlice/cartSlice";
import { Product } from "@/Types/products.typs";
import React from "react";
import { FaMinus, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TiPlus } from "react-icons/ti";
export default function Order({ products }: { products: Product }) {
  const dispatch = useRootDispatch();
  const currentQuantity = useAppSelector(getCurrentQuantityById(products.id));
  //this function for adding the product to the cart beacuse i need to add it to main cart but main dont have quantity or total price 
  //  so for that i made a new object with the product id and the quantity and the total price
  function handleAddToCart(item: Product) {
    const newItem = {
      productId: item.id,
      title: item.title,
      quantity: 1,
      price: item.price,
      totalPrice: item.price * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div className="flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">
      <div
        role="region"
        aria-labelledby="quantity-control"
        className="rounded py-3 px-4 flex items-center justify-center gap-4 bg-[#F6F7F8] text-[20px]"
      >
        <button
          aria-label="Increase quantity"
          className="text-mainColor font-bold"
          onClick={() => dispatch(increaseItemQuantity(products.id))}
        >
          <TiPlus />
        </button>
        <span className="text-textColor">{currentQuantity}</span>
        <button
          className="text-mainColor font-bold"
          onClick={() => dispatch(decreaseItemQuantity(products.id))}
          aria-label="Decrease quantity"
        >
          <FaMinus />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button
          aria-label="Add to shopping cart"
          className="btnCard text-secondColor"
          onClick={() => handleAddToCart(products)}
        >
          <HiOutlineShoppingCart size={20} /> <span>Add To Cart</span>
        </button>
        <button className="btnWash" role="button" aria-label="Add to wishlist">
          <FaRegHeart size={20} />
        </button>
      </div>
    </div>
  );
}
//this for making the product card