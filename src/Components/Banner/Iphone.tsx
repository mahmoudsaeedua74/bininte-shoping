"use client";
import React, { useState } from "react";
import iphoens from "@/Components/assets/images/iPhone6.png";
import Image from "next/image";
import Module from "../Module/Module";
export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <section className="bg-mainColor">
      <div className=" container flex flex-col md:flex-row justify-evenly items-center gap-6 ">
        <div className="iphone text-white self-center cursor-default ">
          <h2 className="font-bold text-[24px] mt-6 md:m-0">iPhone 6 Plus </h2>
          <p className="my-12 max-w-sm">
            Performance and design. Taken right to the edge.
          </p>
          <button className="font-semibold border-b-4 pb-1 " onClick={toggleModal}>SHOP NOW</button>
        </div>
        <Image src={iphoens} alt="this is for iphone x"  width={326.99} height={340}/>
      </div>
      {showModal && <Module toggleModal={toggleModal} />}
    </section>
  );
}
