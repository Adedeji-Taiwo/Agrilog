import React, {FC} from 'react'

type TabButtonPropsType = {
    activeTabIndex: string,
    setActiveTabIndex: React.Dispatch<React.SetStateAction<string>>,
}

const tabLabels = ["general", "job", "payroll", "documents", "account settings"] 

const Tabs:FC<TabButtonPropsType> = ({activeTabIndex, setActiveTabIndex}) => {
  return (
    <div className='font-mulish bg-white rounded-[5px] border-[0.3px] border-gray-300 lg:order-1 order-2 lg:col-start-2 lg:col-span-3 w-full xl:px-12 xl:py-5 lg:px-9 lg:py-[15px] px-6 py-[10px] flex items-center xl:justify-start justify-between xl:gap-14 gap-7 lg:overflow-visible overflow-x-auto scrollbar-hide'>
        {tabLabels.map((label) => (
            <span 
                key={label} 
                onClick={() => setActiveTabIndex(label)}
                className={`cursor-pointer font-bold xl:text-base lg:text-sm text-xs ${label !== activeTabIndex ? "text-black" : "text-primary"} hover:text-primary uppercase`}
            >{label}</span>
        ))}
    </div>
  )
}

export default Tabs