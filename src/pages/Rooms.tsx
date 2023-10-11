import { useEffect, useState } from 'react'
import { RoomWithRoomType } from '../interfaces'
import RoomCard from '../components/rooms/RoomCard'
import { GetAllRoom } from '../services/roomRequest'
const Rooms = () => {
    const [roomList, setRoomList] = useState<RoomWithRoomType[]>([])
    async function getAllRoom() {
        setRoomList(await GetAllRoom("limit=4&offset=2"))
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    return (
        <div className='flex flex-col items-center gap-8 justify-center'>
            <div className="flex flex-wrap gap-8 justify-center">
                {roomList.map((room, index) => (
                    <RoomCard room={room} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Rooms