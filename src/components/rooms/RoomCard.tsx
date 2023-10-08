import React, { useEffect, useState } from 'react'
import { RoomBill, RoomWithRoomType } from '../../interfaces'
import MyButton from '../custom/MyButton'
import MyDialog from '../custom/MyDialog'

import ReserveForm from './ReserveForm'
export interface RoomCardProps {
    room: RoomWithRoomType
}
const RoomCard = ({ room }: RoomCardProps) => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    async function test() {
        // if (room.State === "unavailable") {
        //     const roomBill = await getRoomBillByRoomID(room.ID)
        //     setStartTime(roomBill.StartTime)
        //     setEndTime(roomBill.EndTime)
        // }
    }
    return (
        <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative' >
            <div className='flex flex-col'>
                <label className=' text-3xl font-bold ml-12 mt-4'>{room.Name}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ {room.RoomType.Capacity} คน</label>
                <label className={` text-2xl font-semibold ml-16 mt-4 ${(room.State === "available" ? "text-green-400" : " text-red-500")}`}>{room.State}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>{(startTime) ? startTime : "__.__"} - {(endTime) ? endTime : "__.__"}</label>
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



function getRoomBillByRoomID(ID: number) {
    throw new Error('Function not implemented.')
}

