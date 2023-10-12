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
    function isCheck(currentPath: string) {
        if (location.pathname === currentPath) {
            return "checked"
        }
        return "unchecked"
    }
    return (

        <div className={twMerge("flex flex-row rounded m-2 border-2 border-black shadow-solid-m bg-white p-[2px]", className)}>
            {items.map((item, index) => {
                return (
                    <RadioGroupItem
                        className='data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:border-2 data-[state=checked]:border-black flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 rounded focus:z-10 focus:outline-none grow hover:outline m-[2px]'
                        value={values[index]} key={index} data-state={isCheck(`/${values[index]}`)} >
                        <label className=" cursor-pointer">{item}</label>
                    </RadioGroupItem>
                )
            })}
        </div>
    )
}

export default MyMenu