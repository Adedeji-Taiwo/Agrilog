import JobContainer from '../components/JobContainer';


type  EmploymentInfo = {
    employeeId: string,
    probationStartDate: string,
    probationEndDate: string,
    dateOnboarded: string,
    contractStart: string,
    contractEnd: string,
  }
  

type EmploymentInfoContainerProps = {
    employmentInfo: EmploymentInfo;
  }
  

  const EmploymentInfoContainer = ({ employmentInfo }: EmploymentInfoContainerProps) => {
  
  
    return (
      <JobContainer
        title="Employment Information"
        >
          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Employment ID</span>
            <span>{employmentInfo.employeeId}</span>
          </p>

          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Probation Start Date</span>
            <span>{employmentInfo.employeeId}</span>
          </p>
         
          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Probation Start Date</span>
            <span>{employmentInfo.probationEndDate}</span>
          </p>

          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Probation Start Date</span>
            <span>{employmentInfo.dateOnboarded}</span>
          </p>

          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Probation Start Date</span>
            <span>{employmentInfo.contractStart}</span>
          </p>

          <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'>
            <span  className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Contract End</span>
            <span>{employmentInfo.contractEnd}</span>
          </p>

      </JobContainer>
    );
  };

export default EmploymentInfoContainer;