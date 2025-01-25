import React, { useState } from 'react'
import GeneralContainer from '../components/GeneralContainer';



type SalaryInformation = {
    bankName: string;
    accountNumber: string;
    employmentType: string;
    accountName: string;
    monthlySalary: string;
  }
  

type SalaryInformationContainerProps = {
    salaryInformation: SalaryInformation;
  }
  

  const SalaryInformationContainer = ({ salaryInformation }: SalaryInformationContainerProps) => {

  
    return (
      <GeneralContainer
        title="Salary Information"
      >
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Bank Name</span>
            <span>{salaryInformation.bankName}</span>
        </p>
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Account Number</span>
            <span>{salaryInformation.accountNumber}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Employment Type</span>
            <span>{salaryInformation.employmentType}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Account Name</span>
            <span>{salaryInformation.accountName}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Monthly Salary</span>
            <span>{salaryInformation.monthlySalary}</span>
        </p>
      </GeneralContainer>
    );
  };

export default SalaryInformationContainer
