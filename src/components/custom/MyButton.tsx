import { ButtonHTMLAttributes, forwardRef, } from 'react'
import { twMerge } from 'tailwind-merge';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    leftIcon?: JSX.Element;
}
export const buttonAnimation = "enabled:active:translate-x-[2px] enabled:active:translate-y-[2px] transition duration-100 enabled:active:shadow-none enabled:hover:scale-110 disabled:opacity-50 "
const classBase = "cursor-pointer rounded shadow-solid-s border-2 border-black px-2 py-1 flex flex-row justify-center items-center gap-1 mx-1 my-1 "
const MyButton = forwardRef<HTMLButtonElement, IButton>(
    ({
        label,
        leftIcon,
        className = "",
        ...buttonProps
    }, ref) => {

        return (
            <button
                className={twMerge("", classBase, buttonAnimation, className)}
                {...buttonProps}
                ref={ref}
            >
                {leftIcon && <span className="w-6 h-6 flex justify-center items-center">{leftIcon}</span>}
                {label}
            </button>
        )
    }
)

export default MyButton