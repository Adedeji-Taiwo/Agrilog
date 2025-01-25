import { notificationData } from '../../../../../constants/hrStaff/header';
import { Add, Comment, Completed, Flagged } from '../../../../../assets/dashboard/header';


const iconType = (type: string) => {
    switch (type) {
        case "comment":
            return Comment
        case "completed":
            return Completed
        case "uncompleted":
            return Flagged
        case "add":
            return Add
        default:
            break;
    }
}

const Container = ({ imgType, message, date }: { imgType: string, message: string, date: string }) => {
    return (
        <div className='flex items-start justify-start xl:gap-5 lg:gap-[15px] gap-[10px]'>
            <img src={iconType(imgType)} alt={imgType}  className='w-full h-auto xl:max-w-[45px] lg:max-w-[34px] max-w-[23px] object-contain'/>
            <div className='flex flex-col items-start justify-start xl:gap-3 lg:gap-2 gap-1'>
                <p className='font-poppins font-normal xl:text-[15px] lg:text-[13px] text-[11px] lg:leading-6 leading-5'>{message}</p>
                <span className="font-Roboto font-normal xl:text-sm lg:text-xs text-[10px] leading-4 text-[#41475e] opacity-50">{date}</span>
            </div>
        </div>
    )
}



const Notification = () => {
    return (
        <div className='absolute xl:top-20 lg:top-16 top-14 right-0 z-[100] scale-0 transition-all duration-500 group-hover:scale-100 flex flex-col items-start justify-start xl:gap-[23px] lg:gap-[18px] gap-3 rounded-lg bg-[#e3f5c8]  xl:px-[26px] xl:py-8 lg:px-5 lg:py-6 px-[13px] py-4 shadow-md w-full xl:max-w-[25%] lg:max-w-[30%] md:max-w-[45%] max-w-[75%]  xl:mr-24 lg:mr-[72px] md:mr-5 mr-4 '>
            <div className="clip-bottom h-2 w-4 bg-navy flex mx-auto bg-[#e3f5c8] absolute lg:right-3 md:right-2 right-1 -top-2" style={{ clipPath: "polygon(0% 50%, 100% 100%, 0% 100%, 50% 0%, 100% 100%)" }}></div>
            {notificationData.map(({ id, message, type, date }) => (
                <Container
                    key={id}
                    imgType={type}
                    message={message}
                    date={date}
                 />
            ))}
        </div>
    )
}

export default Notification