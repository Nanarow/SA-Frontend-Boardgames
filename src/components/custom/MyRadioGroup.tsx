import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

interface IRadioGroup extends RadioGroup.RadioGroupProps {
    items: string[]
    className?: string
}
const MyRadioGroup: React.FC<IRadioGroup> = ({
    items,
    className,
    ...radioGroupProps
}) => {
    return (
        <RadioGroup.Root
            className={twMerge("flex flex-row rounded m-2 border-2 border-black shadow-solid-m bg-white", className)}
            {...radioGroupProps}
        >
            {items.map((item, index) => {
                return (
                    <RadioGroup.Item
                        className='data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:border-2 data-[state=checked]:border-black p-2 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 rounded focus:z-10 focus:outline-none grow m-[2px] '
                        value={item} key={index}>
                        <label>{item}</label>
                    </RadioGroup.Item>
                )
            })}
        </RadioGroup.Root>
    )
}

export default MyRadioGroup