import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';

interface IRadioGroup extends RadioGroup.RadioGroupProps {
    items: string[]
    addClass?: string
}
const MyRadioGroup: React.FC<IRadioGroup> = ({
    items,
    addClass,
    ...radioGroupProps
}) => {
    return (
        <RadioGroup.Root
            className={`flex flex-row rounded m-2 border-2 border-black shadow-solid-m bg-white ${addClass}`}
            {...radioGroupProps}
        >
            {items.map((t, index) => {
                return (
                    <RadioGroup.Item
                        className='data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:border-2 data-[state=checked]:border-black p-2 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 rounded focus:z-10 focus:outline-none grow m-[2px] '
                        value={t} key={index}>
                        <label>{t}</label>
                    </RadioGroup.Item>
                )
            })}
        </RadioGroup.Root>
    )
}

export default MyRadioGroup