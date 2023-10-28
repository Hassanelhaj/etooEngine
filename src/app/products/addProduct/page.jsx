"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AddProduct from '../../../../Components/productsPage/addProduct/AddProduct';

const page = () => {
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
    <div className='flex justify-center items-center p-4'><AddProduct/></div>
  )
}

export default page