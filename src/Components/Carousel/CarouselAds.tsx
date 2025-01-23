import React from "react";
import gift1 from "@/Components/assets/images/sale22.png";
import gift2 from "@/Components/assets/images/sale3.png";
import gift3 from "@/Components/assets/images/iPhone6.png";
import Image from "next/image";
export default function Gifts() {
  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-between items-stretch container -translate-y-11">
    <div className="relative md:w-1/3 bg-[#FF6875] flex flex-col md:flex-row justify-between items-center p-4" role="region" aria-labelledby="iphone6-heading">
      <div>
        <h2 id="iphone6-heading" className="text-white text-sm font-bold">iPhone 6</h2>
        <p className="text-white text-xs">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
        </p>
        <h2 className="text-white font-bold text-lg">$399</h2>
      </div>
      <Image src={gift3} alt="iPhone 6" width={222} height={202} />
    </div>
  
    <div className="relative md:w-1/3 bg-[#F6F7F8] flex flex-col justify-between items-center p-4" role="region" aria-labelledby="oculus-heading">
      <Image src={gift1} alt="Oculus Rift" width={222} height={202} className="mb-4" />
      <div className="text-black">
        <h2 id="oculus-heading" className="text-sm font-bold">Oculus Rift</h2>
        <h2 className="text-sm font-bold">$349</h2>
      </div>
    </div>
  
    <div className="relative md:w-1/3 bg-[#C1C8CE] flex md:flex-row flex-col justify-between items-center p-4" role="region" aria-labelledby="gopro-heading">
      <div>
        <h2 id="gopro-heading" className="text-black text-sm font-bold">GoPro Hero 6</h2>
        <p className="text-black text-xs">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
        </p>
        <h2 className="text-black font-bold text-lg">$299</h2>
      </div>
      <Image src={gift2} alt="GoPro Hero 6" width={222} height={202} className="mt-4" />
    </div>
  </div>
  
  );
}
