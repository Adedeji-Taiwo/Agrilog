import React, { Children, FC } from 'react'

type ButtonProps = {
    children: React.ReactNode
    className: string
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button:FC<ButtonProps> = ({className, children, onClick, type, onMouseEnter, onMouseLeave}) => {
  return (
    <button type={type} className={`${className} flex items-center justify-center md:gap-[10px] md:rounded-[10px]`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;