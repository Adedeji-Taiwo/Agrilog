import React, {useState} from 'react'
import { Chart, registerables,  } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { barLegends, data, options } from './ChartData';
import {ChartLegend} from './ChartLegend';


//element registration
Chart.register(...registerables);


const PerformanceStats = () => {
    const [barsData, setBarsData] = useState(data);


  return (
    <div className="min-w-0 w-full col-span-2 xl:py-7 xl:px-8 lg:py-[21px] lg:px-6 py-[14px] px-4 bg-white border border-gray-300 rounded-xl shadow-xs ring-1 ring-gray-100 ring-opacity-5">
       <div className='flex md:flex-nowrap flex-wrap items-center justify-between w-full'>
       <p className="font-gothic xl:font-extrabold font-bold xl:text-2xl lg:text-xl md:text-lg text-base mr-auto">Performance Stats</p>
       <ChartLegend  legends={barLegends}/>
       <select className='font-mulish font-normal xl:text-sm lg:text-xs text-[10px] leading-4 rounded-[14px] border-[1.3px] border-[#2c2c73]  xl:ml-12 lg:ml-9 md:ml-3 ml-auto md:mt-0 mt-4 xl:py-2 xl:px-4 lg:py-[6px] lg:px-3 py-1 px-2 w-full  xl:max-w-[101px] lg:max-w-[90px] max-w-[70px]'>
            <option value="" className='font-mulish font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-[#2c2c73]'>30 Days</option>
            <option value=""  className='font-mulish font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-[#2c2c73]'>20 Days</option>
        </select>
       </div>
        <div className='flex justify-start items-center mx-auto w-full xl:h-[509px] lg:h-[375px] h-64'>
                <Bar 
                    data={barsData} 
                    options={options} 
                />
        </div>
      </div>
  )
}

export default PerformanceStats