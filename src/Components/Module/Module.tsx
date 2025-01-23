"use client";
import React, { useRef } from "react";
import gift from "@/Components/assets/images/gift.jpg";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
//this module for Subscribe and its toggle and you can close it and open it 
export default function Module({ toggleModal }: { toggleModal: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        onClick={(e) => {
          if (ref.current && !ref.current.contains(e.target as Node)) {
            {/*this for close the module when you put in any layer*/}
            toggleModal();
          }
        }}
        className="fixed inset-0 h-screen flex items-center justify-center transition-all duration-300 bg-black bg-opacity-70 z-50"
      >
        <div
          ref={ref}
          className="bg-white flex md:flex-row flex-col rounded-md overflow-hidden shadow-lg relative"
        >
          <button
            className="absolute -top-0 end-2 text-textColor text-4xl font-bold hover:text-black"
            onClick={toggleModal}
          >
            <AiFillCloseCircle />

          </button>

          <div className=" p-8 text-center flex-1 self-center">
            <h3 className="text-4xl font-bold mb-4">Newsletter</h3>
            <p className="max-w-sm mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center border border-gray-300 rounded-md mb-4">
              <input
                type="text"
                className="flex-grow outline-none px-3 py-2 rounded-l-md"
                placeholder="Search query..."
              />
              <button className="btnSub">
                Subscribe
              </button>
            </div>
            <label className="flex items-center gap-2 text-textColor text-sm">
              <input type="checkbox" />
              Don’t show this popup again
            </label>
          </div>
          <div className="mx-auto">
            <Image
              src={gift}
              width={407}
              height={480}
              alt="Gift"
            />
          </div>
        </div>
      </div>
    </>
  );
}
