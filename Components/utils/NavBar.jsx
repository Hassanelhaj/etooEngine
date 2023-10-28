"use client";

import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";

import {FaSearch} from 'react-icons/fa'
import { GiShoppingBag } from "react-icons/gi";
import { BiLogIn, BiSearch } from "react-icons/bi";
import{BsFillPersonFill}from "react-icons/bs";
import { BsFillBagFill,BsInfoCircleFill} from "react-icons/bs";
import Link from "next/link";

import { FaSearchPlus } from "react-icons/fa";

// IoRestaurantSharp

const NavBar = () => {


  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="px-6 text-amber-600 bg-white">
      navbar
    </main>
  );
};

export default NavBar;
