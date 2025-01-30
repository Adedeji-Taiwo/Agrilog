import React, { useState } from 'react';
import { angleLeft, angleRight, Birthday, Trophy, Profile, Wet } from '../../../../../assets/dashboard/homepage';

type UpcomingEventData = {
    date: string
    name: string
    celebration: string
    mail: string
}


const UpcomingEventsData: UpcomingEventData[] = [

    {
        date: "Fri 31",
        name: "Olive",
        celebration: "Planting",
        mail: "Ahmed Yousine"
    },
    {
        date: "Mon 3",
        name: "Oranges",
        celebration: "Harvest",
        mail: "Tarik Hifba"
    },
    {
        date: "Wed 5",
        name: "Strawberry",
        celebration: "Harvest",
        mail: "Musa Khoussa"
    },
    {
        date: "Fri 7",
        name: "Olive",
        celebration: "Planting",
        mail: "Ahmed Yousine"
    },
]



const UpcomingEvents = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevClick = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
    };

    const handleNextClick = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);
    };

    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const dateList = [];
    for (let i = 0; i < 8; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        dateList.push(formattedDate);
    }




    return (
        <div className='bg-white font-mulish relative w-full rounded-[10px] xl:pt-[10px] lg:pt-[7.5px] pt-[10px] xl:px-6 lg:px-[18px] px-3 xl:pb-[22px] lg:pb-[16.5px] pb-[11px] md:border-[0.2px] border-[0.8px] border-primary-light'>
            <div className='flex items-center justify-center w-full relative'>
                <p className='font-gothic xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy w-full absolute'>Upcoming Schedules</p>
                <p className='flex items-center md:justify-center justify-end xl:gap-[10px] lg:gap-[7.5px] gap-1 w-full z-10'>
                    <span className='cursor-pointer px-1' onClick={handlePrevClick}><img src={angleLeft} alt="back" className='w-full h-auto lg:max-w-[4px] max-w-[3px]' /></span>
                    <span className=' xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>{`${dateList[0].split(', ')[1]} - ${dateList[dateList.length - 1].split(', ')[1]}, ${new Date().getFullYear()}`}</span>
                    <span className='cursor-pointer px-1' onClick={handleNextClick}><img src={angleRight} alt="forward" className='w-full h-auto xl:max-w-[5px] lg:max-w-[4px] max-w-[3px] cursor-pointer' /></span>
                </p>
            </div>
            <div className='grid divide-x divide-y divide-[#bbb] overflow-hidden lg:grid-cols-8 md:grid-cols-4 grid-cols-2 lg:divide-y-0  border border-[#bbb]  xl:mt-[10px] lg:mt-[7.5px] mt-[5px] xl:mb-6 lg:mb-[18px] mb-3'>
                {dateList.map((date) => (
                    <div key={date} className="flex flex-col items-center justify-start xl:pt-[7px] lg:pt-[5.5px] pt-[3.5px]">
                        <p className='xl:font-semibold md:font-medium font-normal xl:text-[13px] text-xs'> {`${date.split(',')[0]} ${(date.split(',')[1]).split(' ')[2]}`}</p>
                        {UpcomingEventsData.map((item) => item.date === `${date.split(',')[0]} ${(date.split(',')[1]).split(' ')[2]}` ? (
                            <div key={item.name} className='cursor-pointer group flex items-center justify-center xl:gap-[17px] lg:gap-[13px] gap-2 xl:my-8 lg:my-6 my-4'>
                                <img src={item.celebration === "Harvest" ? Trophy : Birthday} alt="scedule" className='w-full h-auto xl:max-w-[23px] lg:max-w-[18px] max-w-[16px]' />
                                <img src={Profile} alt="profile" className='w-full h-auto max-w-[20px]' />
                                <ul className="list-none font-mulish flex flex-col gap-2 absolute -top-2 z-10 scale-0 transition-all duration-500 rounded-xl bg-primary-light p-2 font-semibold text-xs text-primary group-hover:scale-100">
                                    <li><span className='font-bold'>Section: </span>{item.name}</li>
                                    <li><span className='font-bold'>Purpose: </span>{item.celebration} ✨</li>
                                    <li><span className='font-bold'>Lead: </span>{item.mail}</li>
                                </ul>
                            </div>
                        ) : null)}
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-start xl:gap-[50px] lg:gap-[38px] gap-[25px] xl:ml-[37px] lg:ml-7 ml-[18.5px]'>
                <p className='flex items-center justify-center xl:gap-[10px] lg:gap-[7.5px] gap-[5px]'>
                    <img src={Birthday} alt="birthday" className='w-full h-auto xl:max-w-[23px] lg:max-w-[18px] max-w-[16px]' />
                    <span className='xl:font-semibold font-medium xl:text-[13px] text-xs'>Planting</span>
                </p>
                <p className='flex items-center justify-center xl:gap-[10px] lg:gap-[7.5px] gap-[5px]'>
                    <img src={Trophy} alt="birthday" className='w-full h-auto xl:max-w-[23px] lg:max-w-[18px] max-w-[14px]' />
                    <span className='xl:font-semibold font-medium xl:text-[13px] text-xs'>Harvesting</span>
                </p>
                <p className='flex items-center justify-center xl:gap-[10px] lg:gap-[7.5px] gap-[5px]'>
                    <img src={Wet} alt="birthday" className='w-full h-auto xl:max-w-[23px] lg:max-w-[18px] max-w-[16px]' />
                    <span className='xl:font-semibold font-medium xl:text-[13px] text-xs'>Irrigation</span>
                </p>
            </div>
        </div>
    )
}

export default UpcomingEvents