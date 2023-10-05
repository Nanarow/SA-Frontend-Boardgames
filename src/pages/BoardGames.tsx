import React from 'react'
import MyCheckbox from '../components/custom/MyCheckbox'
import MyInput from '../components/custom/MyInput'
import MyButton from '../components/custom/MyButton'
import { FaCaretLeft, FaCaretRight, FaCircleQuestion, FaMagnifyingGlass, FaPlus, FaTrash } from 'react-icons/fa6'
import MySlider from '../components/custom/MySlider'
import MyDialog from '../components/custom/MyDialog'
import DialogCloser from '../components/custom/DialogCloser'
const array: number[] = [];

for (let index = 0; index < 10; index++) {
    array.push(index)
}

interface IBoard {
    role?: "user" | "admin";
}

const BoardGames: React.FC<IBoard> = ({ role = "user" }) => {
    return (
        <section className="flex flex-row h-full">
            <aside className=' w-[20%] h-[88%] mt-0 ml-4 mr-4 border-2 border-black my-sd rounded'>
                <div className=" flex flex-row w-full">
                    <MyInput className=' w-[80%]' placeholder="Search" />
                    <MyButton leftIcon={<FaMagnifyingGlass />} />
                </div>
                <label className="m-2 text-lg font-semibold">Age (Year)</label>
                <MySlider min={6} max={100} defaultValue={12}></MySlider>
                <label className="m-2 text-lg font-semibold">Play Time (Minute)</label>
                <MySlider min={5} max={240} defaultValue={60}></MySlider>
                <label className="m-2 text-lg font-semibold">Number of players</label>
                <MySlider min={2} max={20} defaultValue={4}></MySlider>
                <label className="m-2 text-lg font-semibold">Type Of Board Games</label>
                <MyCheckbox label="Engine Building " />
                <MyCheckbox label="Deck Building " />
                <MyCheckbox label="Worker Placement  " />
                <MyCheckbox label="Tile Placement " />
                <MyCheckbox label="Co-Op " />
                <MyCheckbox label="Social Deduction " />
                <MyCheckbox label="RPG " />
                <MyCheckbox label=" Without Dice" />
            </aside>
            <section className=' w-[80%] h-[91%]'>
                <div className=" h-[90%] flex flex-wrap gap-2 ml-2">
                    {array.map((v) => (
                        <div className=" w-[19%] h-[49%] border-2 border-black rounded shadow-solid-s relative" key={v}>
                            <img src="https://www.gameology.com.au/cdn/shop/products/8_a5e882b8-5842-4c06-8dd5-51c10fedf074_590x.progressive.jpg?v=1624577317"
                                className=' border-b-2 border-black h-1/2 object-contain w-full'></img>
                            <div className="flex flex-col">
                                <label className='ml-2 font-medium mb-4'>Title of boardgames</label>
                                <label className='ml-2 font-normal'>Player: 2-8</label>
                                <label className='ml-2 font-normal'>Type: Co-Op</label>
                                <label className='ml-2 font-normal'>Amount : 10</label>
                                <label className='ml-2 font-normal'>Price 10B </label>
                            </div>

                            <div className="flex items-center absolute top-1/2 right-0 mt-1 mr-1 cursor-pointer">
                                <FaCircleQuestion />
                            </div>
                            <div className=" absolute bottom-0 right-0">
                                <MyDialog content={<div className=" relative">
                                    <label className=' text-lg ml-2'>Start date</label>
                                    <MyInput type='date' />
                                    <label className=' text-lg ml-2'>End date</label>
                                    <MyInput type='date' />
                                    <div className=' flex justify-end'>
                                        <DialogCloser>
                                            <MyButton label="Rent" />
                                        </DialogCloser>
                                    </div>

                                </div>}>
                                    <MyButton label="Rent" />
                                </MyDialog>
                            </div>
                            {
                                (role === "admin") ?
                                    <MyDialog content={
                                        <div className=' flex justify-center items-center'>
                                            <DialogCloser>
                                                <label className=' text-lg mr-2 cursor-pointer'>cancel</label>
                                            </DialogCloser>
                                            <DialogCloser>
                                                <MyButton label='Delete' />
                                            </DialogCloser>
                                        </div>
                                    }>
                                        <div className="flex items-center absolute top-0 right-0 mt-1 mr-1 cursor-pointer">
                                            <FaTrash />
                                        </div>
                                    </MyDialog>
                                    : null
                            }
                        </div>
                    ))}
                </div>
                <div className=" h-[10%] flex flex-row justify-end relative items-center">
                    <MyButton leftIcon={<FaCaretLeft />} className=' h-[35.2px] w-[35.2px]' />
                    <div className="flex flex-row items-center">
                        <label className=" font-medium text-center text-lg mr-2 border-2 border-black h-[35.2px] w-[35.2px] rounded translate-y-[2px]">1</label>
                        <MyButton label='2' className='w-[36px]' />
                        <label className=" font-medium text-center text-lg ml-2 border-2 border-black h-[35.2px] w-[35.2px] rounded translate-y-[2px]">3</label>
                    </div>

                    <div className="mr-4">
                        <MyButton leftIcon={<FaCaretRight />} className=' h-[35.2px] w-[35.2px]' />
                    </div>
                    {
                        (role === "admin") ?
                            <div className="flex items-center absolute top-0 left-0 mt-1 mr-1 cursor-pointer">
                                <MyButton leftIcon={<FaPlus />} className=' h-[35.2px] w-[35.2px]' />
                            </div>
                            : null
                    }
                </div>
            </section>
        </section>
    )
}

export default BoardGames