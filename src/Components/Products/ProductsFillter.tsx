"use client";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import React, { useState } from "react";
import Link from "next/link";
import {
  setCategory,
  setPriceMax,
  setPriceMin,
} from "@/Store/storeSlice/FilterSlice";
import { useCategory } from "@/Hooks/useCategory";
import Color from "../ui/Color";
export default function ProductsFillter() {
  const { priceMin, priceMax, category } = useAppSelector(
    (store) => store.filterSlice
  );
  const categories = useCategory();
  const dispatch = useRootDispatch();
  const [localPrice, setLocalPrice] = useState([priceMin, priceMax]);
  // Update priceMin and priceMax
  function handlePriceChange(values: [number, number]) {
    setLocalPrice(values);
    dispatch(setPriceMin(values[0]));
    dispatch(setPriceMax(values[1]));
  }
  return (
    <div className="flex flex-col gap-y-4 text-sm sticky top-0 m-0 md:mb-20">
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor" id="accessories-label">
        ACCESSORIES
      </h3>
      <ul
        className="space-y-4 text-textColor cursor-pointer"
        role="list"
        aria-labelledby="accessories-label"
      >
        {categories.slice(0, 7).map((item) => (
          <li key={item.id} role="listitem">
            <Link
              href={`/Products/${item.name}?page=1`}
              className={`flex justify-between ${
                category === item.id.toString()
                  ? "text-mainColor"
                  : "text-textColor"
              }`}
              onClick={() => dispatch(setCategory(item.id))}
              aria-current={category === item.id.toString() ? "page" : undefined}
            >
              <span>{item.name}</span>
              <span className="opacity-35">1</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] text-textColor uppercase" id="price-label">
        Price
      </h3>
      <div aria-labelledby="price-label">
        <label
          htmlFor="price"
          className="flex justify-between mb-4"
          id="price-range-description"
        >
          <span>Range:</span>
          <span>
            ${localPrice[0]} - ${localPrice[1]}
          </span>
        </label>
        <div className="flex">
          <RangeSlider
            min={0}
            max={100}
            step={5}
            value={localPrice}
            onInput={handlePriceChange}
            aria-labelledby="price-range-description"
          />
        </div>
      </div>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor uppercase" id="color-label">
        Color
      </h3>
      <div aria-labelledby="color-label">
        <Color />
      </div>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor uppercase" id="brand-label">
        Brand
      </h3>
      <ul
        className="space-y-4 text-textColor"
        role="list"
        aria-labelledby="brand-label"
      >
        <li className="flex justify-between" role="listitem">
          <span>Apple</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between text-mainColor" role="listitem">
          <span>LG</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between" role="listitem">
          <span>Samsung</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between" role="listitem">
          <span>Siemens</span>
          <span className="opacity-35">1</span>
        </li>
      </ul>
    </div>
    <button className="btnMore" role="button" aria-label="Show more options">
      More
    </button>
  </div>
  
  );
}

