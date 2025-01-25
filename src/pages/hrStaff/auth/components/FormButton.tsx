import React from 'react'

type FormButtonPropTypes = {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const FormButton = ({text, className, onClick}:FormButtonPropTypes ) => {
  return (
    <button 
        onClick={onClick}
        type='submit'
        className={`${className} w-full text-center rounded-md bg-primary outline-none focus:outline-none lg:my-2 my-5 xl:py-[18px] lg:py-[14px] py-3 text-white font-inter lg:font-normal font-medium xl:text-lg text-sm`}
        >
        {text}
  </button>
  )
}

export default FormButton