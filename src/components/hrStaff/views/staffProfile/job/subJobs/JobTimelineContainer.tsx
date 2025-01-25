import React, {FC} from 'react'
import JobContainer from '../components/JobContainer'


type JobTimeline = {
    effectiveDate: string;
    jobTitle: string;
    positionType: string;
    fullAddress: string;
    employmentType: string;
    lineManager: string;
    department: string;
}[]

type JobTimelinePropTypes = {
    jobTimeline: JobTimeline
}



const JobTimelineContainer:FC<JobTimelinePropTypes> = ({jobTimeline}) => {
  return (
    <JobContainer
                title='Job Timeline'>
                    <table className="text-left" >
                        <thead className="capitalize">
                            <tr>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish py-2">
                                    Effective Date
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Job Title
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Position Type
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Full Address
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Employment Type
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Line Manager
                                </td>
                                <td scope="col" className="font-medium xl:text-base lg:text-sm text-xs text-blackish pl-7 py-2">
                                    Department
                                </td>
                            </tr>
                        </thead>
                        <tbody>

                            {jobTimeline.map(({ effectiveDate, jobTitle, positionType, fullAddress, employmentType, lineManager, department }) => (
                                <tr className="bg-white" key={effectiveDate}>
                                    <td scope="row" className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish py-3">
                                        {effectiveDate}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {jobTitle}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {positionType}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {fullAddress}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {employmentType}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {lineManager}
                                    </td>
                                    <td className="font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-blackish pl-7 py-2">
                                        {department}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </JobContainer>
  )
}

export default JobTimelineContainer;