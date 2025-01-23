import React from "react";

export default function SearchQuery() {
  return (
      <div
        className="sm:w-1/2 mx-auto flex items-center border border-secondColor rounded-md"
        role="search"
        aria-label="Search bar"
      >
        <input
          type="text"
          className="flex-grow outline-none px-3 py-2 rounded-l-md"
          placeholder="Search query..."
          aria-label="Enter search query"
        />
        <button
          className="bg-mainColor text-white px-10 py-6 rounded-r-md hover:bg-[#1C7ED6]"
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
  );
}
