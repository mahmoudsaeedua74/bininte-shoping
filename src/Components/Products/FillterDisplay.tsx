import { useProducts } from "@/Hooks/useProducts";
import { useAppSelector, useRootDispatch } from "@/Hooks/useRedux";
import {
  setLayoutGrid,
  setLayoutSlice,
  setShow,
  setSortByName,
} from "@/Store/storeSlice/FilterSlice";
import React from "react";
import { MdTableRows } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
export default function FillterDisplay({ offset }: { offset: number }) {

  //here you can fillter the products by  show the products by 6 or 12 and you can change the layout of the products to be grid or list
  const dispatch = useRootDispatch();
  const { layoutGrid, layoutSlice, show } = useAppSelector(
    (store) => store.filterSlice
  );
  const { products } = useProducts({ offset });


  return (
    <div className="bg-[#F6F7F8] rounded py-3 text-sm my-4 px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
        <p>{products.length} item</p>
        <div className="flex items-center gap-2">
          <label htmlFor="sortByName" className="text-textColor font-medium">
            Sort by Name:
          </label>
          <select
            id="sortByName"
            className="bg-transparent border border-borderColor rounded px-2 py-1 text-sm"
            onChange={(e) => dispatch(setSortByName(e.target.value))}
            defaultValue={"name"}
          >
            <option value="name">Name</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="showItems" className="text-textColor font-medium">
            Show:
          </label>
          <select
            id="showItems"
            className="bg-transparent border border-borderColor rounded px-2 py-1 text-sm"
            onChange={(e) => dispatch(setShow(e.target.value))}
            defaultValue={show}
          >
            <option value="12">12</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <TfiLayoutGrid3Alt
          size={20}
          onClick={() => dispatch(setLayoutGrid())}
          className={`${layoutGrid ? "text-mainColor" : "text-textColor"}`}
          aria-label="Grid layout"
          role="button"
        />
        <MdTableRows
          size={30}
          onClick={() => dispatch(setLayoutSlice())}
          className={`${layoutSlice ? "text-mainColor" : "text-textColor"}`}
          aria-label="List layout"
          role="button"
        />
      </div>
    </div>
  );
}
