import Link from "next/link";
import React from "react";
import UpdataItemQuantity from "../Products/UpdataItemQuantity";
import { useRootDispatch } from "@/Hooks/useRedux";
import { deleteItem } from "@/Store/storeSlice/cartSlice";
import { itemCart } from "@/Types/store.types";
export default function CartItem({ item }: itemCart) {
  const dispatch = useRootDispatch();
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 border p-4 rounded">
      
      <div className="flex-1">
        <Link
          href={`/`}
          className="text-base cursor-pointer font-medium text-gray-900  dark:text-white"
        >
          {item.title}
        </Link>
        <div className="flex items-center gap-4 mt-2">
          <button
            type="button"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400"
          >
            Add to Favorites
          </button>
          <button
            onClick={() => dispatch(deleteItem(item.productId))}
            type="button"
            className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
      <UpdataItemQuantity productId={item.productId} />
      <div className="text-end w-full sm:w-32">
        <p className="text-base font-bold text-gray-900 dark:text-white">
          {item.totalPrice}$
        </p>
      </div>
    </div>
  );
}
