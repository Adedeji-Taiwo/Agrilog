import React from 'react';
import { ClockInOut, Todos, TimeOff, Absence } from './index';

const MiniSection = () => {
  return (
    <div className='flex flex-col items-start xl:gap-4 lg:gap-3 gap-3 w-full lg:col-span-1 lg:order-2 order-1 bg-white rounded-[10px] xl:px-8 xl:py-6 lg:px-6 lg:py-[18px]'>
      <ClockInOut />
      <Todos />
      <TimeOff />
      <Absence />
    </div>

  )
}

export default MiniSection;