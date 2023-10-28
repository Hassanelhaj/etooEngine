import Image from 'next/image'
import React from 'react'
import img from '../../../public/imgs/etoologo.jpg'
import{AiOutlineDown} from "react-icons/ai"

const Header = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-1'>
      <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
        <Image className="w-8 h-8 rounded-lg " src={img} />
        <span className="text-sm font-bold text-[#19ae20]">محرك بحث ايتو</span>
      </div>
      </div>
      <div className='flex flex-col  text-[#fff] rounded-lg lg:flex-row justify-end 
    items-center gap-2 py-2 px-3 mt-4'>

    اهلا حسن
    </div>
    </main>
  )
}

export default Header