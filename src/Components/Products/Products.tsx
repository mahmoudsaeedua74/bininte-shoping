import Image from "next/image";
import Link from "next/link";
import React from "react";
import isComing from "@/Components/assets/images/isComingSoon.jpeg";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import StarRating from "../ui/StarRating";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Product } from "@/Types/products.typs";
import { addItem } from "@/Store/storeSlice/cartSlice";
import { useProducts } from "@/Hooks/useProducts";
import Loading from "../Loading/loading";
import Error from "../Error/Error";
export default function Products({ offset }: { offset: number }) {
  //here i display the products and i use the useProducts hook to get the products
  const { products, isImageValid, loading, error } = useProducts({offset});
  const { layoutGrid } = useAppSelector((store) => store.filterSlice);
  const dispatch = useRootDispatch();
  //tha handleAddToCart function is for adding the product to the cart tha same logic in the Order component
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
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <section
      className={`grid 
       ${
         layoutGrid
           ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-between items-center gap-6 mb-10"
           : "grid-cols-1  "
       }
      `}
    >
      {products?.map((item) => {
        const validImage = isImageValid(item.images[0]);
        return (
          <div
            key={item.id}
            className={`${
              layoutGrid
                ? "card"
                : "flex gap-3 py-4  border-b-2 md:flex-row flex-col"
            } `}
          >
            {validImage ? (
              <div
                className={`relative ${
                  layoutGrid ? "" : "border-borderColor p-5 border-2 rounded"
                } flex justify-center items-center `}
              >
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={236}
                  height={150}
                  className="w-full"
                />
                <div className="cardLayer">
                  {layoutGrid ? (
                    <>
                      {" "}
                      <div
                        onClick={() => handleAddToCart(item)}
                        className="layerImage"
                      >
                        <AiOutlineShoppingCart
                          size={30}
                          style={{ color: "#33A0FF" }}
                        />
                      </div>
                      <span
                        onClick={() => console.log("hello")}
                        className="layerImage"
                      >
                        <FiHeart size={30} style={{ color: "#33A0FF" }} />
                      </span>
                      <Link
                        href={`/product/${item.id}/${
                          item.category.name
                        }/${item.title.replace(/[\s\"\'\"]/g, "-")}`}
                        className="layerImage "
                      >
                        <FaEye size={30} style={{ color: "#33A0FF" }} />
                      </Link>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/product/${item.id}/${
                          item.category.name
                        }/${item.title.replace(/[\s\"\'\"]/g, "-")}`}
                        className="layerImage      "
                      >
                        <FaEye size={30} style={{ color: "#33A0FF" }} />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Link
                href={`/product/${item.id}/${
                  item.category.name
                }/${item.title.replace(/[\s\"\'\"]/g, "-")}`}
              >
                <Image
                  src={isComing}
                  alt={item.title}
                  width={236}
                  height={153}
                />
              </Link>
            )}
            <div className="flex-1">
              <h3
                id="productTitle"
                className={`  font-semibold capitalize text-textColor ${
                  layoutGrid
                    ? "border-t-4 text-[14px] pt-2"
                    : "text-[24px] font-semibold capitalize text-textColor"
                } `}
              >
                {layoutGrid ? item.title.slice(0, 18) : item.title}
              </h3>{" "}
              {layoutGrid ? (
                <StarRating />
              ) : (
                <div className="flex items-center gap-x-5 my-3 border-b-2 border-borderColor w-fit">
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
              )}
              <div
                className={`  ${
                  layoutGrid ? "text-[16px] " : "text-[24px] my-4"
                } flex gap-2 `}
              >
                <p className="text-salmonColor">${item.price}</p>
                <p className="line-through text-secondColor">$599</p>
              </div>
              {layoutGrid ? null : (
                <>
                  <p className="text-textColor text-sm">{item.description}</p>

                  <div className="flex items-center gap-6 mt-3">
                    <button
                      aria-label="Add to shopping cart"
                      className="btnCard text-mainColor"
                      onClick={() => handleAddToCart(item)}
                    >
                      <HiOutlineShoppingCart size={20} />{" "}
                      <span>Add To Cart</span>
                    </button>
                    <button
                      className="btnWash"
                      role="button"
                      aria-label="Add to wishlist"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
