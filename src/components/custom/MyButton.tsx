import React, { ButtonHTMLAttributes, } from 'react'
import { IconBaseProps, IconType } from "react-icons";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    leftIcon?: JSX.Element;
    bgColor?: string;
    addClass?: string;
}
const MyButton: React.FC<IButton> = ({
    label,
    leftIcon,
    bgColor = 'bg-white',
    addClass = '',
    ...buttonProps
}) => {
    return (
        <button
            className={`btn ${bgColor} ${addClass}`}
            {...buttonProps}
        >
            <div className="flex flex-row items-center justify-center space-x-1">
                {leftIcon && (
                    <div className="h-[24px] flex items-center">
                        {leftIcon}
                    </div>
                )}
                {label && <label className="cursor-pointer">{label}</label>}
            </div>
        </button>
    )
}

export default MyButton