import React, {FC} from 'react'
import toast from 'react-hot-toast'
import { Button } from '../../../components';
import DatePicker from './DatePicker';
import FormInput from '../../../../../pages/hrStaff/auth/components/FormInput';





type Details = {
    id: number | null
    title: string;
    goal: string;
    goalType: string;
    reminderFreq: string;
    status:string
    deadline: Date;
  }



type GoalSetterAlertType = {
    setShowGoalSetterAlert: React.Dispatch<React.SetStateAction<boolean>>
    showGoalSetterAlert: boolean
    details: Details
    setDetails: React.Dispatch<React.SetStateAction<Details>>
    setDeadline: React.Dispatch<React.SetStateAction<Date>>
    goalData: Details[];
    setGoalData: React.Dispatch<React.SetStateAction<Details[]>>
  }



  
 


const GoalSetterAlert:FC<GoalSetterAlertType> = ({setShowGoalSetterAlert, showGoalSetterAlert, details, setDetails, setDeadline, goalData, setGoalData}) => { 
    
    const goalInitialState = {
        id:goalData.length + 1,
        title: "",
        goal: "",
        goalType: "",
        reminderFreq: "",
        status: "Due Soon",
        deadline: new Date(),
      }
    

    const handleCloseModal = () => {
        setShowGoalSetterAlert(false);
      };

      const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
      };




   //handleSubmit
  const handleReplaceTeamLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
        ...details,
        id: goalData.length + 1,
        status: "Due Soon",
      };

      console.log(data)
      setGoalData((prevDataPool) => [...prevDataPool, data]);
       
    // Check if any of the task object's properties are empty or null
    const isGoalDataEmpty = Object.values(details).some((value) => value === "" || value === null);

    if (isGoalDataEmpty) {
      // Display an error toast
      toast.error(<span className='text-blackish xl:text-base lg:text-sm text-xs'>Please fill in all fields!</span>, {duration: 4000})
      return;
    }


      toast.success(<span className='text-blackish xl:text-base lg:text-sm text-xs'>New Goal Added!</span>, {duration: 4000});
      //reset
  
    setDetails(goalInitialState);
    setTimeout(() => {
      toast.dismiss();
    }, 4000);
  }
    
     
    
  return (
    <form className={`font-mulish flex flex-col items-center justify-start xl:gap-[30px] lg:gap-5 gap-4 bg-[#fefcfb] rounded-[40px] xl:px-12 lg:px-8 px-6 xl:py-9 lg:py-7 py-5 lg:w-2/5 md:w-3/5 w-[90%] z-[150] fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transform transition-all ease-in-out duration-700  ${showGoalSetterAlert ? 'scale-[1]' : 'scale-0'}`} onSubmit={handleReplaceTeamLead}>
       <div className='flex flex-col items-center justify-center gap-0 w-full'>
       <svg onClick={handleCloseModal} className='xl:w-6 xl:h-6 lg:w-[18px] lg:h-[18px] w-3 h-3 self-end cursor-pointer' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z" fill="#7D8FB3"/>
        </svg>
        <h2 className='font-mulish font-bold xl:text-2xl lg:text-xl md:text-lg text-base text-blackish'>Set Goals, OKRs and To-Dos For Yourself</h2>
       </div>

       <div className='flex flex-col items-center justify-start xl:gap-[30px] lg:gap-5 gap-4 w-full xl:px-7 lg:px-5 px-3'>
        <FormInput 
            type='text'
            name='title'
            value={details.title}
            onChange={handleGoalChange}
            placeholder='Give your Goal a Name'
        />
         <FormInput 
            type='text'
            name='goal'
            value={details.goal}
            onChange={handleGoalChange}
            placeholder='What are you trying to?'
        />
        <div className='w-full flex items-start justify-start xl:gap-4 lg:gap-3 gap-2'>
            <select name="goalType" value={details.goalType || ''} onChange={handleGoalChange} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
            <option className='text-blackish text-sm'>Goal Type</option>
            <option className='text-blackish text-sm'>OKR</option>
            <option className='text-blackish text-sm'>To-Do</option>
        </select>
        <label className='flex items-center justify-start w-full'>
            <DatePicker 
                deadline = {details.deadline}
                setDeadline={setDeadline}
        />
        </label>
        </div>
      <select name="reminderFreq" value={details.reminderFreq || ''} onChange={handleGoalChange} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
          <option className='text-blackish text-sm'>Reminder Freq</option>
          <option className='text-blackish text-sm'>Hourly</option>
          <option className='text-blackish text-sm'>Daily</option>
      </select>
     
      <Button onClick={() => setShowGoalSetterAlert(false)} type="submit" className='bg-secondary-dark hover:bg-opacity-80 text-white xl:px-16 lg:px-12 px-8 w-full  xl:mt-6 lg:mt-5 mt-4'><span className='font-mulish font-medium xl:text-xl lg:text-lg text-base text-center mx-auto'>Request</span></Button>
       </div>
    </form>
  )
}

export default GoalSetterAlert