import React from "react";
import sale1 from "@/Components/assets/images/sale1.png";
import sale2 from "@/Components/assets/images/sale2.png";
import sale3 from "@/Components/assets/images/sale3.png";
import Image from "next/image";
import StarRating from "../ui/StarRating";
export default function FeatureProducts() {
  return (
    <section aria-labelledby="featured-products-heading">
    <h3 id="featured-products-heading" className="font-semibold text-3xl mt-10 mb-14 text-center">
      FEATURED PRODUCTS
    </h3>
    <div className="flex md:flex-row flex-col mx-auto gap-4 justify-center lg:justify-evenly" role="list">
      <div role="listitem" className="flex flex-col items-center gap-4 w-full md:w-1/3">
        <div className="relative">
          <Image src={sale1} alt="Beats Solo 2 On Ear Headphones - Black" width={210} height={158} />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold text-textColor mb-2">{'Beats Solo 2 On Ear Headphones - Black'}</h3>
          <StarRating />
          <p className="text-lg font-semibold text-salmonColor">
            $499 <span className="line-through text-secondColor">$4000</span>
          </p>
        </div>
      </div>
      <div role="listitem" className="flex flex-col items-center gap-4 w-full md:w-1/3">
        <div className="relative">
          <Image src={sale2} alt="H-Squared tvTray" width={162} height={162} />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold text-textColor mb-2">{'H-Squared tvTray'}</h3>
          <StarRating />
          <p className="text-lg font-semibold text-salmonColor">
            $499 <span className="line-through text-secondColor">$4000</span>
          </p>
        </div>
      </div>
      <div role="listitem" className="flex flex-col items-center gap-4 w-full md:w-1/3">
        <div className="relative">
          <Image src={sale3} alt="Netatmo Rain Gauge" width={209} height={137} className="object-cover z-10 relative" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold text-textColor mb-2">{'Netatmo Rain Gauge'}</h3>
          <StarRating />
          <p className="text-lg font-semibold text-salmonColor">
            $499 <span className="line-through text-secondColor">$4000</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
}
