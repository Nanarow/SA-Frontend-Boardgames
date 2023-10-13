import React from 'react'
import { twMerge } from 'tailwind-merge';
import { IRadioGroup } from './radixPrimitives';
import { RadioGroupItem } from '@radix-ui/react-radio-group';



const MyMenu: React.FC<IRadioGroup> = ({
    items,
    values,
    className
}) => {
    const location = window.location
    function isActive(page: string) {
        if (`/${page}` === location.pathname) {
            return "checked"
        }
        return "unchecked"
    }
    return (

        <div className={twMerge("flex flex-row rounded-full m-2 border-2 border-black shadow-solid-m bg-white p-[2px] h-12 items-center", className)}>
            {items.map((item, index) => {
                return (
                    <RadioGroupItem
                        className='data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:border-2 data-[state=checked]:border-black flex items-center justify-center bg-white text-base leading-4 focus:z-10 focus:outline-none grow hover:outline-dotted -outline-offset-4 h-full w-full menu-item '
                        value={values[index]} key={index} data-state={isActive(values[index])}>
                        <label className=" cursor-pointer">{item}</label>
                    </RadioGroupItem>
                )
            })}
        </div>
    )
}

export default MyMenu