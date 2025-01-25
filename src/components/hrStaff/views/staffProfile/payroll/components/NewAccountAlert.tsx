import React, {FC, useState} from 'react'
import { Button} from '../../../../../index';
import FormInput from './../../../../../../pages/hrStaff/auth/components/FormInput';
import { toast } from 'react-hot-toast';

type Deduction = {
    pension: string,
    nationalHousingFund: string,
    pensionAccountInfo: string,
    incomeTax: string,
    HMO: string,
    HNSAccountInfo: string,
  }


type NewAccountInfo = {
    accountType: string;
    accountNo: string;
   accountName: string;
  }



type NewAccountInfoAlertType = {
    setShowNewAccountInfoAlert: React.Dispatch<React.SetStateAction<boolean>>
    showNewAccountInfoAlert: boolean
    newAccountInfo: NewAccountInfo
    setNewAccountInfo: React.Dispatch<React.SetStateAction<NewAccountInfo>>
    setNewDeduction:  React.Dispatch<React.SetStateAction<Deduction>>
}


  const initialState = {
    accountType: "", 
    accountNo: "", 
    accountName: ""
  }
  
 


const NewAccountInfoAlert:FC<NewAccountInfoAlertType> = ({newAccountInfo, setNewAccountInfo,  setNewDeduction, showNewAccountInfoAlert, setShowNewAccountInfoAlert}) => {


      const handleNewAccountChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewAccountInfo((prevAccount) => ({ ...prevAccount, [name]: value }));
      };
    
      const handleAddNewAccountInfo = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

      setNewDeduction((prevDeduction) => ({
            ...prevDeduction,
            [newAccountInfo.accountType]: `${newAccountInfo.accountNo} ${newAccountInfo.accountName.toUpperCase()}`
          }));

         // Check if any of the task object's properties are empty or null
        const isAccountInfoDataEmpty = Object.values(newAccountInfo).some((value) => value === "");

        if (isAccountInfoDataEmpty) {
        // Display an error toast
        toast.error(<span className='text-blackish xl:text-base lg:text-sm text-xs'>Please fill in all fields!</span>, {duration: 4000})
        return;
        }


        toast.success(<span className='text-blackish xl:text-base lg:text-sm text-xs'>New Todo Added!</span>, {duration: 4000});
        //reset
        setNewAccountInfo(initialState);
        setTimeout(() => {
            toast.dismiss();
        }, 4000)
        setShowNewAccountInfoAlert(false)
      }
     
    
  return (
    <form className={`font-mulish flex flex-col items-center justify-start xl:gap-[30px] lg:gap-5 gap-4 bg-[#fefcfb] rounded-[40px] xl:px-12 lg:px-8 px-6 xl:py-9 lg:py-7 py-5 lg:w-2/5 md:w-3/5 w-[90%] z-[150] fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transform transition-all ease-in-out duration-700  ${showNewAccountInfoAlert ? 'scale-[1]' : 'scale-0'}`} onSubmit={handleAddNewAccountInfo}>
       <div className='flex flex-col items-center justify-center gap-0 w-full'>
       <svg onClick={() => setShowNewAccountInfoAlert(false)} className='xl:w-6 xl:h-6 lg:w-[18px] lg:h-[18px] w-3 h-3 self-end cursor-pointer' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z" fill="#7D8FB3"/>
        </svg>
        <h2 className='font-mulish font-bold xl:text-2xl lg:text-xl md:text-lg text-base text-blackish'>Add New Account Info</h2>
       </div>

       <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
            <svg className='xl:w-8 xl:h-7 lg:w-6 lg:h-5 w-4 h-[14px]' viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4987 5.25C15.8036 5.25 16.1017 5.34042 16.3552 5.50982C16.6087 5.67922 16.8063 5.91999 16.923 6.2017C17.0397 6.4834 17.0702 6.79338 17.0107 7.09243C16.9513 7.39148 16.8044 7.66618 16.5888 7.88179C16.3732 8.09739 16.0985 8.24423 15.7995 8.30371C15.5004 8.3632 15.1904 8.33267 14.9087 8.21598C14.627 8.0993 14.3862 7.9017 14.2168 7.64817C14.0474 7.39464 13.957 7.09658 13.957 6.79167C13.957 6.38279 14.1195 5.99066 14.4086 5.70154C14.6977 5.41243 15.0898 5.25 15.4987 5.25ZM6.2487 17.5833H24.7487V22.2083H6.2487V17.5833ZM27.832 5.25H21.6654V0.625H9.33203V5.25H3.16536C2.34761 5.25 1.56336 5.57485 0.985119 6.15309C0.406881 6.73132 0.0820313 7.51558 0.0820312 8.33333V25.2917C0.0820313 26.1094 0.406881 26.8937 0.985119 27.4719C1.56336 28.0501 2.34761 28.375 3.16536 28.375H27.832C28.6498 28.375 29.434 28.0501 30.0123 27.4719C30.5905 26.8937 30.9154 26.1094 30.9154 25.2917V8.33333C30.9154 7.51558 30.5905 6.73132 30.0123 6.15309C29.434 5.57485 28.6498 5.25 27.832 5.25ZM12.4154 3.70833H18.582V11.4167H12.4154V3.70833ZM27.832 25.2917H3.16536V11.4167H9.33203C9.33203 12.2344 9.65688 13.0187 10.2351 13.5969C10.8134 14.1751 11.5976 14.5 12.4154 14.5H18.582C19.3998 14.5 20.184 14.1751 20.7623 13.5969C21.3405 13.0187 21.6654 12.2344 21.6654 11.4167H27.832V25.2917Z" fill="#545454"/>
            </svg>

            <select name="accountType" value={newAccountInfo.accountType || ''} onChange={handleNewAccountChange} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
            <option value="" className='text-blackish text-sm'>Select Account Type</option>
            <option value="hmo" className='text-blackish text-sm'>HMO</option>
            <option value="tax" className='text-blackish text-sm'>Tax</option>
            </select>
       </label>

       <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
            <svg className='xl:w-[30px] xl:h-[25px] lg:w-[22px] lg:h-[19px] w-[15px] h-3' viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.70964 8.64579L8.5638 15.5833H0.855469L4.70964 8.64579ZM1.6263 0.166626H7.79297V6.33329H1.6263V0.166626ZM4.70964 24.8333C5.52739 24.8333 6.31164 24.5084 6.88988 23.9302C7.46812 23.352 7.79297 22.5677 7.79297 21.75C7.79297 20.9322 7.46812 20.148 6.88988 19.5697C6.31164 18.9915 5.52739 18.6666 4.70964 18.6666C3.89188 18.6666 3.10763 18.9915 2.52939 19.5697C1.95115 20.148 1.6263 20.9322 1.6263 21.75C1.6263 22.5677 1.95115 23.352 2.52939 23.9302C3.10763 24.5084 3.89188 24.8333 4.70964 24.8333ZM10.8763 1.70829V4.79163H29.3763V1.70829H10.8763ZM10.8763 23.2916H29.3763V20.2083H10.8763V23.2916ZM10.8763 14.0416H29.3763V10.9583H10.8763V14.0416Z" fill="#545454"/>
            </svg>
            <FormInput 
                type='text'
                name="accountNo"
                placeholder='Enter Account No'
                value={newAccountInfo.accountNo}
                onChange={handleNewAccountChange}
            />
       </label>

       <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
            <svg className='xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2234_3986" maskUnits="userSpaceOnUse" x="0" y="0"className='xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4'>
                <path d="M17.4974 12.875C20.4774 12.875 22.8932 10.4592 22.8932 7.47921C22.8932 4.49917 20.4774 2.08337 17.4974 2.08337C14.5174 2.08337 12.1016 4.49917 12.1016 7.47921C12.1016 10.4592 14.5174 12.875 17.4974 12.875Z" fill="white" stroke="white" strokeWidth="3.08333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.08203 30.6042C2.08203 23.7924 8.29418 18.2709 15.957 18.2709" stroke="white" strokeWidth="3.08333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.8958 31.375L30.6042 23.6667L27.5208 20.5834L19.8125 28.2917V31.375H22.8958Z" fill="white" stroke="white" strokeWidth="3.08333" strokeLinecap="round" strokeLinejoin="round"/>
                </mask>
                <g mask="url(#mask0_2234_3986)">
                <path d="M-1 -1H36V36H-1V-1Z" fill="#545454"/>
                </g>
            </svg>

            <FormInput 
                type='text'
                name="accountName"
                placeholder='Account Name'
                value={newAccountInfo.accountName}
                onChange={handleNewAccountChange}
            />
       </label> 


       
        <div className=' flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full xl:mt-6 lg:mt-5 mt-4'>
            <div  className='xl:w-9 xl:h-[26px] lg:w-7 lg:h-5 w-5 h-[14px]' />
            <Button type="submit" className='bg-secondary-dark text-white xl:px-[18px] lg:px-12 px-8 xl:py-4 py-3 w-full'><span className='font-mulish font-medium xl:text-xl lg:text-lg text-base text-center mx-auto'>Confirm</span></Button>
        </div>
    </form>
  )
}

export default NewAccountInfoAlert