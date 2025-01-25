import React, { ChangeEvent } from 'react'

type FormInputPropTypes = {
    type: string;
    placeholder: string;
    className?: string;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    name?: string
    value?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({type, name, value, onChange, className, placeholder, inputMode}: FormInputPropTypes) => {
  return (
    <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        placeholder={placeholder}
        className={`${className} w-full rounded-md border-[1.26px] border-[#c4c4c4] outline-none  xl:py-[18px] lg:py-3 xl:px-9 lg:px-7 py-3 placeholder:text-[#999] font-inter font-normal xl:text-lg text-sm focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary`} 
        />
  )
}

export default FormInput