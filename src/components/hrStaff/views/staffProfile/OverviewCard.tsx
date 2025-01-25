import React, { FC, useState } from 'react'

type CardPropTypes = {
    overview: {
        fullName: string,
        role: string,
        department: string
        workType: string,
        photo: string,
    }
}


const OverviewCard:FC<CardPropTypes> = ({overview:{fullName, role, department, workType, photo}}) => {
    const [selectedStatus, setSelectedStatus] = useState<string>("onboarded");


  return (
    <div className='font-mulish bg-white rounded-[5px] border-[0.3px] border-gray-300 lg:order-2 order-1 lg:col-start-1 lg:col-end-2 flex flex-col items-start justify-start xl:px-[21px] xl:py-8 xl:gap-4 lg:px-4 lg:py-6 lg:gap-3 px-6 py-5 gap-2 w-full'>
                   
    <div className='flex lg:flex-nowrap flex-wrap lg:flex-col lg:items-start lg:justify-start items-center xl:gap-4 lg:gap-3 gap-2 w-full'>
        <img src={photo} alt={fullName} className="w-full h-auto lg:max-w-[92px] max-w-[60px]"/>
        <span className={`font-poppins w-full xl:max-w-[165px] lg:max-w-[110px] max-w-[90px] lg:ml-0 ml-2 rounded-md border-[0.5px] border-opacity-60 outline-none p-1 text-current font-normal xl:text-xs lg:text-[10px] text-[9px] leading-4 shadow-customMobile focus:outline-none  focus:border-transparent focus:ring-0 focus:ring-transparent capitalize`} style={{ color: selectedStatus === "onboarded" ? "#0cbc8b" : selectedStatus === "probationary" ? "#e9bb37" : selectedStatus === "leave" ? "#f17070" : "#b40a0a", borderColor: selectedStatus === "onboarded" ? "#0cbc8b" : selectedStatus === "probationary" ? "#e9bb37" : selectedStatus === "leave" ? "#f17070" : "#b40a0a" }}>{selectedStatus}</span>
        <p className='font-mulish w-full flex flex-col items-start justify-start xl:gap-2 lg:gap-[6px] gap-1'>
            <span className='font-semibold xl:text-base lg:text-sm text-xs  text-blackish'>{fullName}</span>
            <span className='font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish'>{role}</span>
        </p>
    </div>

    <div className='flex flex-col items-start justify-start xl:gap-5 lg:gap-[15px] gap-[10px] xl:mt-[5px] lg:mt-1 mt-[3px]'>
        <p className='font-mulish font-normal xl:text-xs  lg:text-[10px] text-[9px] leading-4 text-[#6b868]'>Onboarding Information</p>
        <p className='flex items-center xl:gap-4 lg:gap-3 gap-2'>
            <svg className='xl:w-5 xl:h-[22px] lg:w-[15px] lg:h-4 h-[10px] w-[11px]' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.66667 13.1667C5.35972 13.1667 5.10225 13.0627 4.89425 12.8547C4.68625 12.6467 4.58261 12.3896 4.58334 12.0834C4.58334 11.7765 4.68734 11.519 4.89534 11.311C5.10334 11.103 5.36045 10.9994 5.66667 11.0001C5.97361 11.0001 6.23109 11.1041 6.43909 11.3121C6.64709 11.5201 6.75072 11.7772 6.75 12.0834C6.75 12.3904 6.646 12.6478 6.438 12.8558C6.23 13.0638 5.97289 13.1675 5.66667 13.1667ZM10 13.1667C9.69306 13.1667 9.43559 13.0627 9.22759 12.8547C9.01959 12.6467 8.91595 12.3896 8.91667 12.0834C8.91667 11.7765 9.02067 11.519 9.22867 11.311C9.43667 11.103 9.69378 10.9994 10 11.0001C10.3069 11.0001 10.5644 11.1041 10.7724 11.3121C10.9804 11.5201 11.0841 11.7772 11.0833 12.0834C11.0833 12.3904 10.9793 12.6478 10.7713 12.8558C10.5633 13.0638 10.3062 13.1675 10 13.1667ZM14.3333 13.1667C14.0264 13.1667 13.7689 13.0627 13.5609 12.8547C13.3529 12.6467 13.2493 12.3896 13.25 12.0834C13.25 11.7765 13.354 11.519 13.562 11.311C13.77 11.103 14.0271 10.9994 14.3333 11.0001C14.6403 11.0001 14.8978 11.1041 15.1058 11.3121C15.3138 11.5201 15.4174 11.7772 15.4167 12.0834C15.4167 12.3904 15.3127 12.6478 15.1047 12.8558C14.8967 13.0638 14.6396 13.1675 14.3333 13.1667ZM2.41667 21.8334C1.82084 21.8334 1.31059 21.6211 0.885918 21.1964C0.461252 20.7717 0.24928 20.2619 0.250002 19.6667V4.50008C0.250002 3.90425 0.462335 3.394 0.887002 2.96933C1.31167 2.54466 1.82156 2.33269 2.41667 2.33341H3.5V0.166748H5.66667V2.33341H14.3333V0.166748H16.5V2.33341H17.5833C18.1792 2.33341 18.6894 2.54575 19.1141 2.97041C19.5388 3.39508 19.7507 3.90497 19.75 4.50008V19.6667C19.75 20.2626 19.5377 20.7728 19.113 21.1975C18.6883 21.6222 18.1784 21.8341 17.5833 21.8334H2.41667ZM2.41667 19.6667H17.5833V8.83341H2.41667V19.6667ZM2.41667 6.66675H17.5833V4.50008H2.41667V6.66675Z" fill="#333333" />
            </svg>
            <span className='font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish'>03/09/2023 (Onboarded)</span>
        </p>
    </div>

    <div className='font-mulish flex lg:flex-col flex-row items-start lg:justify-start justify-between xl:gap-[15px] lg:gap-[11px] gap-5 xl:mt-12 lg:mt-9 mt-6'>
        <p className='flex flex-col items-start justify-start xl:gap-[11px] lg:gap-2 gap-[5px]'>
            <span className='font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish'>DEPARTMENT</span>
            <span className=' font-normal xl:text-xs  lg:text-[10px] text-[9px] leading-4 text-[#6b868]'>{department}</span>
        </p>
        <p className='flex flex-col items-start justify-start xl:gap-[11px] lg:gap-2 gap-[5px]'>
            <span className='font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish'>Work Type</span>
            <span className=' font-normal xl:text-xs  lg:text-[10px] text-[9px] leading-4 text-[#6b868]'>{workType}</span>
        </p>
    </div>

</div>
  )
}

export default OverviewCard