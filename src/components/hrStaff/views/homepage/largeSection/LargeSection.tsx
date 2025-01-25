import React from 'react'
import {PendingApproval, Goals, NewsInfo} from './index';

const LargeSection = () => {
  return (
    <div className='flex flex-col items-start xl:gap-[34px] lg:gap-[26px] gap-3 w-full lg:col-span-2 col-span-1 lg:order-1 order-2 bg-blue-transparent rounded-[10px] xl:pt-[26px] lg:pt-[19px] xl:pb-8 lg:pb-6 pb-4'>
        <PendingApproval />
        <Goals />
        <NewsInfo />
    </div>
  )
}

export default LargeSection