const GeneralContainer =  ({ title, buttons, children }: { title: string, buttons?: React.ReactNode, children: React.ReactNode }) => {
    return (
        <div className='overflow-x-auto font-mulish bg-white rounded-[5px] border-[0.3px] border-gray-300 w-full xl:px-8 xl:py-[42px] lg:px-6 lg:py-8 px-6 py-5 flex flex-col items-start xl:gap-[26px] lg:gap-5 gap-[13px]'>
             <div className='flex items-start justify-between w-full'>
              <h3 className="font-bold xl:text-base lg:text-sm text-xs self-end  text-blackish">{title}</h3>
              {buttons}
          </div>
            <div className="grid md:grid-rows-3 md:grid-flow-col place-items-start xl:gap-y-[13px] md:gap-y-[10px] gap-y-2 xl:gap-x-48 md:gap-x-36">
                {children}
            </div>
        </div>
    )
}

export default GeneralContainer;