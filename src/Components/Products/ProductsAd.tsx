import React from "react";
import Image from "next/image";
import image1 from "@/Components/assets/images/add.png";
import image2 from "@/Components/assets/images/sals.svg";
import StarRating from "../ui/StarRating";

export default function ProductsAd() {
  return (
    <div className="">
      <h6 className="text-[18px] text-secondColor font-semibold  mb-6 uppercase">
        Best Seller
      </h6>
      <div>
        <div className="card">
          <Image src={image1} alt="This is card" width={236} height={153} />
          <h3 className="text-[14px]  font-semibold capitalize text-textColor border-t-4 pt-2">
            Apple Macbook Pro
          </h3>
          <StarRating />
          <div className="text-[16px] flex gap-2">
            <p className="text-salmonColor">$499</p>
            <p className="line-through text-secondColor">$599</p>
          </div>
        </div>
      </div>
      <div className="bg-secondColor min-h-lg mt-10">
        <div className="p-5 flex flex-col justify-between  gap-5">
          <h5 className="font-bold text-[24px]">GoPro Hero 6</h5>
          <p className="text-[12px] text-textColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          <p className="text-[24px] text-textColor  opacity-75">$299</p>
          <Image src={image2} width={300} height={173} alt="staticImage2" />
        </div>
      </div>
    </div>
  );
}
