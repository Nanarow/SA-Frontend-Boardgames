import React, { useEffect, useState } from 'react'
import { RoomBill, RoomWithRoomType } from '../../interfaces'
import MyButton from '../custom/MyButton'
import MyDialog from '../custom/MyDialog'

import ReserveForm from './ReserveForm'
import { GetRoomBillByRoomID } from '../../services/roomRequest'
export interface RoomCardProps {
    room: RoomWithRoomType
}
const RoomCard = ({ room }: RoomCardProps) => {
    const [startTime, setStartTime] = useState("__.__")
    const [endTime, setEndTime] = useState("__.__")

    async function getTime() {
        const roomBill = await GetRoomBillByRoomID(room.ID)
        const h1 = new Date(roomBill.StartTime).getHours()
        const m1 = new Date(roomBill.StartTime).getMinutes().toString().padStart(2, '0')
        const h2 = new Date(roomBill.EndTime).getHours()
        const m2 = new Date(roomBill.StartTime).getMinutes().toString().padStart(2, '0')
        setStartTime(`${h1}:${m1}`)
        setEndTime(`${h2}:${m2}`)
    }

    useEffect(() => {

        if (room.State === "unavailable") {
            getTime()
        }
    }, [])

    return (
        <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative' >
            <img src={require(`../../assets/${room.RoomType.Image}.png`)} className=" object-contain h-full border-r-2 border-black"></img>
            <div className='flex flex-col absolute right-5 top-1'>
                <label className=' text-3xl font-bold ml-16 mt-4'>{room.Name}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>ห้องเล่นสำหรับ {room.RoomType.Capacity} คน</label>
                <label className={` text-2xl font-semibold ml-16 mt-4 ${(room.State === "available" ? "text-green-400" : " text-red-500")}`}>{room.State}</label>
                <label className=' text-2xl font-semibold ml-16 mt-4'>{startTime} - {endTime}</label>
            </div>
            {room.State === "available" ?
                <div className=' absolute bottom-2 right-2'>
                    <MyDialog content={<ReserveForm room={room} />} disableCloser={true}>
                        <MyButton label='Reserve' />
                    </MyDialog>
                </div> :
                null
            }
        </div>
    )
}
export default RoomCard





