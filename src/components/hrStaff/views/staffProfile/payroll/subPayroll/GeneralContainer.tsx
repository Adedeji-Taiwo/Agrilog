import React, { useState } from 'react'
import PayrollContainer from '../components/PayrollContainer';



type General = {
  employeeId: string,
  calculateSalary: string[],
  currency: string,
  BasicSalary: string,
  yearGross: string,
  }
  

type GeneralContainerProps = {
    general: General;
  }
  

  const GeneralContainer = ({  general }: GeneralContainerProps) => {
  
    return (
      <PayrollContainer
        title="General" 
      >
         <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Employment ID</span>
            <span>{general.employeeId}</span>
        </p>
        <p className='md:block hidden'></p>
        <p className='md:block hidden'></p>
        
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Currency</span>
            <span>{general.currency}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span    className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Basic Salary</span>
            <span>{general.BasicSalary}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>year Gross</span>
            <span>{general.yearGross}</span>
        </p>

      </PayrollContainer>
    );
  };

export default GeneralContainer