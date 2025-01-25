  import { useState, forwardRef } from "react";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  

  
  const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(({ value, onClick }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

   return (
      <div className="relative flex items-center justify-start w-full">
     <input 
       type="text"
        ref={ref}
        onClick={() => {
          setIsFocused(true);
          onClick && onClick();
        }}
        value={isFocused ? value : ''}
        placeholder="Set Deadline"
        readOnly
        
      className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary xl:pr-10 lg:pr-[30px] pr-5 placeholder:text-#999 ' />
     <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none xl:pr-[14] lg:pr-[11px] pr-[7px]">
       <svg className="xl:w-6 xl:h-6 lg:w-4 lg:h-4 w-3 h-3 mt-1" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M23.1321 2.25083H20.8813V1.12542C20.8813 0.826938 20.7627 0.540683 20.5516 0.329627C20.3406 0.11857 20.0543 0 19.7558 0C19.4574 0 19.1711 0.11857 18.96 0.329627C18.749 0.540683 18.6304 0.826938 18.6304 1.12542V2.25083H11.8779V1.12542C11.8779 0.826938 11.7593 0.540683 11.5483 0.329627C11.3372 0.11857 11.051 0 10.7525 0C10.454 0 10.1678 0.11857 9.95671 0.329627C9.74565 0.540683 9.62708 0.826938 9.62708 1.12542V2.25083H7.37625C6.48081 2.25083 5.62205 2.60654 4.98888 3.23971C4.35571 3.87288 4 4.73165 4 5.62708V19.1321C4 20.0275 4.35571 20.8863 4.98888 21.5195C5.62205 22.1526 6.48081 22.5083 7.37625 22.5083H23.1321C24.0275 22.5083 24.8863 22.1526 25.5195 21.5195C26.1526 20.8863 26.5083 20.0275 26.5083 19.1321V5.62708C26.5083 4.73165 26.1526 3.87288 25.5195 3.23971C24.8863 2.60654 24.0275 2.25083 23.1321 2.25083ZM24.2575 19.1321C24.2575 19.4306 24.1389 19.7168 23.9279 19.9279C23.7168 20.1389 23.4306 20.2575 23.1321 20.2575H7.37625C7.07777 20.2575 6.79152 20.1389 6.58046 19.9279C6.3694 19.7168 6.25083 19.4306 6.25083 19.1321V11.2542H24.2575V19.1321ZM24.2575 9.00333H6.25083V5.62708C6.25083 5.3286 6.3694 5.04235 6.58046 4.83129C6.79152 4.62024 7.07777 4.50167 7.37625 4.50167H9.62708V5.62708C9.62708 5.92556 9.74565 6.21182 9.95671 6.42287C10.1678 6.63393 10.454 6.7525 10.7525 6.7525C11.051 6.7525 11.3372 6.63393 11.5483 6.42287C11.7593 6.21182 11.8779 5.92556 11.8779 5.62708V4.50167H18.6304V5.62708C18.6304 5.92556 18.749 6.21182 18.96 6.42287C19.1711 6.63393 19.4574 6.7525 19.7558 6.7525C20.0543 6.7525 20.3406 6.63393 20.5516 6.42287C20.7627 6.21182 20.8813 5.92556 20.8813 5.62708V4.50167H23.1321C23.4306 4.50167 23.7168 4.62024 23.9279 4.83129C24.1389 5.04235 24.2575 5.3286 24.2575 5.62708V9.00333Z" fill="#555"/>
       </svg>
       </div>
  </div>
   )
  });
  
 
  
  const DatePickerComponent = ({dueDate, setDueDate}: {dueDate: Date, setDueDate: React.Dispatch<React.SetStateAction<Date>>}) => {
  
    return (
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date!)}
        customInput={<CustomInput />}
        placeholderText="set Deadline"
        dateFormat="MMMM d, yyyy"
        className="w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary"
      />
    );
  };
  
  export default DatePickerComponent;
  
