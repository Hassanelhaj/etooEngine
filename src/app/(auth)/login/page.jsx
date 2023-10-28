"use client"
import { useEffect } from 'react';
import { useState } from 'react';
import Login from '../../../../Components/loginPage/Login';

const page = () => {
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{setMounted(true)})
    if(!mounted)return null;
  return (
    <div className='flex justify-center items-center h-screen bg-white'><Login/></div>
  )
}

export default page