"use client"

// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useLayoutEffect } from 'react';



const Home = () => {
  useLayoutEffect(()=>{
    if(!localStorage.getItem("_auth")){
      redirect('/login');
    }
  })
 
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{
  
    setMounted(true)
    // console.log(localStorage.getItem('_auth'))
  })
  if(!mounted)return null;


 
  return (
    <div className=' p-4
   ' >
    الصفحة الرئيسية
    </div>
  )
}

export default Home