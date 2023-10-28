"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import DataTable from '../../../Components/utils/table/DataTable'
import SubTitle from '../../../Components/SubTitle'

const page = () => {
    useLayoutEffect(()=>{
        if(!localStorage.getItem("_auth")){
          redirect('/login');
        }
      })
     
      const [mounted,setMounted] = useState(false);
      useEffect(()=>{
      
        setMounted(true)
     
      })
        if(!mounted)return null;
    
  return (
    <div className='m-4 flex justify-center items-center gap-4 flex-col 
     '>
      {/* <SubTitle title={"العملاء"} action= {"أضافة عميل"} /> */}
        <DataTable/>
        {/* <Table/> */}
    </div>
  )
}

export default page