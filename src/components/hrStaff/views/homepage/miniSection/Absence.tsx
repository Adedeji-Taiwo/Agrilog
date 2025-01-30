import React from 'react'
import { Profile } from '../../../../../assets/dashboard/homepage'

type AbsenceDataType = {
  img: string
  name: string
  dates: string
}


const absenceData: AbsenceDataType[] = [
  {
    img: Profile,
    name: "Majid Badroui",
    dates: "05 - 07 February 2025",
  },
  {
    img: Profile,
    name: "Hassan Lamaari",
    dates: "09 - 14 February 2025  ",
  }
]


const Absence = () => {
  return (
    <div className='w-full flex flex-col items-start justify-center xl:gap-7 lg:gap-[21px] gap-[14px] border-[0.5px] border-[#bbb] rounded-[5px] xl:px-5 xl:pt-5 xl:pb-[26px] xl:mt-6 lg:px-[15px] lg:pt-[15px] lg:pb-5 lg:mt-[18px] px-[10px] pt-[10px] pb-[13px]'>
      <p className='font-gothic flex items-center justify-start w-full'>
        <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>Who is on the Farm?</span>
      </p>
      <div className='flex flex-col items-start justify-start xl:gap-9 lg:gap-[27px] gap-[18px] xl:px-[14px] lg:px-[11px] px-[7px] w-full'>
        {absenceData.map(({ name, img, dates }, index) => (
          <div className='flex items-start justify-start xl:gap-[42px] lg:gap-8 gap-[21px] w-full' key={name}>
            <img src={img} alt={name} className="w-full h-auto xl:max-w-[34px] md:max-w-[26px] max-w-[20px] object-contain" />
            <p className='font-mulish flex flex-col items-start justify-start xl:gap-[5px] lg:gap-[4px]'>
              <span className='xl:font-bold md:font-semibold font-medium xl:text-base md:text-sm text-xs text-[#333]'>{name}</span>
              <span className='xl:font-bold md:font-semibold font-medium xl:text-base md:text-sm text-xs text-[#333]'>{dates}</span>
            </p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Absence