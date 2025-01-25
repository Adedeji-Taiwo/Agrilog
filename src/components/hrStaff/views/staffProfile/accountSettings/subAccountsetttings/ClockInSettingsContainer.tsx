import React, { useState } from 'react'
import AccountSettingsContainer from '../components/AccountSettingsContainer';



type ClockInSettings = {
   location: string;
  }
  

type ClockInSettingsContainerProps = {
    clockInSettings: ClockInSettings;
  }
  

  const ClockInSettingsContainer = ({  clockInSettings }: ClockInSettingsContainerProps) => {

  
    return (
      <AccountSettingsContainer
        title="Clock In Settings"
      >
          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Clock In Settings</span>
            <span>{clockInSettings.location}</span>
        </p>
      </AccountSettingsContainer>
    );
  };

export default ClockInSettingsContainer