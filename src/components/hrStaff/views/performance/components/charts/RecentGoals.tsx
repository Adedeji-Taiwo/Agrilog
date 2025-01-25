import React from 'react'
import { PerformanceData } from '../../../../../../constants/hrStaff/performance'
import { ChartLegend } from './ChartLegend'
import { Doughnut } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { doughnutLegends, doughnutData, doughnutOptions } from './ChartData'

//element registration
Chart.register(...registerables);




const RecentGoals = () => {

  
  return (
    <div className="md:col-span-1 col-span-2 flex flex-col items-start justify-start xl:gap-9 lg:gap-7 gap-5 min-w-0 w-full xl:py-7 xl:px-8 lg:py-[22px] lg:px-6 py-[14px] px-4 bg-white border border-gray-300 rounded-xl shadow-xs ring-1 ring-gray-100 ring-opacity-5">
        <p className="font-roboto font-bold xl:text-xl lg:text-lg md:text-base text-sm mr-auto">Recent Goals</p>
        <div className='flex items-start justify-between w-full'>
            <div className='flex flex-col items-start justify-start xl:gap-7 lg:gap-5 gap-3'>
                {PerformanceData.map(({id, title, icon, completion}, index) => (
                  <div key={id} className='flex items-center xl:gap-[15px] lg:gap-[11px] gap-[7.5px]'>
                    <div className='flex items-center justify-center xl:p-[8px] lg:p-[7px] p-[4px] rounded-full' style={{background: `${index % 2 === 0 ? "#5c7d3f" : "#3a3a5a" }`}}>
                      <img src={icon} alt={icon} className='w-full h-auto xl:max-w-[34px] lg:max-w-[25px] max-w-[17px] '/>
                    </div>
                  <p className='flex flex-col justify-center xl:gap-2 lg:gap-[5px] gap-[3px]'>
                    <span className='font-roboto font-medium xl:text-[15px] lg:text-[13px] text-[11px] leading-4 text-[#a5aab5]'>{title}</span>
                    <span className='font-roboto font-semibold  xl:text-[15px] lg:text-[13px] text-[11px] leading-4 text-[#121212]'>{completion}%</span>
                  </p>
                </div>
                ))}
            </div>
            <div className='relative flex justify-center items-start w-full lg:max-w-[130px] max-w-[150px] h-auto'>
            <Doughnut 
              data={doughnutData}
              options={doughnutOptions}
            />
            <span className='absolute top-1/2 left-1/2 z-10  transform -translate-x-1/2 -translate-y-1/2 font-poppins font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg text-primary'>{doughnutData.datasets[0].data[0]}%</span>
            </div>
        </div>
    </div>
  )
}

export default RecentGoals