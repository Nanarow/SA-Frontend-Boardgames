import { useEffect, useState } from 'react'
import { RoomRequest } from '../services/roomRequest'
import { RoomWithRoomType } from '../interfaces'
import RoomCard from '../components/rooms/RoomCard'


const roomRequest = new RoomRequest()
const Rooms = () => {
    const [rooms, setRooms] = useState<RoomWithRoomType[]>([])
    async function getAllRoom() {
        setRooms(await roomRequest.GetAllRoom("limit=4"))
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    return (
        <div className='flex flex-col items-center gap-8 justify-center'>
            <div className="flex flex-wrap gap-8 justify-center">
                {rooms.map((room, index) => (
                    <RoomCard room={room} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Rooms