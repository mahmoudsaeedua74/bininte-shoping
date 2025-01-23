import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductsNav({
  slug,
}: {
  slug: { id: string; category: string; dis: string };
}) {
  return (
    <nav className="bg-[#FBFBFC] py-2 text-center space-x-4 my-8 cursor-default flex justify-center items-center">
      <Link href={"/"} className="text-mainColor">
        Home{" "}
      </Link>
      <div className="text-textColor">
        <IoIosArrowForward />
      </div>
      <div className="text-mainColor"><p>{slug.category}</p></div>
      <div className="text-textColor">
      {slug.dis ? <IoIosArrowForward /> :null}
      </div>
      <div className=" md:max-w-md max-w-max"><p>{slug.dis}</p></div>
    </nav>
  );
}
