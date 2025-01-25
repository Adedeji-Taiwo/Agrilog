import React from 'react'
import {Payslips, TimeSheets} from './index'


const LargeSection = () => {
  return (
    <div className='col-span-2 flex flex-col items-start justify-start xl:gap-28 lg:gap-20 md:gap-10 gap-7 w-full'>
        <Payslips />
        <TimeSheets />
    </div>
  )
}

export default LargeSection