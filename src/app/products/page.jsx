"use client"

import { useEffect, useLayoutEffect, useState } from 'react'
import DataTable from '../../../Components/utils/table/DataTable'
import Link from 'next/link'
import Products from '../../../Components/productsPage/Products'

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
<main className='p-4 '>
    <Products/>
</main>
  )
}

export default page