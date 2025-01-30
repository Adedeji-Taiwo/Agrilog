import React, { Children, FC, useContext } from 'react'
import { Profile } from '../../../../../assets/dashboard/homepage'
import { DashboardContext, DashboardContextType } from '../../../../../context/dashboard.context'

type ContainerPropsTypes = {
  title: string
  status?: string
  children: React.ReactNode
}


const containerOneData = {
    title: "Your Co-Workers Today",
    status: "Status",
    user: [
      {
        img: Profile, 
        name: "Youssef Amari...",
        reason: "On Farm"
      },
      {
        img: Profile, 
        name: "Farouk Muham...",
        reason: "On Farm"
      },
    ]
    }





const PendingApproval = () => {
    const {clockInTime, clockOutTime} = useContext(DashboardContext) as DashboardContextType;

  return (
   <div className='flex flex-col justify-center items-start xl:gap-[13px] lg:gap-[10px] gap-[6px] bg-white w-full rounded-[10px] md:border-[0.2px] border-[0.8px] border-primary-light xl:px-4 lg:pt-[10px] xl:pb-[26px] lg:pb-[19px] lg:px-3 px-3 py-[10px]'>
        <p className='font-gothic xl:font-black lg:font-extrabold text-left font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>Team and Time</p>
        <div className='grid lg:grid-cols-2 lg:place-items-stretch place-items-center xl:gap-[9px] gap-[7px] w-full'>
        <div className='flex flex-col items-start justify-start col-span-1 xl:gap-5 lg:gap-[15px] gap-[10px] w-full rounded-[10px] border-[0.2px] border-[#d3d0ce] xl:px-[11px] xl:py-[11px] lg:px-2 lg:py-2 px-[5.5px] py-[5.5px]'>
              <p className='font-gothic flex items-center justify-between w-full'>
                <span className='xl:font-black lg:font-extrabold md:font-bold font-semibold xl:text-sm leading-4 text-xs text-dashboard-navy'>{containerOneData.title}</span>
                <span className="lg:font-normal font-light xl:text-sm lg:leading-4 text-xs text-[#000] xl:pr-3 lg:pr-2">{`${containerOneData.status}`}</span>  
              </p>
              <div className='flex flex-col items-center justify-start xl:gap-8 lg:gap-6 gap-4 w-full xl:pb-2 lg:pb-[6px] pb-1'>
              {
                containerOneData.user.map(({img, name, reason}, index) => (
                  <div className='flex items-center justify-between w-full' key={name}>
                        <p className='inline-flex items-start justify-start xl:gap-[15px] lg:gap-3 gap-[8px]'>
                          <img src={img} alt="profile" className='w-full h-auto max-w-[20px]'/>
                          <span className='font-mulish text-[#333] lg:text-sm leading-4 text-xs'>{name}</span>
                        </p>
                        <p className='inline-flex items-start justify-start xl:gap-[30px] lg:gap-[23px] gap-[15px]'>
                        <span className='font-mulish font-light text-[#11c845]  lg:text-sm leading-4 text-xs'>Active</span>
                          <span className='font-mulish font-light text-[#333] lg:text-sm text-xs'>{reason}</span>
                        </p>
                    </div>
                ))
              } 
              </div>
          </div>


          <div className='flex flex-col items-start justify-start col-span-1 xl:gap-5 lg:gap-[15px] gap-[10px] w-full rounded-[10px] border-[0.2px] border-[#d3d0ce] xl:px-[11px] xl:py-[11px] lg:px-2 lg:py-2 px-[5.5px] py-[5.5px]'>
              <p className='font-gothic flex items-center justify-between w-full'>
                <span className='xl:font-black lg:font-extrabold md:font-bold font-semibold xl:text-sm leading-4 text-xs text-dashboard-navy'>Your Time Attendance Today</span>
                <span className="lg:font-normal font-light xl:text-sm lg:leading-4 text-xs text-[#3cbd60] xl:pr-3 lg:pr-2 hidden"></span>  
              </p>
              <div className='flex flex-col items-start justify-start xl:gap-8 lg:gap-6 gap-4 w-full xl:pb-2 lg:pb-[6px] pb-1 relative overflow-auto md:whitespace-normal whitespace-nowrap scrollbar-hide'>
                  <div className='flex items-start justify-start w-full xl:gap-14 lg:gap-11 gap-7'>
                        <p className='inline-flex items-start'>
                          <span className='font-mulish text-[#333] lg:text-sm leading-4 text-xs'>Clock-In Time: <span className='block font-bold text-primary'>{clockInTime}</span></span>
                        </p>
                        <p className='inline-flex items-start'>
                          <span className='font-mulish text-[#333] lg:text-sm leading-4 text-xs'>Clock-Out Time: <span className='block font-bold text-[#f3723f]'>{clockOutTime}</span></span>
                        </p>
                    </div>
              </div>
          </div>
           
        </div>
   </div>
  )
}

export default PendingApproval