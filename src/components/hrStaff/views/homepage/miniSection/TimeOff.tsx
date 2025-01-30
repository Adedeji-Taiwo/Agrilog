import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DashboardContext, DashboardContextType } from '../../../../../context/dashboard.context'

const TimeOff = () => {
  const { showLeaveRequestAlert, setShowLeaveRequestAlert } = useContext(DashboardContext) as DashboardContextType;
  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col items-start justify-center xl:gap-[18.6px] lg:gap-[14px] gap-[9px] border-[0.5px] border-[#bbb] rounded-[5px] xl:px-5 xl:pt-3 xl:pb-7 lg:px-[15px] lg:pt-[9px] lg:pb-[21px] px-[10px] pt-[6px] pb-[14px]'>
      <p className='font-gothic flex items-center justify-between w-full'>
        <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>My Time - Off</span>
        <Link
          to="/dashboard/user/leave-time-offs"
          className="font-mulish xl:font-black lg:font-extrabold font-bold xl:text-xs lg:text-[10px] text-[9px] text-dashboard-navy"
        >
          view all
        </Link>
      </p>
      <div className='flex items-center justify-start xl:gap-2 lg:gap-[6px] gap-1 w-full'>
        <p className='font-mulish font-medium md:font-semibold lg:text-xs md:text-sm text-xs leading-4 text-left'>You have 2 days Sick Leave left. <span onClick={() => { navigate('/') }} className="text-primary cursor-pointer">Request</span></p>
      </div>
    </div>
  )
}

export default TimeOff