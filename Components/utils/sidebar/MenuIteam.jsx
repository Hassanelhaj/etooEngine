import Link from "next/link";
import React from "react";

const MenuIteam = ({ data }) => {
  return (
    <Link
      href={`${data.link}`} 
      className="flex  items-center justify-start gap-2  lg:px-4 py-2 w-[24px] lg:w-[220px]
    rounded-lg lg:hover:bg-white lg:hover:text-[#19ae20]"
    >
      <span className="hover:text-white lg:hover:bg-transparent">
        {data.icon}
      </span>
      <span className="hidden lg:block">{data.title}</span>
    </Link>
  );
};

export default MenuIteam;
