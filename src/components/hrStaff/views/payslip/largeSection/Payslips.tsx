import { payslipData } from '../../../../../constants/hrStaff/payslip'
import payslips from '../../../../../assets/dashboard/payroll/Amzil_Mehdi_Payslip_March.pdf'
const tableHeader = ["Payslip", "Month", "Actions"]


const Payslips = () => {
  return (
    <div className='flex flex-col justify-start items-start xl:gap-[22px] lg:gap-4 gap-3 w-full'>
      <div className='font-mulish text-blackish flex flex-col items-start justify-center xl:gap-3 lg:gap-2 gap-1'>
        <h1 className='font-bold xl:text-xl lg:text-lg md:text-base text-sm text-dashboard-navy'>Payslips</h1>
        <p className='font-normal xl:text-base lg:text-sm text-xs'>View & Download your recent Payslips</p>
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
            {payslipData.map(({ payslip, month }) => (
              <tr className="bg-white" key={month}>

                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                  {payslip}
                </td>
                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                  {month}
                </td>

                <td className="xl:px-6 px-4 xl:py-5 py-3 xl:text-base md:text-sm text-xs text-blackish">
                <select
                    className="xl:min-w-[93px] md:min-w-[80px] min-w-[70px] font-poppins rounded-[6px] font-medium xl:text-xs md:text-[10px] text-[8px] leading-4 xl:px-[18px] px-3 xl:py-[10px] py-2 cursor-pointer border-1 border-[#999] text-black"
                    onChange={(e) => {
                      const action = e.target.value;
                      if (action === "view") {
                        window.open(payslips, "_blank");
                      } else if (action === "download") {
                        const link = document.createElement("a");
                        link.href = payslips;
                        link.download = "Amzil_Mehdi_Payslip_March.pdf"; // Replace with your dynamic file name if needed
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }}
                  > 
            <option value="view">View</option>
            <option value="download">Download</option>
          </select>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Payslips