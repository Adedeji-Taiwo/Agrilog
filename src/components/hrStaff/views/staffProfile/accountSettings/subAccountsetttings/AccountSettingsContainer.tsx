import React, { useState } from 'react'
import AccountSettingsContainer from '../components/AccountSettingsContainer';


type AccountSettings = {
   timezone: string;
  }
  

type AccountSettingsContainerProps = {
    accountSettings: AccountSettings;
  }
  

  const AccountSettingContainer = ({  accountSettings }: AccountSettingsContainerProps) => {
  

  
    return (
      <AccountSettingsContainer
        title="Account Settings"
      >
          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Timezone</span>
            <span>{accountSettings.timezone}</span>
        </p>
      </AccountSettingsContainer>
    );
  };

export default AccountSettingContainer