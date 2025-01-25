import React, { FC } from 'react'
import { EmploymentInfoContainer, JobTimelineContainer, WorkScheduleContainer} from './subJobs';


type JobPropsTypes = {
    job: {
        employmentInfo: {
            employeeId: string,
            probationStartDate: string,
            probationEndDate: string,
            dateOnboarded: string,
            contractStart: string,
            contractEnd: string,
        },
        jobTimeline: {
            effectiveDate: string,
            jobTitle: string,
            positionType: string,
            fullAddress: string,
            employmentType: string,
            lineManager: string,
            department: string,
        }[],
        workSchedule: {
            currentSchedule: string,
            standardWorkingTime: string,
            scheduleType: string,
            dailyWorkingHours: string[],
        },
        jobHistory: {
            year: string,
        },
    },

    overview: {
        fullName: string,
        photo: string,
    }
}




const Job: FC<JobPropsTypes> = ({ job: { employmentInfo, jobTimeline, workSchedule } }) => {
    return (
        <div  className='order-3 lg:col-start-2 lg:col-end-5 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3'>

            <EmploymentInfoContainer 
                employmentInfo={employmentInfo}
            />

            <JobTimelineContainer 
                jobTimeline={jobTimeline}
            />

            <WorkScheduleContainer 
                workSchedule={workSchedule}
            />

        </div>
    )
}

export default Job



