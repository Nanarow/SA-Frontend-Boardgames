import React, { useEffect, useState } from 'react'
import MyCheckbox from '../components/custom/MyCheckbox'
import MyButton from '../components/custom/MyButton'
import { MemberTypeRequest } from '../services/memberRequest'
import { MemberType } from '../interfaces'

const memberTypeRequest = new MemberTypeRequest()

const hList = ["h-[450px]", "h-[500px]", "h-[550px]"]

const Pricing = () => {
    const [memberTypeList, setMemberTypeList] = useState<MemberType[]>([])

    async function getAllPricing() {
        setMemberTypeList(await memberTypeRequest.GetAllMemberType())
    }

    useEffect(() => {
        getAllPricing()
    }, [])

    return (
        <div className='flex flex-row justify-center gap-16 mt-[50px]'>
            {memberTypeList.map((memberType, index) => (
                <div className={`bg-while w-[300px] ${hList[index]} border-4 border-black shadow-solid-l rounded relative `} key={index}>
                    <div className='flex flex-col justify-start '>
                        <label className=' text-center text-2xl mt-6'>{memberType.Name}</label>
                        <label className=' font-bold text-5xl my-16 text-center'>{memberType.Price == 0 ? "Free!" : `${memberType.Price}`} <label className=' text-sm font-medium'>/ month</label></label>
                        <div className=' self-start ml-2 mt-2'>
                            <MyCheckbox label={`เช่าบอร์ดเกมได้ ${memberType.MaxBoardgame} เกม/ครั้ง`} checked={true} />
                            <div className='mt-4'>
                                <MyCheckbox label={`จองห้องได้ไม่เกิน ${memberType.MaxRoomHour} ชั่วโมง/วัน`} checked={true} />
                            </div>
                        </div>
                        <div className=' absolute mt-[40px] bottom-7 left-1/2 -translate-x-[50%]'>
                            <MyButton label='Get Start' />
                        </div>
                    </div>
                </div>
            ))}

            {/* <div className='bg-while w-[300px] h-[500px] border-4 border-black shadow-solid-l rounded relative'>
                <div className='flex flex-col justify-start '>
                    <label className=' text-center text-2xl mt-6'>Sliver</label>
                    <label className=' font-bold text-5xl my-16 text-center'>199 ฿ <label className=' text-sm font-medium'>/ month</label></label>

                    <div className=' self-start ml-2 mt-2'>
                        <MyCheckbox label='เช่าบอร์ดเกมได้ 2-3 เกม/ครั้ง' checked={true} />
                        <div className='mt-4'>
                            <MyCheckbox label='จองห้องได้ไม่เกิน 6  ชั่วโมง/วัน' checked={true} />
                        </div>
                        <div className='mt-4'>
                            <MyCheckbox label='สะสมแต้มเพื่อแลกซื้อของในร้าน' checked={true} />
                        </div>


                    </div>
                    <div className=' absolute mt-[40px] bottom-7 left-1/2 -translate-x-[50%]'>
                        <MyButton label='Get Start' />
                    </div>
                </div>
            </div>
            <div className='bg-while w-[300px] h-[550px] border-4 border-black shadow-solid-l rounded relative'>
                <div className='flex flex-col justify-start '>
                    <label className=' text-center text-2xl mt-6'>Gold</label>
                    <label className=' font-bold text-5xl my-16 text-center'>259 ฿<label className=' text-sm font-medium'>/ month</label></label>
                    <div className=' self-start ml-2 mt-2'>
                        <div className='mt-4'>
                            <MyCheckbox label='เช่าบอร์ดเกมได้ 5-6 เกม/ครั้ง' checked={true} />
                        </div>
                        <div className='mt-4'>
                            <MyCheckbox label='จองห้องไม่เกิน 24 ชั่วโมง/วัน' checked={true} />
                        </div>
                        <div className='mt-4'>
                            <MyCheckbox label='สะสมแต้มเพื่อแลกซื้อของในร้าน' checked={true} />
                        </div>
                        <div className='mt-4'>
                            <MyCheckbox label='เล่นบอร์ดเกมใหม่ๆได้ก่อนใคร!!' checked={true} />
                        </div>

                    </div>
                    <div className=' absolute mt-[40px] bottom-7 left-1/2 -translate-x-[50%]'>
                        <MyButton label='Get Start' />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Pricing