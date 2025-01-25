import React from 'react'
import GeneralContainer from '../components/GeneralContainer';


type HomeAddress = {
    fullAddress: string;
    city: string;
    state: string;
  }
  

type HomeAddressContainerProps = {
    homeAddress: HomeAddress;
  }
  

  const HomeAddressContainer = ({ homeAddress }: HomeAddressContainerProps) => {
  
    return (
      <GeneralContainer
        title="Home Address"
      >
       <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>Full Address</span>
            <span>{homeAddress.fullAddress}</span>
        </p>
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>City</span>
            <span>{homeAddress.city}</span>
        </p>
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-40 w-32 text-left xl:-mr-3 lg:mr-2 mr-4'>State</span>
            <span>{homeAddress.state}</span>
        </p>
      </GeneralContainer>
    );
  };

export default HomeAddressContainer