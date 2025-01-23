"use client";
import React, { useState } from "react";
import iphone from "@/Components/assets/images/iphonex.png";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Module from "../Module/Module";
import CarouselAds from "./CarouselAds";
export default function Carousel() {
  const [isCarousel, setIsCarousel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <section>
      <div
        className="bg-gradient-to-l
      from-[#FF4858] via-[#AE5DD0] to-[#8F65FF]"
      >
        <div
          className="container flex flex-col md:flex-row justify-between items-center gap-6 "
          role="region"
          aria-labelledby="carousel-title"
        >
          <button
            className="text-3xl text-[#22262A] md:order-none order-1 mt-4"
            onClick={() => setIsCarousel(!isCarousel)}
            aria-label="Previous Item"
          >
            <MdArrowBackIosNew />
          </button>

          <div
            id="carousel-title"
            className="text-white text-center md:text-left md:order-none order-3"
          >
            <h2 className="font-bold text-4xl ">
              {isCarousel ? "IPhone S" : "IPhone X"}
            </h2>
            <p
              className="max-w-max md:max-w-md
            "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy.
            </p>
            <button
              className="font-semibold border-b-4 pb-1 focus:ring-2 focus:ring-white"
              onClick={toggleModal}
              aria-haspopup="dialog"
            >
              MORE
            </button>
          </div>
          <Image
            src={iphone}
            alt={isCarousel ? "Image of IPhone S" : "Image of IPhone X"}
            width={540}
            height={620}
            className=" md:order-none order-2 mx-auto"
          />

          <button
            className="text-3xl text-[#22262A] md:order-none order-4 mb-4"
            onClick={() => setIsCarousel(!isCarousel)}
            aria-label="Next Item"
          >
            <MdArrowForwardIos />
          </button>
        </div>
        {showModal && <Module toggleModal={toggleModal} />}
      </div>
      <div>
        <CarouselAds />
      </div>
    </section>
  );
}
