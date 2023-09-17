import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
interface ICheckbox extends Checkbox.CheckboxProps {
    label?: string;
    className?: string;
    markColor?: string;

}
const MyCheckbox: React.FC<ICheckbox> = ({
    label,
    className,
    markColor,
    ...checkBoxProps
}) => (
    <div className="flex flex-row items-center m-2">
        <Checkbox.Root
            className={twMerge("shadow-solid-s flex h-[20px] w-[20px] items-center justify-center rounded bg-white aria-checked:bg-white border-2 border-black transition-colors", className)}
            {...checkBoxProps}
        >
            <Checkbox.Indicator className=" flex items-center relative animate-scale-up">
                <FaCheck size="14px" color={markColor} />
            </Checkbox.Indicator>
        </Checkbox.Root>
        {label && <label className="pl-2" >{label}</label>}
    </div>
);

export default MyCheckbox;