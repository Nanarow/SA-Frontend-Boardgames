import { InputHTMLAttributes, forwardRef } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { MyTooltip } from "./MyTooltip";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    errorMsg?: string;
    leftIcon?: JSX.Element
    state?: "error" | "normal";
    addClass?: string;
}

const MyInput = forwardRef<HTMLInputElement, IInput>(({
    errorMsg,
    leftIcon,
    state = "normal",
    className = '',
    ...inputProps
}, ref) => {
    return (
        <div className="flex flex-row items-center relative">
            {leftIcon && <span className="absolute w-6 h-6 flex items-center justify-center ml-2">{leftIcon}</span>}
            <input className={twMerge("rounded shadow-solid-s border-2 focus:outline-none focus:border-sky-500 py-1 mx-1 my-1 pl-2 pr-2 max-w-m-1 grow",
                className, leftIcon && "pl-7",
                (state === "error" ? "border-red-500" : "border-black"))}
                {...inputProps}
                ref={ref}>
            </input>
            {((inputProps.type === "email" || inputProps.type === "password") && state === "error") ?
                <MyTooltip className=" bg-red-600" label={errorMsg}>
                    <span className="absolute w-6 h-6 flex items-center justify-center right-0 mr-2"><HiOutlineExclamationCircle color="red" /></span>
                </MyTooltip> : null}
        </div>
    );
})

export default MyInput;
