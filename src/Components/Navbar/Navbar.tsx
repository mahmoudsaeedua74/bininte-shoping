"use client";

import { useCategory } from "@/Hooks/useCategory";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import { getTotalPrice, getTotalQuantity } from "@/Store/storeSlice/cartSlice";
import { usePathname } from "next/navigation";
import logo from "@/Components/assets/images/logo.png"
import { useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import Cart from "../Cart/Cart";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { setCategory } from "@/Store/storeSlice/FilterSlice";

export default function Navbar() {
  const pathName = usePathname();
  const category = useCategory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useRootDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalQuantity = useAppSelector(getTotalQuantity);

  return (
    <>
      <nav
        onClick={(e) => {
          if (ref.current && !ref.current.contains(e.target as Node)) {
            {
              /*this for close the cart when you put in any layer*/
            }
            setCartOpen(!cartOpen);
          }
        }}
        className="pb-10"
      >
        <div className="border-b pb-3 py-2 ">
          <div className="flex md:justify-between items-center justify-center container mx-auto">
            <div className="md:flex hidden">
              <ul>
                <select
                  name="language"
                  id=""
                  defaultValue={"EN"}
                  aria-label="Select Language"
                >
                  <option value="EN">EN</option>
                  <option value="AR">AR</option>
                </select>
              </ul>
              <ul>
                <select
                  name="currency"
                  id=""
                  defaultValue={"USD"}
                  aria-label="Select Currency"
                >
                  <option value="USD">USD</option>
                  <option value="EGP">EGP</option>
                </select>
              </ul>
            </div>
            <div>
              <ul className="flex gap-8">
                <li className="flex justify-center items-center gap-2 cursor-pointer">
                  <BiUser />
                  <span> My profile</span>
                </li>
                <button
                  className="cursor-pointer flex justify-center items-center gap-2"
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <RiShoppingBasketLine />
                  <span>{totalQuantity}</span>
                  item
                  <span className="opacity-[50%]">${totalPrice}</span>
                </button>
                <li className="flex justify-center items-center gap-2">
                  <FaSearch className="text-[18px]" aria-label="Search" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {cartOpen ? <div ref={ref}><Cart setCartOpen={setCartOpen} cartOpen={cartOpen}/></div> : null}

        <div className="relative container mx-auto justify-between px-4 flex flex-col ">
          <div className="my-8 flex justify-center order">
            <Link href={"/"}>
              <Image src={logo} alt="Website Logo " />
            </Link>
          </div>
          <button
            className="md:hidden text-xl mx-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden justify-center"
            } flex-col items-center mt-4 md:flex-row md:flex gap-6 text-sm font-semibold  md:space-x-10`}
          >
            <li>
              <Link
                className={`${
                  pathName === "/" ? "text-mainColor" : "text-textColor"
                } `}
                href="/"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/Products/Products"}
                className={`${
                  pathName === "/Products/Products"
                    ? "text-mainColor"
                    : "text-textColor"
                } `}
              >
                Products
              </Link>
            </li>
            {category.slice(0, 5).map((item) => (
              <Link
                href={`/Products/${item.name}?page=1`}
                onClick={() => dispatch(setCategory(item.id))}
                key={item.id}
                className={`${
                  pathName === `/Products/${item.name}`
                    ? "text-mainColor"
                    : "text-textColor"
                } `}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
