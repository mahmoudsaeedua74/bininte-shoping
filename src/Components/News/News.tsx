import React from "react";
import Rectangle1 from "@/Components/assets/images/Rectangle.png";
import Rectangle2 from "@/Components/assets/images/Rectangle1.png";
import Rectangle3 from "@/Components/assets/images/Rectangle2.png";
import Image from "next/image";
export default function CarouselAds() {
  return (
    <section aria-labelledby="latest-news-section">
      <h3
        id="latest-news-section"
        className="font-semibold text-3xl mt-10 mb-14 text-center"
      >
        LATEST NEWS
      </h3>
      <div className="flex mx-auto gap-4 justify-between  flex-col md:flex-row">
        
        <div className="flex justify-between gap-4 md:mt-4">
          <Image
            src={Rectangle2}
            width={140}
            height={166}
            alt="News article: Typesetting industry with dummy text description"
            
          />
         <div className="self-center">
            <span className="text-secondColor text-sm">01 Jan, 2015</span>
            <h4
              className="text-textColor text-[18px] font-bold my-2"
              aria-label="Article title: Typesetting industry"
            >
              Typesetting industry
            </h4>
            <p
              className="md:max-w-60 text-sm text-textColor"
              aria-label="Article description: Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 md:mt-4">
          <Image
            src={Rectangle3}
            width={140}
            height={166}
            alt="News article: Typesetting industry with dummy text description"
          />
          <div className="self-center">
            <span className="text-secondColor text-sm">01 Jan, 2015</span>
            <h4
              className="text-textColor text-[18px] font-bold my-2"
              aria-label="Article title: Typesetting industry"
            >
              Typesetting industry
            </h4>
            <p
              className="md:max-w-60 text-sm text-textColor"
              aria-label="Article description: Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 md:mt-4">
          <Image
            src={Rectangle1}
            width={140}
            height={166}
            alt="News article: Typesetting industry with dummy text description"
          />
          <div className="self-center">
            <span className="text-secondColor text-sm">01 Jan, 2015</span>
            <h4
              className="text-textColor text-[18px] font-bold my-2"
              aria-label="Article title: Typesetting industry"
            >
              Typesetting industry
            </h4>
            <p
              className="md:max-w-60 text-sm text-textColor"
              aria-label="Article description: Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
