import Link from 'next/link'
import React from 'react'

const SubTitle = ({title,action}) => {
  return (
    <div className=' container mx-auto overflow-hidden  mt-4 flex justify-between items-center px-4 lg:px-6'>
      <h3 className=' text-2xl 
      font-bold capitalize  text-[#19ae20] '>
          {title}
      </h3>
      <Link href='/search' className='px-3 py-1 border bg-white
       border-[#19ae20] text-[#19ae20]
      hover:bg-[#19ae20] hover:text-white rounded-lg'>
         
         {action}
      </Link>
    </div>
  )
}

export default SubTitle