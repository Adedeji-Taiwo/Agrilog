import React, { useState, useContext } from 'react'
import { DashboardContext, DashboardContextType } from '../../../../context/dashboard.context';
import  {OverviewCard, Tabs, General, Job, Payroll, Documents, AccountSettings} from './index'
import { useNavigate, useParams } from 'react-router-dom';
import { staffData } from '../../../../constants/hrStaff/employees';


const StaffProfile = () => {
    const { activeTabIndex, setActiveTabIndex } = useContext(DashboardContext) as DashboardContextType;
    const navigate = useNavigate();
    const id = "23";


  return (
    <div className='font-mulish flex flex-col items-start justify-start xl:gap-[34px] lg:gap-[25px] gap-4 lg:w-[95%]'>
    <div className='flex flex-col items-start justify-start xl:gap-4 lg:gap-3 gap-2'>
        <p onClick={() => navigate('/dashboard/employees')} className='hidden cursor-pointer flex items-center justify-start xl:gap-[14px] lg:gap-[11px] gap-[7px] xl:-mt-4 lg:-mt-3 -mt-2'>
            <svg className='xl:w-[19px] xl:h-[15px] lg:w-[14px] lg:h-[10px] w-[10px] h-2' viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9167 6.95564H4.38891L9.6608 1.68375L8.25244 0.275391L0.576172 7.95165L8.25244 15.6279L9.6608 14.2196L4.38891 8.94767H18.9167V6.95564Z" fill="#333333" />
            </svg>
            <span className='font-medium italic xl:text-sm lg:text-xs text-[9px] text-blackish'>Back</span>
        </p>
        <div className='flex flex-col items-start justify-start'>
            <h2 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base text-blackish">Staff Profile</h2>
            <p className='font-normal xl:text-xl lg:text-lg md:text-base text-sm text-blackish '>Check and customize your recruitments and candidates</p>
        </div>
    </div>
    <div className='grid lg:grid-cols-4 grid-cols-1 xl:gap-x-[17px] xl:gap-y-[10px] lg:gap-x-[14px] lg:gap-y-2 gap-y-5 w-full'>
        {staffData.filter((staff) => staff.id === id).map((staff) => (
            <Tabs 
            key={staff.id}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
        />
        ))}
        {staffData.filter((staff) => staff.id === id).map((staff) => (
            <OverviewCard 
                key={staff.id}
                overview={staff.overview}
            />
        ))}
        {activeTabIndex === "general" && staffData.filter((staff) => staff.id === id).map((staff) => (
            <General 
                key={staff.id}
                general={staff.general}
            />     
        ))}
        {activeTabIndex === "job" && staffData.filter((staff) => staff.id === id).map((staff) => (
            <Job 
                key={staff.id}
                job={staff.job}
                overview={staff.overview}
            />
        ))}
        {activeTabIndex === "payroll" && staffData.filter((staff) => staff.id === id).map((staff) => (
            <Payroll
                key={staff.id}
                payroll={staff.payroll}
            />     
        ))}

        {activeTabIndex === "documents" && staffData.filter((staff) => staff.id === id).map((staff) => (
                    <Documents
                        key={staff.id}
                    />     
        ))} 
         {activeTabIndex === "account settings" && staffData.filter((staff) => staff.id === id).map((staff) => (
                    <AccountSettings
                        key={staff.id}
                        accountSettings={staff.accountSettings}
                    />     
         ))}
    </div>
    </div>
  )
}

export default StaffProfile