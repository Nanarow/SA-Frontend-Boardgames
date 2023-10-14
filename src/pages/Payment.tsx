import { useEffect, useState } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import { GameBill, MemberWithMemberType, RoomBill } from '../interfaces'
import { GetRoomBills } from '../services/roomRequest'
import { GetGameBills } from '../services/boardgameRequest'


const Payment = () => {
    const { member } = useMemberContext()
    const [roomBills, setRoomBills] = useState<RoomBill[]>([])
    const [gameBills, setGameBills] = useState<GameBill[]>([])
    async function getAllRoomBill(member: MemberWithMemberType) {
        setRoomBills(await GetRoomBills(`status=pending&mid=${member.ID}`))
    }
    async function getAllGameBill(member: MemberWithMemberType) {
        setGameBills(await GetGameBills(`status=pending&mid=${member.ID}`))
    }
    useEffect(() => {
        if (member) {
            getAllRoomBill(member)
            getAllGameBill(member)
        }
    }, [])


    return (
        <div className=" flex flex-row">
            <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
                <label className=" text-center">Boardgames Bill</label>
                {gameBills.map((bill, index) => (
                    (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
                        <label>Boardgame ID {bill.BoardgameID}</label>
                    </div>)
                ))}
            </div>
            <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
                <label className=" text-center">Room Bill</label>
                {roomBills.map((bill, index) => (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
                    <label>Room ID {bill.RoomID}</label>
                </div>))}

            </div>
        </div>

    )
}

export default Payment