import { InputHTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    leftIcon?: IconType;
    iconProps?: IconBaseProps;
    rightIcon?: IconType;
    state?: "error" | "normal";
    bgColor?: string;
    addClass?: string;
}

const MyInput = (props: IInput) => {
    return (
        <div className="relative flex flex-row">
            {props.leftIcon === undefined ? null : (
                <props.leftIcon className=" absolute left-4 top-[17px]" {...props.iconProps} />
            )}
            <input
                {...props}
                className={`input ${props.leftIcon === undefined ? "pl-2" : "pl-7"} ${props.rightIcon === undefined ? "pr-2" : "pr-7"
                    } ${props.bgColor ?? "bg-[#ffffff]"} ${props.addClass} grow`}
            />
            <Tooltip placement="right" title={props.error ?? "Error"} color={"#ff5050"}>
                <HiOutlineExclamationCircle className={`cursor-pointer absolute top-[18px] right-4 ${props.state === "error" ? "" : "hidden"}`} color='var(--red)' />
            </Tooltip>
            {props.rightIcon === undefined ? null : (
                <props.rightIcon className=" absolute right-10 top-[18px]" {...props.iconProps} />
            )}
        </div>
    );
};

export default MyInput;
