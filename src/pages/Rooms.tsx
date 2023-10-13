import { useEffect, useState } from 'react'
import { RoomWithRoomType } from '../interfaces'
import RoomCard from '../components/rooms/RoomCard'
import { GetAllRoom } from '../services/roomRequest'
import MySelector from '../components/custom/MySelector'
const Rooms = () => {
    const [roomList, setRoomList] = useState<RoomWithRoomType[]>([])
    async function getAllRoom() {
        setRoomList(await GetAllRoom("limit=4&size=1"))
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    async function getRooms(size: string) {
        setRoomList(await GetAllRoom(`limit=4&size=${size}`))
    }

    return (
        <div className='flex flex-col items-center py-4 justify-between h-[calc(100%-80px)]'>
            <div className="flex flex-wrap gap-8 justify-center">
                {roomList.map((room, index) => (
                    <RoomCard room={room} key={index} />
                ))}
            </div>
            <MySelector items={["S", "M", "L"]} values={["1", "2", "3"]} onValueChange={getRooms} defaultValue='1' className=" mb-6" />
        </div>
    )
}

export default Rooms