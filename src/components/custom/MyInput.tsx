import React, { forwardRef } from 'react'
import { InputHTMLAttributes } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    leftIcon?: JSX.Element
    state?: "error" | "normal";
    bgColor?: string;
    addClass?: string;
}

const MyInput = forwardRef<HTMLInputElement, IInput>(({
    error,
    leftIcon,
    state,
    bgColor = 'bg-white',
    addClass = '',
    ...inputProps
}, ref) => {
    return (
        <div className={`relative flex flex-row ${addClass}`}>
            <div className=" absolute left-4 top-[17px] flex items-center justify-center">
                {leftIcon}
            </div>
            <input
                {...inputProps}
                className={`input ${leftIcon ? "pl-7" : "pl-2"} pr-2 ${bgColor} ${addClass}`}
                ref={ref}
            />
            {/* <MyTooltip placement="right" title={error ?? "Error"} color={"#ff5050"}>
                
            </MyTooltip> */}
            <HiOutlineExclamationCircle
                className={`cursor-pointer absolute top-[18px] right-4 
                    ${state === "error" ? "" : "hidden"}`}
                color="var(--red)"
            />
        </div>
    );
})

export default MyInput;
