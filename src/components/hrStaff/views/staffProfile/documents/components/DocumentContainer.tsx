const DocumentContainer = ({ title, button, children }: { title: string, button?: React.ReactNode, children: React.ReactNode }) => {
    return (
        <div className={`overflow-x-auto font-mulish bg-white rounded-[5px] border-[0.3px] border-gray-300 w-full xl:px-8 xl:py-[42px] lg:px-6 lg:py-8 px-6 py-5 flex flex-col items-start xl:gap-[26px] lg:gap-5 gap-4`}>
            <div className='flex items-start justify-between w-full'>
                <h3 className="font-bold xl:text-base lg:text-sm text-xs self-end  text-blackish">{title}</h3>
                {button}
            </div>
            <div className={`self-center grid grid-cols-1 place-items-center xl:gap-y-10 md:gap-y-[30px] gap-y-5`}>
                {children}
            </div>
        </div>
    )
  }

  export default DocumentContainer;