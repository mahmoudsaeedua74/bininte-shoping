import Image from "next/image";
import React from "react";
import logo from "@/Components/assets/images/logo.png";
import pay1 from "@/Components/assets/images/pay1 (1).png";
import pay2 from "@/Components/assets/images/pay1 (2).png";
import pay3 from "@/Components/assets/images/pay1 (1).webp";
import pay4 from "@/Components/assets/images/pay1 (3).png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const Data = [
  {
    title: "Information",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Service",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Extra",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "My Account",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Useful Links",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Our Offer",
    txt: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  },
];
export default function Footer() {
  return (
    <div className=" bg-[#F5F5F5] mt-20">
      <div className="py-14 border-y-4">
        <div className="container mx-auto px-4 md:px-0 border-b pb-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 md:gap-[100px]">
            <div className="flex flex-col gap-5">
              <Image src={logo} alt="logo" width={190} height={24} />
              <p className="text-sm md:text-base text-textColor">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever.Since the 1500s, when an unknown printer.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-lg font-semibold">Follow Us</h5>
              <p className="text-sm md:text-base text-textColor">
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="flex items-start justify-start gap-3 md:gap-5 flex-wrap">
                <FaFacebookF className="text-[16px] md:text-[20px] text-[#385C8E]" />
                <FaTwitter className="text-[16px] md:text-[20px] text-mainColor" />
                <FaFacebookF className="text-[16px] md:text-[20px] text-[#385C8E]" />
                <FaTwitter className="text-[16px] md:text-[20px] text-mainColor" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-lg font-semibold">Contact Us</h5>
              <ul className="text-sm md:text-base text-textColor">
                <li> My Company , 4578 Marmora Road, Glasgow D04 89GR</li>
                <li> Call us now: 0123-456-789 </li>
                <li> Email: support@whatever.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="container mx-auto px-4 md:px-0 grid sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-6">
            {Data.map((item, index) => (
              <div key={index}>
                <h5 className="text-lg font-semibold">{item.title}</h5>
                {item.txt.map((ele, index) => (
                  <p
                    className="opacity-95 my-2 text-sm md:text-base text-textColor"
                    key={index}
                  >
                    {ele}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-6 flex flex-wrap justify-between items-center">
        <span className="text-sm text-gray-500">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </span>
        <div className="flex flex-wrap gap-3">
          <Image src={pay1} alt="Payment Option 1" className="w-12 h-auto" />
          <Image src={pay2} alt="Payment Option 2" className="w-12 h-auto" />
          <Image src={pay3} alt="Payment Option 3" className="w-12 h-auto" />
          <Image src={pay4} alt="Payment Option 4" className="w-12 h-auto" />
        </div>
      </div>
    </div>
  );
}
