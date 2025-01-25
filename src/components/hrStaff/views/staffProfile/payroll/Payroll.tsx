import React, {FC} from 'react'
import { GeneralContainer, DeductionContainer } from './subPayroll'


type PayrollPropTypes = {
  payroll: {
    general: {
      employeeId: string,
      calculateSalary: string[],
      currency: string,
      BasicSalary: string,
      yearGross: string,
    },
    compensationSettings: {
      effectiveDate: string,
      compType: string,
      CompAmount: string,
      frequency: string,
    },
    deductions: {
      pension: string,
      nationalHousingFund: string,
      pensionAccountInfo: string,
      incomeTax: string,
      HMO: string,
      HNSAccountInfo: string,
    },
  },
}




const PayrollContainer = ({ title, button, children }: { title: string, button?: React.ReactNode, children: React.ReactNode }) => {
  return (
      <div className={`overflow-x-auto font-mulish bg-white rounded-[5px] border-[0.3px] border-gray-300 w-full xl:px-8 xl:py-[42px] lg:px-6 lg:py-8 px-6 py-5 flex flex-col items-start xl:gap-[26px] lg:gap-5 gap-[13px]`}>
          <div className='flex items-start justify-between w-full'>
              <h3 className="font-bold xl:text-base lg:text-sm text-xs self-end  text-blackish">{title}</h3>
              {button}
          </div>
          <div className={`grid ${title === "Compensations & Settings" && "md:grid-rows-2"} md:grid-rows-3 md:grid-flow-col place-items-start xl:gap-y-[13px] md:gap-y-[10px] gap-y-2 xl:gap-x-44 ${title === "Deductions" ? "lg:gap-x-12" : "lg:gap-x-44"} md:gap-x-24`}>
              {children}
          </div>
      </div>
  )
}


const Payroll:FC<PayrollPropTypes> = ({payroll: {general, compensationSettings, deductions}}) => {
  return (
    <div className='order-3 lg:col-start-2 lg:col-end-5 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3'>
    
      <GeneralContainer 
        general={general}
      />



<PayrollContainer
    title='Compensations & Settings'>
    <p className='font-normal xl:text-base lg:text-sm text-xs flex items-start justify-start text-blackish'><span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Effective Date</span><span>{compensationSettings.effectiveDate}</span></p>
    <p className='font-normal xl:text-base lg:text-sm text-xs  flex items-start justify-start  text-blackish'><span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Comp Type</span><span >{compensationSettings.compType}</span></p>
    <p className='font-normal xl:text-base lg:text-sm text-xs  flex items-start justify-start text-blackish'><span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>Comp Amount</span><span>{compensationSettings.CompAmount}</span></p>
    <p className='font-normal xl:text-base lg:text-sm text-xs  flex items-start justify-start text-blackish'><span className='inline-block font-semibold xl:w-48 w-36 text-left xl:-mr-3 lg:mr-2 mr-4'>frequency</span><span>{compensationSettings.frequency}</span></p>
</PayrollContainer>

<DeductionContainer 
  deduction={deductions}
/>

</div>
  )
}

export default Payroll