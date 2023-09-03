import { ButtonHTMLAttributes, } from 'react'
import { IconBaseProps, IconType } from "react-icons";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    leftIcon?: IconType;
    iconProps?: IconBaseProps;
    bgColor?: string;
    addClass?: string;
}
const MyButton = (props: IButton) => {
    return (
        <button className={`${props.addClass ?? ""} btn ${props.bgColor ?? " bg-white"}`} {...props}>
            <div className="flex flex-row items-center justify-center space-x-1 ">
                {props.leftIcon === undefined ? null :
                    (
                        <div className="h-[24px] flex items-center">
                            <props.leftIcon {...props.iconProps} />
                        </div>
                    )}
                {props.label === undefined ? null :
                    <label className=' cursor-pointer'>{props.label}</label>}
            </div>
        </button>
    )
}

export default MyButton