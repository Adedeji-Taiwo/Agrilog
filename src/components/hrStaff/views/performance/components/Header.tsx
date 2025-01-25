import React from 'react'
import { Button } from '../../../components'

const Header = ({setShowGoalSetterAlert}: {setShowGoalSetterAlert: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='flex items-center justify-between w-full'>
        <h1 className='font-Mulish font-semibold xl:text-xl lg:text-lg md:text-base text-sm text-blackish'>Performance Management</h1>
        <div className='inline-flex items-center justify-end xl:gap-[14px] lg:gap-[11px] gap-[7px]'>
            <Button type='button' className='bg-primary' onClick={() => setShowGoalSetterAlert(true)}>   
                <span className='font-poppins font-medium xl:text-[15px] lg:text-xs text-[10px] leading-4 text-center text-white'>Set OKR</span>
            </Button>
        </div>
    </div>
  )
}

export default Header