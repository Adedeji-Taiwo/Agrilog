import React, { FC } from 'react'

type ButtonProps = {
    children: React.ReactNode
    className: string
    onClick?: () => void;
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button:FC<ButtonProps> = ({className, children, onClick, type, onMouseEnter, onMouseLeave}) => {
  return (
    <button type={type} className={`${className} flex items-center justify-start xl:gap-[7.5px] lg:gap-[6px] gap-2 rounded-[7.5px] hover:bg-opacity-90 xl:px-[23px] xl:py-3 px-[18px] py-[9px] `} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;
