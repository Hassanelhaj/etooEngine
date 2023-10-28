import React from 'react'

const SmCard = ({data}) => {
  return (
    <div className=' bg-white cursor-pointer hover:bg-green-100
    flex flex-col w-[120px] h-[90px] lg:w-[140px] lg:h-[120px] justify-start  lg:justify-center items-center gap-2 p-4 rounded-lg shadow'>
        <span className='text-xl text-slate-700 w-6 h-6'>{data.icon}</span>
        <span className='font-bold text-slate-700'>{data.title}</span>

    </div>
  )
}

export default SmCard