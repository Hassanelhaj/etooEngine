import React from "react";
import { menuList } from "../../../Data";
import MenuIteam from "./MenuIteam";
import Header from "./Header";
import Image from "next/image";
import logo from "../../../public/imgs/etoologo.jpg"

const Menu = () => {
  // 7db00e
  return (
    <main
      className="bg-[#19ae20] text-white w-[56px] lg:w-[240px]  
       h-screen overflow-hidden py-4 lg:px-8 
    flex flex-col justify-between items-center gap-4"
    >
      <div className="">
        <Header />
      </div>
      <div className="flex flex-col justify-start flex-grow items-center gap-2">
        {menuList.map((iteam) => {
          return <MenuIteam data={iteam} key={iteam.id} />;
        })}
      </div>
      
    </main>
  );
};

export default Menu;
