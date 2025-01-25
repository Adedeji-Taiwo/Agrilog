import React, { useState, useContext, useEffect } from 'react'
import TodoAlert from './TodoAlert'
import { DashboardContext, DashboardContextType } from '../../../../../../context/dashboard.context'




type TodoType = {
  id: number;
  title: string;
  goalType: string;
  reminderFreq: string;
  dueDate: any;
  completed: boolean;
};

const initialTodos: TodoType[] = [
  {
    id: 1,
    title: "Harvest olives from designated farm sections",
    goalType: "OKR",
    reminderFreq: "daily",
    dueDate: new Date(),
    completed: false,
  },
  {
    id: 2,
    title: "Inspect and maintain irrigation systems",
    goalType: "OKR",
    reminderFreq: "hourly",
    dueDate: new Date(),
    completed: false,
  },
  {
    id: 3,
    title: "Record daily crop yields using provided tools",
    goalType: "OKR",
    reminderFreq: "daily",
    dueDate: new Date(),
    completed: false,
  },
];


const Todos = () => {
  const { showTodoAlert, setShowTodoAlert } = useContext(DashboardContext) as DashboardContextType;
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<TodoType>({
    id: todos.length + 1,
    title: "",
    goalType: "",
    reminderFreq: "",
    dueDate: new Date(),
    completed: false,
  });


  /* const handleRemoveTodo = (id: number) => {
     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
   };*/



  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ).filter((todo) => !todo.completed) // Remove the todo if it's completed
    );
  };





  return (
    <div className='font-gothic w-full flex flex-col items-center justify-center xl:gap-8 lg:gap-6 gap-4 border-[0.4px] border-[#bbb] rounded-[5px] xl:px-5 xl:pt-3 xl:pb-[46px] lg:px-[15px] lg:pt-[9px] lg:pb-9 px-[10px] pt-[6px] pb-[23px]'>
      {/*todo form pop up */}
      <TodoAlert
        showTodoAlert={showTodoAlert}
        setShowTodoAlert={setShowTodoAlert}
        setDueDate={(date) => setNewTodo((prevDetails) => ({ ...prevDetails, dueDate: date }))}
        todos={todos}
        setTodos={setTodos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <div className='flex items-center justify-between flex-wrap w-full'>
        <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs text-dashboard-navy'>To-dos</span>
        <p className='flex items-center xl:gap-14 lg:gap-5 gap-8'>
          <span className='xl:font-black lg:font-extrabold font-bold xl:text-base md:text-sm text-xs xl:mr-3 mr-2 text-dashboard-navy'>{todos.filter(todo => !todo.completed).length} incomplete</span>
          <button className='font-poppins font-medium xl:text-xs lg:text-[10px] text-[9px] leading-4 xl:px-[11px] lg:px-[7px] px-[6px] py-1 rounded-[7.5px] text-white bg-primary' onClick={() => setShowTodoAlert(true)}>Add To Do</button>
        </p>
      </div>
      <ul className='list-none w-full flex flex-col items-start justify-start xl:gap-7 lg:gap-[21px] gap-[14px] xl:ml-10 ml-6'>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-start xl:gap-3 lg:gap-[9px] gap-4">
            <input
              type="radio"
              name="Todo"
              value={todo.title}
              onChange={() => handleToggleComplete(todo.id)}
              className="checked:bg-[#7d8fb3] h-1 w-1 p-[3px] radio border-none ring-4 ring-[#7d8fb3] cursor-pointer outline-none"
            />
            <label htmlFor={todo.title} className='font-medium md:font-semibold lg:text-xs md:text-sm text-xs leading-4'>{todo.title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos