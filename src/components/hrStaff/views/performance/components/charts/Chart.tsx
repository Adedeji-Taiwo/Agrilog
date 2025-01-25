import React from 'react'
import {PerformanceStats, RecentGoals} from './index'


const Chart = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 place-items-start xl:gap-5 lg:gap-[15px] gap-3 w-full'>
      <PerformanceStats />
      <RecentGoals />
    </div>
  )
}

export default Chart