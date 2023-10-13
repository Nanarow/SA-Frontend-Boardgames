import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import MyButton from '../custom/MyButton'
import MyCheckbox from '../custom/MyCheckbox'
import MyInput from '../custom/MyInput'
import MySlider from '../custom/MySlider'

const SideBar = () => {
    return (
        <aside className=' w-[20%] mt-0 ml-4 mr-4 mb-4 border-2 border-black my-sd rounded p-2'>
            <div className=" flex flex-row w-full">
                <MyInput className=' w-[80%]' placeholder="Search" />
                <MyButton leftIcon={<FaMagnifyingGlass />} />
            </div>
            <label className="m-2 text-lg font-semibold">Age (Year)</label>
            <MySlider min={6} max={100} defaultValue={12}></MySlider>
            <label className="m-2 text-lg font-semibold">Play Time (Minute)</label>
            <MySlider min={10} max={240} defaultValue={60}></MySlider>
            <label className="m-2 text-lg font-semibold">Number of players</label>
            <MySlider min={2} max={20} defaultValue={4}></MySlider>
            {/* <label className="m-2 text-lg font-semibold">Type Of Board Games</label>
            <MyCheckbox label="Engine Building " />
            <MyCheckbox label="Deck Building " />
            <MyCheckbox label="Worker Placement  " />
            <MyCheckbox label="Tile Placement " />
            <MyCheckbox label="Co-Op " />
            <MyCheckbox label="Social Deduction " />
            <MyCheckbox label="RPG " />
            <MyCheckbox label=" Without Dice" /> */}
        </aside>
    )
}

export default SideBar