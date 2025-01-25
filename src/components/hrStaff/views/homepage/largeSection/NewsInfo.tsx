import React from 'react'
import { companyNewsInfo } from '../../../../../constants/hrStaff/homepage'


const NewsInfo = () => {
  return (
    <div className='flex flex-col justify-start items-start lg:gap-5 gap-4 bg-white w-full rounded-[10px] md:border-[0.2px] border-[0.8px] border-primary-light xl:px-4 xl:mt-[7px] lg:mt-[5px] lg:pt-[10px] xl:pb-[26px] lg:pb-[19px] lg:px-3 px-3 py-[10px]'>
   <div className='flex items-start justify-between w-full'>
        <p className='font-gothic xl:font-black lg:font-extrabold font-bold text-left xl:text-base md:text-sm text-xs text-dashboard-navy'>Farm News & Information</p>
        <span className="self-end font-mulish xl:font-black lg:font-extrabold font-bold xl:text-xs lg:text-[10px] text-[9px] text-dashboard-navy">view all</span>
   </div>
    <div className='flex flex-col items-start justify-start xl:gap-7 lg:gap-5 gap-3 w-full xl:px-4 lg:px-3'>
       {companyNewsInfo.map(({title, date, name, id}) => (
         <div key={id} className='flex flex-col place-items-start gap-1 w-full xl:pt-[11px] xl:px-2 lg:pt-2 lg:px-[6px] pt-[6px] px-1 xl:pb-[9px] lg:pb-[7px] pb-[5px] border-[0.2px] border-[#d3d0ce] shadow-sm rounded-[10px]'>
         <h3 className='font-gothic xl:font-black lg:font-extrabold font-bold text-left xl:text-base md:text-sm text-xs text-dashboard-navy xl:ml-4 lg:ml-3 ml-2'>{title}</h3>
         <p className='flex items-center justify-start xl:gap-8 lg:gap-[6px] gap-2 lg:ml-0 ml-2'>
             <svg className='xl:w-4 xl:h-4 lg:w-[11px] lg:h-[11px] w-2 h-2' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.9987 8.33324C4.22515 8.33324 3.48328 8.02594 2.9363 7.47896C2.38932 6.93198 2.08203 6.19012 2.08203 5.41657C2.08203 4.64302 2.38932 3.90116 2.9363 3.35417C3.48328 2.80719 4.22515 2.4999 4.9987 2.4999C5.77225 2.4999 6.51411 2.80719 7.06109 3.35417C7.60807 3.90116 7.91536 4.64302 7.91536 5.41657C7.91536 6.19012 7.60807 6.93198 7.06109 7.47896C6.51411 8.02594 5.77225 8.33324 4.9987 8.33324ZM4.9987 1.66657C4.00414 1.66657 3.05031 2.06166 2.34705 2.76492C1.64379 3.46818 1.2487 4.42201 1.2487 5.41657C1.2487 6.41113 1.64379 7.36496 2.34705 8.06822C3.05031 8.77148 4.00414 9.16657 4.9987 9.16657C5.99326 9.16657 6.94709 8.77148 7.65035 8.06822C8.35361 7.36496 8.7487 6.41113 8.7487 5.41657C8.7487 4.42201 8.35361 3.46818 7.65035 2.76492C6.94709 2.06166 5.99326 1.66657 4.9987 1.66657ZM5.20703 3.33324H4.58203V5.83324L6.5612 7.02074L6.8737 6.50824L5.20703 5.52074V3.33324ZM3.28203 1.4124L2.7487 0.774902L0.832031 2.37907L1.36953 3.01657L3.28203 1.4124ZM9.16536 2.38324L7.2487 0.774902L6.7112 1.4124L8.62786 3.02074L9.16536 2.38324Z" fill="#777777"/>
             </svg>
             <span className='font-mulish font-light  xl:text-base md:text-sm text-xs text-[#333] xl:mr-[9px] lg:mr-[7px] mr-[5px]'>{date}</span>
             <span className='font-mulish font-light xl:text-base md:text-sm text-xs text-[#333]'>{name}</span>
         </p>
     </div>
       ))}
    </div>
    </div>
  )
}

export default NewsInfo