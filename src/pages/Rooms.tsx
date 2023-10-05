import React, { useEffect, useState } from 'react'
import MyCheckbox from '../components/custom/MyCheckbox'
import MyButton from '../components/custom/MyButton'
import { RoomRequest } from '../services/roomRequest'
import { Room, RoomWithRoomType } from '../interfaces'


const roomRequest = new RoomRequest()
const Rooms = () => {
    const [rooms, setRooms] = useState<RoomWithRoomType[]>([])
    async function getAllRoom() {
        setRooms(await roomRequest.GetAllRoom())
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    return (
        <div className='flex flex-col items-center gap-8 justify-center'>
            <div className="flex flex-wrap gap-8 justify-center">
                {rooms.map((room, index) => (
                    <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative' key={index}>
                        <div className='flex flex-col'>
                            <label className=' text-3xl font-bold ml-12 mt-4'>{room.Name}</label>
                            <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ {room.RoomType.Capacity} คน</label>
                            <label className=' text-2xl font-semibold ml-16 mt-4'>{room.State}</label>
                            <label className=' text-2xl font-semibold ml-16 mt-4'>__.__</label>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <MyButton label='Reserve' />
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='flex flex-row gap-8 mt-[40px]'>
                <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                    <div className='flex flex-col'>
                        <label className=' text-3xl font-bold ml-12 mt-4'>{room.Name}</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ 6-8 คน</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>available</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>__.__</label>
                    </div>
                    <div className=' absolute bottom-2 right-2'>
                        <MyButton label='Reserve' />
                    </div>
                </div>
                <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                    <div className='flex flex-col'>
                        <label className=' text-3xl font-bold ml-12 mt-4'>M03</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ 6-8 คน</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>Unavailable</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>14.00-16.00 am</label>
                    </div>
                    <div className=' absolute bottom-2 right-2'>
                        <MyButton label='Reserve' />
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-8 '>
                <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                    <div className='flex flex-col'>
                        <label className=' text-3xl font-bold ml-12 mt-4'>M02</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ 6-8 คน</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>Unavailable</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>10.00-12.00 am</label>
                    </div>
                    <div className=' absolute bottom-2 right-2'>
                        <MyButton label='Reserve' />
                    </div>
                </div>
                <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                    <div className='flex flex-col'>
                        <label className=' text-3xl font-bold ml-12 mt-4'>M04</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ 6-8 คน</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>available</label>
                        <label className=' text-2xl font-semibold ml-16 mt-4'>__.__</label>
                    </div>
                    <div className=' absolute bottom-2 right-2'>
                        <MyButton label='Reserve' />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-16'>
                <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center'>
                    <label className=' text-2xl font-bold text-center'>S</label>
                </div>
                <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center shadow-solid-m -translate-x-[4px] -translate-y-[4px]'>
                    <label className=' text-2xl font-bold text-center'>M</label>
                </div>
                <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center'>
                    <label className=' text-2xl font-bold text-center'>L</label>
                </div>

            </div> */}

        </div>
    )
}

export default Rooms