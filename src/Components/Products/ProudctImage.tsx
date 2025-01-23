"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function ProudctImage({ products }: { products: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div>
    <div className="flex w-full justify-center items-center mb-4">
      <Image
        src={products[currentIndex]}
        alt={`Selected Product ${currentIndex + 1}`}
        width={370}
        height={370}
        className="rounded-sm transition-transform duration-500 ease-in-out scale-100 hover:scale-[1.03]"
        role="img"
        aria-labelledby="selectedProduct"
      />
    </div>
    <div className="flex justify-center gap-4 ">
      {products.map((image, index) => (
        <div
          key={index}
          onClick={() => setCurrentIndex(index)}
          onKeyDown={(e) => e.key === "Enter" && setCurrentIndex(index)}
          role="button"
          tabIndex={0} 
          aria-label={`Product image ${index + 1}`}
          className={`border-4 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
            currentIndex === index ? "border-[#006CFF] scale-105" : "border-transparent"
          }`}
        >
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={84}
            height={84}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </div>
  
  );
}
