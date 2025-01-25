import React, { useState } from 'react'
import JobContainer from '../components/JobContainer';



type  WorkSchedule = {
    currentSchedule: string,
    standardWorkingTime: string,
    scheduleType: string,
    dailyWorkingHours: string[],
  }
  

type WorkScheduleContainerProps = {
    workSchedule: WorkSchedule;
  }
  

  const WorkScheduleContainer = ({ workSchedule }: WorkScheduleContainerProps) => {
  
   
    return (
      <JobContainer
        title="Work Schedule"
      >
         <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
          <span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-2 lg:mr-2 mr-4'>Current Schedule</span>
          <span>{workSchedule.currentSchedule}</span>
        </p>

        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
          <span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-2 lg:mr-2 mr-4'>Standard Working hours/day</span>
          <span>{workSchedule.standardWorkingTime}</span>
        </p>
         
        <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
          <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-2 lg:mr-2 mr-4'>Schedule Type</span>
          <span>{workSchedule.scheduleType}</span>
        </p>

        <div className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'><span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-2 lg:mr-2 mr-4'>Daily Working hours</span><ul>{workSchedule.dailyWorkingHours.join(', ').split(',').map((item, index) => (
          <li key={item} className="block">{item}</li>
          ))}
          </ul>
      </div>

      </JobContainer>
    );
  };

export default WorkScheduleContainer;