import React from "react";

export default function ProductsInfo() {
  return (
    <div className="bg-[#FAFAFB] py-4 mt-10">
    <ul className="flex gap-4 text-textColor px-8 py-4 relative" role="tablist">
      <li
        className="cursor-pointer text-mainColor relative after:content-[''] after:absolute after:bottom-[-76%] after:left-0 after:h-[4px] after:w-full after:bg-mainColor"
        role="tab"
        aria-selected="true" 
      >
        Product Information
      </li>
      <li
        className="cursor-pointer hover:text-mainColor relative after:content-[''] after:absolute after:bottom-[-76%] after:left-0 after:h-[4px] after:w-full after:bg-transparent hover:after:bg-mainColor"
        role="tab"
        aria-selected="false" 
      >
        Reviews 0
      </li>
      <li
        className="cursor-pointer hover:text-mainColor relative after:content-[''] after:absolute after:bottom-[-76%] after:left-0 after:h-[4px] after:w-full after:bg-transparent hover:after:bg-mainColor"
        role="tab"
        aria-selected="false"
        
      >
        Another tab
      </li>
    </ul>
    <div className="border-b-4 border-[#F6F7F8] w-full mb-4" role="separator"></div>
    <article className="px-8 text-sm text-textColor leading-6" role="document">
      <p>
        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
        mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Aenean eleifend laoreet congue.
      </p>
      <p>
        Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada
        tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies
        eu, placerat a felis.
      </p>
      <p>
        Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu
        id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel
        tellus non nunc mattis lobortis.
      </p>
      <p className="mt-8">
        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis
        vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae.
      </p>
    </article>
  </div>
  
  );
}
