import React from 'react'
import { IRadioGroup, RadioGroup, RadioGroupItem } from './radixPrimitives'
import { twMerge } from 'tailwind-merge'


const MySelector = ({ items, values, className, ...radioGroupProps }: IRadioGroup) => {
    return (
        <RadioGroup className={twMerge(" flex justify-around items-center", className)} {...radioGroupProps}>
            {items.map((item, index) => (
                <RadioGroupItem key={index} value={values[index]} className={" rounded-full px-16 py-2 border-2 border-black mx-8 text-4xl font-medium shadow-solid-l aria-checked:translate-x-2  aria-checked:shadow-none aria-checked:translate-y-2 aria-checked:bg-sky-400"}>
                    {item}
                </RadioGroupItem>
            ))}
        </RadioGroup>
    )
}

export default MySelector