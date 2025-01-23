import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export default function Group() {
  return (
    <section aria-labelledby="Group">
  <div
    className="md:flex mx-auto text-center gap-4 justify-between"
    role="list"
    aria-labelledby="features-list"
  >
    <div className="text-center" role="listitem" aria-labelledby="free-shipping">
      <div
        className="flex justify-center text-salmonColor text-6xl"
        aria-hidden="true"
      >
        <TbTruckDelivery />
      </div>
      <h3 id="free-shipping" className="text-2xl font-semibold my-10">
        FREE SHIPPING
      </h3>
      <p className="md:max-w-sm text-sm text-textColor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
    <div className="group" role="listitem" aria-labelledby="refund-policy">
      <div
        className="flex justify-center text-salmonColor text-6xl"
        aria-hidden="true"
      >
        <RiRefund2Line />
      </div>
      <h3 id="refund-policy" className="text-2xl font-semibold my-10">
        100% REFUND
      </h3>
      <p className="md:max-w-sm text-sm text-textColor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
    <div className="group" role="listitem" aria-labelledby="support">
      <div
        className="flex justify-center text-salmonColor text-6xl"
        aria-hidden="true"
      >
        <MdOutlineSupportAgent />
      </div>
      <h3 id="support" className="text-2xl font-semibold my-10">
        SUPPORT 24/7
      </h3>
      <p className="md:max-w-sm text-sm text-textColor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
  </div>
</section>

  );
}
