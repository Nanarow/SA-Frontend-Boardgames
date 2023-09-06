import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa6';
interface ICheckbox extends Checkbox.CheckboxProps {
    label?: string;
    bgColor?: string;
    addClass?: string;
    checkColor?: string;
    markColor?: string;
    size?: string;
}
const MyCheckbox: React.FC<ICheckbox> = ({
    label,
    bgColor,
    addClass,
    checkColor,
    markColor,
    size,
    ...checkBoxProps
}) => (
    <div className="flex flex-row items-center m-2">
        <Checkbox.Root
            className={`shadow-solid-s flex ${size ?? "h-[20px] w-[20px]"} items-center justify-center rounded ${bgColor ?? "bg-white"} border-2 border-black ${addClass} ${checkColor}`}
            {...checkBoxProps}

        >
            <Checkbox.Indicator >
                <FaCheck size={"14px"} color={markColor} />
            </Checkbox.Indicator>
        </Checkbox.Root>
        {label && <label className="pl-2" >{label}</label>}
    </div>
);

export default MyCheckbox;