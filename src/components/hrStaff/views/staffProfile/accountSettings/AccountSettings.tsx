import React, {FC} from 'react'
import { Button } from '../../../..'
import { AccountSettingsContainer, ClockInSettingsContainer } from './subAccountsetttings'


type AccountSettingsPropTypes = {
  accountSettings: {
    accountSettings: {
      timezone: string,
    },
    clockInSettings: {
      location: string,
    }
  }
}



const AccountSettings:FC<AccountSettingsPropTypes> = ({accountSettings: {accountSettings, clockInSettings}}) => {
  return (
    <div className='order-3 lg:col-start-2 lg:col-end-5 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3'>
      <AccountSettingsContainer 
        accountSettings={accountSettings}
      />

      <ClockInSettingsContainer 
        clockInSettings={clockInSettings}
      />
    </div>
  )
}

export default AccountSettings