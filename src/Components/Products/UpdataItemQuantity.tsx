import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "@/Store/storeSlice/cartSlice";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
interface UpdataItemQuantityProps {
  productId: string;
}
const UpdataItemQuantity: React.FC<UpdataItemQuantityProps> = ({
  productId,
}) => {
  const currentQuantity = useAppSelector(getCurrentQuantityById(productId));
  const dispatch = useRootDispatch();

  return (
    <div className="flex items-center mt-4 sm:mt-0">
      <button
        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        type="button"
      >
        <FaMinus />
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => dispatch(increaseItemQuantity(productId))}
        type="button"
      >
        <FaPlus />
      </button>
    </div>
  );
};
export default UpdataItemQuantity;
