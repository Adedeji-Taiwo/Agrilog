import React, { useState } from 'react'
import GeneralContainer from '../components/GeneralContainer';



type NextOfKin = {
    fullName: string;
    phoneNumber: string;
    fullAddress: string;
    relationship: string;
  }
  

type NextOfKinContainerProps = {
    nextOfKin: NextOfKin;
  }
  

  const nextOfKinContainer = ({ nextOfKin }: NextOfKinContainerProps) => {
  

    return (
      <GeneralContainer
        title="Next of Kin"
       >
         <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Full Name</span>
            <span>{nextOfKin.fullName}</span>
        </p>
         
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Phone No.</span>
            <span>{nextOfKin.phoneNumber}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Full Address</span>
            <span>{nextOfKin.fullAddress}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Relationship</span>
            <span>{nextOfKin.relationship}</span>
        </p>
      </GeneralContainer>
    );
  };

export default nextOfKinContainer