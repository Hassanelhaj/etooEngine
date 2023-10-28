import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <Link href={`/jobs/${data.category}/${data.id}`}
      
      className="w-56 h-40 bg-white rounded-lg 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative group
     p-1  pb-4 
    cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-2"
    >
  
      <section
    
      >
        <div className="flex flex-col justify-center items-center gap-2 mt-3">
          <h2 className="text-lg font-semibold  text-slate-800 capitalize">
            {data.title}
          </h2>
          <h2 className=" t text-gray-400 font-medium text-sm capitalize">
            {data.workingPlace}
          </h2>
          <h2 className=" t text-gray-400 font-medium text-sm capitalize">
            {data.location}
          </h2>

          <h2 className=" t text-gray-400 font-medium text-sm capitalize">
            {data.salary}
          </h2>
        </div>
      </section>
    </Link>
  );
};

export default Card;
