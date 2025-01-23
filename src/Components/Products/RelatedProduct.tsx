"use client";
import { Product } from "@/Types/products.typs";
import isComing from "@/Components/assets/images/isComingSoon.jpeg";
import { useState } from "react";
import { useAppSelector, useRootDispatch } from "../../Hooks/useRedux";
import { gql, useQuery } from "@apollo/client";
import LoaderProducts from "@/Components/Loading/LoaderProducts";
import Error from "@/Components/Error/Error";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import StarRating from "../ui/StarRating";
import { addItem } from "@/Store/storeSlice/cartSlice";

export default function RelatedProduct({ limit }: { limit: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const selectedTab = useAppSelector(
    (store) => store.RelatedProductSlice.selectedTab
  );
  const dispatch = useRootDispatch();
  const getBestProducts = gql`
      query GetProducts{
                products(categoryId: ${selectedTab}, limit: ${limit}, offset: 0 ) {
                id
                title
                price
                description
                images
                category {
                  id
                  name
                  image
                }
              }
            }
          `;

  const { loading, error } = useQuery(getBestProducts, {
    onCompleted: (data) => setProducts(data.products),
  });
  const isImageValid = (image: string) => {
    try {
      new URL(image);
      return true;
    } catch {
      return false;
    }
  };
  if (loading) return <LoaderProducts />;
  if (error) {
    return <Error />;
  }
  return (
    <>
      <section
        className=" 
          grid lg:grid-cols-4 md:grid-cols-3
           sm:grid-cols-2 
          grid-cols-1 
          justify-between items-center gap-6 mb-10"
      >
        {products?.map((item) => {
          const validImage = isImageValid(item.images[0]);
          return (
            <div key={item.id} className="card">
              {validImage ? (
                <div className="relative">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={236}
                    height={150}
                  />
                  <div className="cardLayer">
                    <div
                      onClick={() => dispatch(addItem(item))}
                      className="layerImage  "
                    >
                      <AiOutlineShoppingCart
                        size={30}
                        style={{ color: "#33A0FF" }}
                      />
                    </div>
                    <span className="layerImage       ">
                      <FiHeart size={30} style={{ color: "#33A0FF" }} />
                    </span>
                    <Link
                      href={`/product/${item.id}/${
                        item.category.name
                      }/${item.title.replace(/[\s\"\'\"]/g, "-")}`}
                      className="layerImage      "
                    >
                      <FaEye size={30} style={{ color: "#33A0FF" }} />
                    </Link>
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
              <h3 className="text-[14px]  font-semibold capitalize text-textColor border-t-4 pt-2">
                {item.title.slice(0, 22)}
              </h3>{" "}
              <StarRating />
              <div className="text-[16px] flex gap-2">
                <p className="text-salmonColor">${item.price}</p>
                <p className="line-through text-secondColor">$599</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
