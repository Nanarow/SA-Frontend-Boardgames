import React, { ButtonHTMLAttributes, } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    leftIcon?: JSX.Element;
    bgColor?: string;
    addClass?: string;
}
const MyButton = React.forwardRef<HTMLButtonElement, IButton>(
    ({
        label,
        leftIcon,
        bgColor = 'bg-white',
        addClass = '',
        ...buttonProps
    }, ref) => {
        return (
            <button
                className={`btn ${bgColor} ${addClass}`}
                {...buttonProps}
                ref={ref}
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
)

export default MyButton