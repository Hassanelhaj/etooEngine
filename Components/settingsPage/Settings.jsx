import React from 'react'
import { settingsList } from '../../Data'
import SmCard from '../utils/SmCard'

const Settings = () => {
  return (
    <div className='flex flex-wrap w-[260px] lg:w-[460px] justify-center items-center gap-4'>
        {settingsList.map((iteam)=>{
            return <SmCard key={iteam.id} data={iteam} />
        })}
    </div>
  )
}

export default Settings