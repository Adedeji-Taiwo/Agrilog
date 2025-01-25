import React, { useState } from 'react'
import GeneralContainer from '../components/GeneralContainer';



type PersonalInfo = {
    fullName: string;
    dateOfBirth: string;
    email: string;
    gender: string;
    number: string;
    martialStatus: string;
  }
  

type PersonalInfoContainerProps = {
    personalInfo: PersonalInfo;
  }
  

  const PersonalInfoContainer = ({ personalInfo }: PersonalInfoContainerProps) => {
  
    return (
      <GeneralContainer
        title="Personal Info"
      >
         <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Full Name</span>
            <span>{personalInfo.fullName}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Date of Birth</span>
            <span>{personalInfo.dateOfBirth}</span>
        </p>
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Email Address</span>
            <span>{personalInfo.email}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Gender</span>
            <span>{personalInfo.gender}</span>
        </p>
      
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Phone No.</span>
            <span>{personalInfo.number}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Marital Status</span>
            <span>{personalInfo.martialStatus}</span>
        </p>
      </GeneralContainer>
    );
  };

export default PersonalInfoContainer