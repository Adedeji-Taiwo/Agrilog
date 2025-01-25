import React, {useEffect, useState} from 'react'
import {PerformanceTableData} from '../../../../../constants/hrStaff/performance';
import {GoalSetterAlert} from './../components/index';



const tableHeader = ["S/N", "Title", "Goal", "Return Date", "Status"];


type DetailsType = {
  id:number | null,
  title: string;
  goal: string;
  goalType: string;
  reminderFreq: string;
  deadline: any;
  status: string
}



const Table = ({setShowGoalSetterAlert, showGoalSetterAlert}: {showGoalSetterAlert:boolean, setShowGoalSetterAlert: React.Dispatch<React.SetStateAction<boolean>>}) => {
 
const goalInitialState = {
  id: PerformanceTableData.length,
  title: "",
  goal: "",
  goalType: "",
  reminderFreq: "",
  status: "Due Soon",
  deadline: new Date(),
}

 
  const [details, setDetails] = useState<DetailsType>(goalInitialState);
  const [PerfomanceData, setPerformanceData] = useState<DetailsType[]>([]); //original
  const [goalData, setGoalData] = useState<DetailsType[]>(PerformanceTableData); //filtered team lead

  useEffect(() => {
    setPerformanceData(goalData)
  }, [goalData])

  

  return (
    <div className='flex flex-col items-start justify-start xl:gap-7 lg:gap-[22px] gap-4 w-full'>
      <GoalSetterAlert 
        showGoalSetterAlert={showGoalSetterAlert}
        setShowGoalSetterAlert={setShowGoalSetterAlert}
        details={details}
        setDetails={setDetails}
        goalData={goalData}
        setGoalData={setGoalData}
        setDeadline={(date) => setDetails((prevDetails) => ({ ...prevDetails, deadline: date }))}
      />
      <h3 className='font-mulish font-bold xl:text-xl lg:text-lg md:text-base text-sm font-blackish'>Upcoming Goals</h3>
      <div className="relative overflow-auto whitespace-nowrap scrollbar-hide rounded-[10px] w-full">     
    <table className="font-mulish min-w-full bg-white text-left text-blackish  border-[0.5px] border-gray-300">
        <thead className="xl:text-base xl:leading-8 lg:text-sm text-xs font-normal bg-primary text-white xl:px-2 pt-1 px-1 capitalize border-b-[0.5px] border-primary">
            <tr>  
                {tableHeader.map((item) => (
                    <th scope="col" className="xl:pl-6 xl:pr-24 lg:pl-4 lg:pr-14 pl-3 md:pr-20 pr-14 py-4 capitalize" key={item}>
                     {item}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody >
            {PerfomanceData.map(({id, title, goal, status, deadline}) => (
                <tr className="bg-white hover:bg-gray-50 cursor-pointer" key={id}>
                <th className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs border-[0.5px] border-gray-300">
                    {id}
                </th>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs border-[0.5px] border-gray-300">
                    {title}
                </td>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs border-[0.5px] border-gray-300">
                    {goal}
                </td>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs border-[0.5px] border-gray-300">
                    {new Date(`${deadline}`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </td>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs  border-[0.5px] border-gray-300">
                    <span style={{backgroundColor: status === "Completed" ? "#E5F9D5" : status === "Overdue" ? "#D4C0BC" : "#C5CAD4", color: status === "Completed" ? "#0fb11f" : status === "Overdue" ? "#ff0000" : "#000"}} className='w-full inline-block xl:max-w-[93px] md:max-w-[80px] max-w-[70px]  font-poppins rounded-[6px] text-center font-medium xl:text-xs md:text-[10px] text-[8px] leading-4 xl:px-[18px] px-3 xl:py-[10px] lg:py-2 py-1'>{status}</span>
                </td>
            </tr>
           
            ))}
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Table