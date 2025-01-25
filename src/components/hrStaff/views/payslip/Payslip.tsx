import React from 'react';
import { MiniSection } from '../homepage/index';
import LargeSection from './largeSection/LargeSection';

const Payslip = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 xl:gap-8 lg:gap-6 gap-3 w-full xl:pr-14 lg:pr-10'>
      <LargeSection />
      <div className='w-full xl:mt-24 lg:mt-16'><MiniSection /></div>
    </div>
  )
}

export default Payslip;