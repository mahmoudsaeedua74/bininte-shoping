import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
const LoaderProducts: React.FC = () => {
  return (
    <div className="w-48 mx-auto mt-14 p-2 grid grid-cols-2 ">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="p-2 text-mainColor text-[60px] icon-basket flex "
        >
          <FaShoppingBasket />
        </div>
      ))}
    </div>
  );
};

export default LoaderProducts;
