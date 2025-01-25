import React from 'react'
import { timeSheetData } from '../../../../../constants/hrStaff/payslip'
import timesheet from '../../../../../assets/dashboard/payroll/Amzil_Mehdi_Timesheet_March.pdf'

const tableHeader = ["Timesheet", "Month", "Action"]


const TimeSheets = () => {
  return (
    <div className='flex flex-col justify-start items-start xl:gap-[22px] lg:gap-4 gap-3 w-full'>
        <div className='font-mulish text-blackish flex flex-col items-start justify-center xl:gap-3 lg:gap-2 gap-1'>
           <h1 className='font-bold xl:text-xl lg:text-lg md:text-base text-sm text-dashboard-navy'>Time Sheets</h1>
           <p className='font-normal xl:text-base lg:text-sm text-xs'>View & Download your Timesheet for March</p>
       </div>
       <div className='relative overflow-auto whitespace-nowrap scrollbar-hide flex place-items-start bg-white w-full rounded-[10px] md:border-[0.2px] border-[0.8px] border-primary-light xl:px-4 xl:py-6 lg:px-3 lg:py-4 lpx-3 py-3'>
        <table className="font-mulish min-w-full bg-white text-left text-blackish">
          <thead className="xl:text-base xl:leading-8 lg:text-sm text-xs font-normal text-blackish xl:px-2 pt-1 px-1 capitalize border-b-[0.5px] border-gray-300">
            <tr>
              {tableHeader.map((item) => (
                <th scope="col" className="xl:pl-6 xl:pr-24 lg:pl-4 lg:pr-14 pl-3 md:pr-20 pr-14 py-4" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {timeSheetData.map(({ timeSheet, month }) => (
              <tr className="bg-white" key={month}>

                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                  {timeSheet}
                </td>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                  {month}
                </td>

                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                <a
                  href={timesheet} download>
                   <svg className='xl:w-[26px] xl:h-[25px] lg:w-5 lg:h-[19px] w-[13px] h-3' viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.94069 20.8334C5.32081 20.8334 3.93697 20.2865 2.78917 19.1927C1.64066 18.099 1.06641 16.7622 1.06641 15.1823C1.06641 13.8282 1.48473 12.6216 2.32137 11.5625C3.15801 10.5035 4.25276 9.82643 5.60562 9.53129C5.90824 8.28129 6.66478 7.09205 7.87523 5.96358C9.08569 4.83511 10.3763 4.27087 11.7469 4.27087C12.3343 4.27087 12.8374 4.47469 13.2561 4.88233C13.674 5.29067 13.883 5.78129 13.883 6.35421V12.6563L15.5919 11.0417L17.0872 12.5L12.815 16.6667L8.54277 12.5L10.038 11.0417L11.7469 12.6563V6.35421C10.3941 6.59726 9.3438 7.23511 8.59617 8.26775C7.84853 9.30108 7.47471 10.3646 7.47471 11.4584H6.94069C5.90824 11.4584 5.0271 11.8143 4.29726 12.5261C3.56743 13.2379 3.20251 14.0973 3.20251 15.1042C3.20251 16.1112 3.56743 16.9705 4.29726 17.6823C5.0271 18.3941 5.90824 18.75 6.94069 18.75H19.7573C20.5049 18.75 21.1369 18.4983 21.6531 17.9948C22.1693 17.4914 22.4274 16.875 22.4274 16.1459C22.4274 15.4167 22.1693 14.8004 21.6531 14.2969C21.1369 13.7934 20.5049 13.5417 19.7573 13.5417H18.1552V11.4584C18.1552 10.625 17.9594 9.84796 17.5678 9.12712C17.1762 8.40699 16.66 7.79518 16.0191 7.29171V4.86983C17.3364 5.47747 18.3777 6.37608 19.1432 7.56567C19.9086 8.75455 20.2913 10.0521 20.2913 11.4584C21.5196 11.5973 22.5389 12.1136 23.3492 13.0073C24.1587 13.9018 24.5635 14.948 24.5635 16.1459C24.5635 17.448 24.0964 18.5549 23.1623 19.4667C22.2274 20.3778 21.0924 20.8334 19.7573 20.8334H6.94069Z" fill="#777777"/>
                    </svg>
                </a> 
              
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TimeSheets