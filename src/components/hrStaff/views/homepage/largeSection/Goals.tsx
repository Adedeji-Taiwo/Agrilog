import { goalData } from "../../../../../constants/hrStaff/homepage";
import { Link } from "react-router-dom";


const tableHeader = ["Goal", "Status", "Deadline"];


const Payroll = () => {

  return (
    <div className='flex flex-col justify-start items-start lg:gap-1 gap-[2px] bg-white w-full rounded-[10px] md:border-[0.2px] border-[0.8px] border-primary-light xl:px-4 lg:py-[10px] xl:mt-[7px] lg:px-3 lg:mt-[5px] px-3 py-[10px]'>
        <p className='font-gothic xl:font-black lg:font-extrabold font-bold text-left xl:text-base md:text-sm text-xs text-dashboard-navy'>Goals & OkRs in the last 30 Days</p>
        <div className='flex flex-col items-start justify-start xl:gap-3 lg:gap-2 gap-1 w-full'>
            <Link
            to={'/dashboard/user/performance'}
            className="self-end font-mulish xl:font-black lg:font-extrabold font-bold xl:text-xs lg:text-[10px] text-[9px] text-dashboard-navy"
            >
            view all
            </Link>
            <div className="relative overflow-auto whitespace-nowrap scrollbar-hide rounded-[10px] w-full">     
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
                    {goalData.map(({id, goal, status, deadline}) => (
                        <tr className="bg-white" key={id}>
                        
                        <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                            {goal}
                        </td>
                        <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                            {status}
                        </td>
                        
                        <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                            {deadline}
                        </td>
                    </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </div>                  
    </div>
  )
}

export default Payroll