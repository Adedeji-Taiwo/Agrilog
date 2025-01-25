import React, { FC, useState } from 'react'
import { Button } from '../../../../components/index';
import FormInput from '../../../../../../pages/hrStaff/auth/components/FormInput';
import DatePicker from './DatePicker'
import { toast } from 'react-hot-toast';



type TodoType = {
  id: number;
  title: string;
  goalType: string;
  reminderFreq: string;
  dueDate: any;
  completed: boolean;
};


type TodoAlertType = {
  setShowTodoAlert: React.Dispatch<React.SetStateAction<boolean>>
  showTodoAlert: boolean
  setDueDate: React.Dispatch<React.SetStateAction<Date>>
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
  newTodo: TodoType;
  setNewTodo: React.Dispatch<React.SetStateAction<TodoType>>
}





const TodoAlert: FC<TodoAlertType> = ({ setShowTodoAlert, showTodoAlert, setDueDate, todos, setTodos, newTodo, setNewTodo }) => {
  const todoInitialState = {
    id: todos.length + 1,
    title: "",
    goalType: "",
    reminderFreq: "",
    dueDate: new Date(),
    completed: false,
  }



  const handleCloseModal = () => {
    setShowTodoAlert(false);
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const data = {
      ...newTodo,
      id: todos.length + 1,
      completed: false,
    };

  
    setTodos((prevTodos) => [...prevTodos, data]);
    
         
    // Check if any of the task object's properties are empty or null
    const isTodoDataEmpty = Object.values(newTodo).some((value) => value === "" || value === null);

    if (isTodoDataEmpty) {
      // Display an error toast
      toast.error(<span className='text-blackish xl:text-base lg:text-sm text-xs'>Please fill in all fields!</span>, {duration: 4000})
      return;
    }


      toast.success(<span className='text-blackish xl:text-base lg:text-sm text-xs'>New Todo Added!</span>, {duration: 4000});
      //reset
      setNewTodo(todoInitialState);
      setTimeout(() => {
        toast.dismiss();
      }, 4000)
   
  };



  return (
    <form className={`font-mulish flex flex-col items-center justify-start xl:gap-[30px] lg:gap-5 gap-4 bg-[#fefcfb] rounded-[40px] xl:px-12 lg:px-8 px-6 xl:py-9 lg:py-7 py-5 lg:w-2/5 md:w-3/5 w-[90%] z-[150] fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transform transition-all ease-in-out duration-700  ${showTodoAlert ? 'scale-[1]' : 'scale-0'}`} onSubmit={handleSubmit}>
      <div className='flex flex-col items-center justify-center gap-0 w-full'>
        <svg onClick={handleCloseModal} className='xl:w-6 xl:h-6 lg:w-[18px] lg:h-[18px] w-3 h-3 self-end cursor-pointer' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z" fill="#7D8FB3" />
        </svg>
        <h2 className='font-mulish font-bold xl:text-2xl lg:text-xl md:text-lg text-base text-blackish'>Set your To-Do List</h2>
      </div>

      <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
        <svg className='xl:w-9 xl:h-9 lg:w-7 lg:h-7 w-[18px] h-[18px]' viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.7245 2.3125V14.2363H33.0253V2.3125H31.7245ZM30.4237 3.25123L23.6741 5.78125L30.4237 8.31055V3.25123ZM11.9887 7.44336C11.6274 7.44336 11.2516 7.60957 10.8831 7.94922C10.435 8.36836 10.052 9.04043 9.88582 9.8498C9.71961 10.6664 9.81355 11.4396 10.0665 11.9961C10.3194 12.5598 10.688 12.885 11.1216 12.9717C11.5552 13.0656 12.0177 12.9066 12.4729 12.4947C12.9137 12.0756 13.304 11.4035 13.4702 10.5869C13.6292 9.77031 13.5352 8.99707 13.2895 8.44062C13.0366 7.87695 12.668 7.55898 12.2345 7.46504C12.155 7.45059 12.0682 7.44336 11.9887 7.44336ZM9.21375 13.1162C8.96805 13.2029 8.71512 13.2969 8.44051 13.4125C6.64471 14.5471 5.3909 15.6672 4.11613 17.4377C3.30748 18.5578 3.26773 20.4728 3.20703 21.882L4.71016 22.5469C4.77303 20.5379 4.73617 19.7068 5.66912 18.5506C6.37949 17.6689 7.06602 16.7439 8.3827 16.4621C8.49832 18.5506 8.1948 21.7881 7.37098 25.1051C8.85242 25.3074 10.0882 25.0545 11.4901 24.6498C15.154 22.8215 16.845 24.3752 19.3887 27.9523L20.8702 25.6326C19.0925 23.5441 17.3653 20.2055 12.4007 21.4918C12.762 19.5189 12.8054 18.2109 13.0221 16.2453C13.0655 15.3781 13.08 14.5182 13.1016 13.6654C12.4585 14.1568 11.6636 14.417 10.8614 14.2508C10.1749 14.1062 9.61121 13.6799 9.21375 13.1162ZM19.6345 13.6437C18.3192 14.9301 18.0302 15.884 16.0067 16.4187L14.3807 14.6844C14.3518 15.6094 14.3229 16.5561 14.2434 17.5172C14.93 18.1459 15.6309 18.6518 15.8839 18.5723C18.1458 17.893 18.7962 17.1053 20.321 15.5443L19.6345 13.6437ZM29.5565 15.5371V22.4746H22.619V29.4121H15.6815V35.0561C23.0743 35.0705 27.8077 35.1355 35.1932 35.1861V15.5371H29.5565ZM10.1677 26.2975C9.18484 26.4781 8.15867 26.5359 7.02844 26.3625C6.24146 29.0725 5.09461 31.7318 3.52283 33.7697L6.31445 34.8754C8.26707 32.1365 8.97527 29.7734 10.1677 26.2975Z" fill="#545454" />
        </svg>

        <FormInput
          type='text'
          name="title"
          placeholder='Todo Title'
          value={newTodo.title}
          onChange={handleTodoChange}
        />
      </label>

      <div className='w-full flex items-start justify-start xl:gap-4 lg:gap-3 gap-2'>
        <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
          <svg className='xl:w-9 xl:h-9 lg:w-7 lg:h-7 w-[18px] h-[18px]' viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5356 5.46435H31.5332L35.409 6.23903C35.6171 6.28066 35.7882 6.43328 35.8484 6.6391C35.8787 6.73907 35.8814 6.84541 35.8562 6.9468C35.831 7.04819 35.7787 7.14084 35.705 7.21491L32.5299 10.3923C32.1501 10.7715 31.6352 10.9844 31.0985 10.9843H28.4669L21.8531 17.6003C21.9793 18.0768 22.0025 18.5746 21.9212 19.0607C21.8399 19.5468 21.6559 20.01 21.3815 20.4194C21.1072 20.8288 20.7487 21.1751 20.33 21.4351C19.9114 21.6951 19.4421 21.863 18.9535 21.9274C18.4648 21.9918 17.9681 21.9514 17.4963 21.8088C17.0246 21.6662 16.5886 21.4247 16.2175 21.1004C15.8464 20.7761 15.5486 20.3764 15.3441 19.928C15.1395 19.4796 15.0329 18.9928 15.0312 18.4999C15.0316 17.9678 15.1543 17.4429 15.3898 16.9657C15.6254 16.4886 15.9675 16.0719 16.3897 15.7481C16.8119 15.4242 17.3029 15.2017 17.8248 15.0979C18.3467 14.994 18.8855 15.0115 19.3996 15.1491L26.0156 8.53072V5.90141C26.0156 5.36491 26.2284 4.84922 26.6076 4.46997L29.785 1.2926C29.8591 1.21889 29.9517 1.16664 30.0531 1.1414C30.1545 1.11615 30.2608 1.11885 30.3608 1.14922C30.5666 1.20935 30.7192 1.38047 30.7609 1.5886L31.5356 5.46435Z" fill="#545454" />
            <path d="M4.62535 18.5001C4.62772 20.4841 5.05557 22.4446 5.88003 24.2492C6.70449 26.0538 7.90639 27.6606 9.40465 28.9613C10.9029 30.2619 12.6627 31.2261 14.5652 31.7888C16.4678 32.3515 18.4689 32.4996 20.4336 32.2231C22.3983 31.9467 24.2809 31.2521 25.9543 30.1862C27.6277 29.1204 29.0531 27.708 30.1342 26.0444C31.2154 24.3809 31.9272 22.5048 32.2217 20.5427C32.5161 18.5806 32.3864 16.5782 31.8412 14.6706C31.7646 14.4477 31.7342 14.2116 31.7518 13.9766C31.7695 13.7416 31.8347 13.5127 31.9436 13.3037C32.0526 13.0947 32.2029 12.9101 32.3854 12.7611C32.568 12.6121 32.7789 12.5018 33.0055 12.4369C33.232 12.372 33.4694 12.3539 33.7032 12.3837C33.9369 12.4135 34.1622 12.4905 34.3652 12.6101C34.5683 12.7298 34.7448 12.8894 34.8842 13.0795C35.0235 13.2695 35.1227 13.4859 35.1758 13.7155C36.2315 17.4098 36.031 21.35 34.6056 24.918C33.1803 28.4861 30.6109 31.48 27.3004 33.4301C23.9899 35.3802 20.1257 36.1761 16.314 35.6931C12.5023 35.21 8.95883 33.4752 6.23947 30.761C3.52307 28.0423 1.78646 24.4985 1.30229 20.6859C0.81812 16.8733 1.61381 13.0079 3.56442 9.69657C5.51504 6.3852 8.51013 3.81539 12.0794 2.39061C15.6488 0.96583 19.5902 0.766757 23.2849 1.82465C23.7248 1.95325 24.096 2.25077 24.3172 2.65218C24.5385 3.0536 24.5918 3.52627 24.4656 3.96689C24.3394 4.40752 24.0439 4.78028 23.6437 5.00371C23.2435 5.22714 22.7712 5.28307 22.3298 5.15927C20.2638 4.5665 18.0883 4.46174 15.9749 4.85325C13.8615 5.24476 11.8679 6.12184 10.1513 7.41535C8.43468 8.70885 7.042 10.3834 6.08305 12.307C5.1241 14.2306 4.62508 16.3507 4.62535 18.5001Z" fill="#545454" />
            <path d="M11.5617 18.4999C11.5618 19.7639 11.907 21.0038 12.5601 22.086C13.2132 23.1682 14.1494 24.0516 15.2676 24.6408C16.3858 25.23 17.6437 25.5028 18.9056 25.4296C20.1675 25.3565 21.3854 24.9402 22.4281 24.2256C23.4706 23.5093 24.2973 22.5216 24.8191 21.3694C25.3408 20.2171 25.5375 18.9442 25.3881 17.6882C25.3477 17.3834 25.3892 17.0734 25.5085 16.79C25.6277 16.5066 25.8203 16.2601 26.0665 16.0759C26.3126 15.8917 26.6034 15.7764 26.9089 15.7419C27.2145 15.7075 27.5236 15.7551 27.8047 15.8798C28.0856 16.003 28.3289 16.1984 28.5096 16.4462C28.6904 16.694 28.8022 16.9853 28.8337 17.2905C29.085 19.4367 28.6619 21.6079 27.6232 23.5028C26.5844 25.3976 24.9816 26.9221 23.0371 27.8647C21.0926 28.8072 18.9029 29.121 16.7719 28.7626C14.641 28.4042 12.6745 27.3912 11.1453 25.8644C9.61618 24.3376 8.60027 22.3726 8.2386 20.2422C7.87693 18.1118 8.18743 15.9216 9.12702 13.9757C10.0666 12.0298 11.5887 10.4246 13.4819 9.38301C15.3752 8.3414 17.5458 7.915 19.6924 8.16301C19.9223 8.18434 20.1455 8.25134 20.3492 8.36008C20.5528 8.46881 20.7326 8.61711 20.8782 8.79626C21.0238 8.97541 21.1321 9.18182 21.1969 9.40339C21.2617 9.62496 21.2815 9.85723 21.2554 10.0866C21.2292 10.3159 21.1575 10.5377 21.0445 10.739C20.9315 10.9403 20.7794 11.117 20.5973 11.2588C20.4151 11.4005 20.2064 11.5045 19.9835 11.5646C19.7607 11.6247 19.528 11.6396 19.2993 11.6086C18.3272 11.4958 17.3423 11.5898 16.4092 11.8846C15.4761 12.1794 14.6159 12.6683 13.8851 13.3191C13.1544 13.97 12.5696 14.768 12.1691 15.6609C11.7687 16.5538 11.5616 17.5213 11.5617 18.4999Z" fill="#545454" />
          </svg>
          <select name="goalType" value={newTodo.goalType || ''} onChange={handleTodoChange} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
            <option value="" className='text-blackish text-sm'>Goal Type</option>
            <option value="OKR" className='text-blackish text-sm'>OKR</option>
            <option value="to-do" className='text-blackish text-sm'>To-Do</option>
          </select>
        </label>

        <label className='flex items-center justify-start w-full'>
          <DatePicker
            dueDate={newTodo.dueDate}
            setDueDate={setDueDate}
          />
        </label>
      </div>



      <label className='flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full'>
        <svg className='xl:w-9 xl:h-9 lg:w-7 lg:h-7 w-[18px] h-[18px]' viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.25 10.6376L5.96625 7.36925L8.14 5.1955L11.4083 8.47925L9.25 10.6376ZM20.0417 1.54175V6.16675H16.9583V1.54175H20.0417ZM31.0337 7.36925L27.75 10.6376L25.5917 8.47925L28.86 5.1955L31.0337 7.36925ZM6.9375 16.1876V19.2709H2.3125V16.1876H6.9375ZM30.0625 16.1876H34.6875V19.2709H30.0625V16.1876ZM9.25 30.8334H27.75C28.5678 30.8334 29.352 31.1583 29.9302 31.7365C30.5085 32.3147 30.8333 33.099 30.8333 33.9167H6.16667C6.16667 33.099 6.49152 32.3147 7.06975 31.7365C7.64799 31.1583 8.43225 30.8334 9.25 30.8334ZM18.5 7.70841C20.9533 7.70841 23.306 8.68297 25.0407 10.4177C26.7754 12.1524 27.75 14.5052 27.75 16.9584V29.2917H9.25V16.9584C9.25 14.5052 10.2246 12.1524 11.9593 10.4177C13.694 8.68297 16.0467 7.70841 18.5 7.70841ZM18.5 10.7917C16.8645 10.7917 15.296 11.4414 14.1395 12.5979C12.983 13.7544 12.3333 15.3229 12.3333 16.9584V26.2084H24.6667V16.9584C24.6667 15.3229 24.017 13.7544 22.8605 12.5979C21.704 11.4414 20.1355 10.7917 18.5 10.7917Z" fill="#545454" />
        </svg>

        <select name="reminderFreq" value={newTodo.reminderFreq || ''} onChange={handleTodoChange} className='w-full rounded-md border-[1.26px] border-[#c4c4c4] text-[#999] outline-none xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary'>
          <option value="" className='text-blackish text-sm'>Reminder Frequency</option>
          <option value="hourly" className='text-blackish text-sm'>Hourly</option>
          <option value="daily" className='text-blackish text-sm'>Daily</option>
        </select>
      </label>


      <div className=' flex items-center justify-start xl:gap-[21px] lg:gap-4 gap-[11px] w-full xl:mt-6 lg:mt-5 mt-4'>
        <div className='xl:w-9 xl:h-[26px] lg:w-7 lg:h-5 w-5 h-[14px]' />
        <Button onClick={() => setShowTodoAlert(false)} type="submit" className='bg-secondary-dark text-white xl:px-16 lg:px-12 px-8 w-full'><span className='font-mulish font-medium xl:text-xl lg:text-lg text-base text-center mx-auto'>Confirm</span></Button>
      </div>
    </form>
  )
}

export default TodoAlert