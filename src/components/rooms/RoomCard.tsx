import React, { useEffect } from 'react'
import { Room, RoomWithRoomType } from '../../interfaces'
import { FaCircleQuestion } from 'react-icons/fa6'
import MyButton from '../custom/MyButton'
import MyDialog from '../custom/MyDialog'

import ReserveForm from './ReserveForm'
export interface RoomCardProps {
    room: RoomWithRoomType
}
const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative' >
            <div className='flex flex-col'>
                <label className=' text-3xl font-bold ml-12 mt-4'>{room.Name}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ {room.RoomType.Capacity} คน</label>
                <label className={` text-2xl font-semibold ml-16 mt-4 ${(room.State == "available" ? "text-green-400" : " text-red-500")}`}>{room.State}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>__.__</label>
            </div>
            <div className=' absolute bottom-2 right-2'>
                <MyDialog content={<ReserveForm room={room} />} disableCloser={true}>
                    <MyButton label='Reserve' />
                </MyDialog>

            </div>
        </div>
    )
}
export default RoomCard