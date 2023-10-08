import { useEffect, useState } from 'react'
import MyButton from '../components/custom/MyButton'

import { useMemberContext } from '../contexts/MemberProvider'
import { GameBill, RoomBill } from '../interfaces'

import MyDialog from '../components/custom/MyDialog'
import PaymentForm from '../components/payment/PaymentForm'
import { GetRoomBills } from '../services/roomRequest'
import { GetGameBills } from '../services/boardgameRequest'


const Payment = () => {
    const { member } = useMemberContext()
    const [roomBills, setRoomBills] = useState<RoomBill[]>([])
    const [gameBills, setGameBills] = useState<GameBill[]>([])
    async function getAllRoomBill() {
        if (member) {
            setRoomBills(await GetRoomBills(`status=pending&mid=${member.ID}`))
        }
    }
    async function getAllGameBill() {
        if (member) {
            setGameBills(await GetGameBills(`status=pending&mid=${member.ID}`))
        }
    }
    useEffect(() => {
        getAllRoomBill()
        getAllGameBill()
    }, [])


    return (
        <div className=" flex flex-row">
            <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
                <label className=" text-center">Boardgames Bill</label>
                {gameBills.map((bill, index) => (
                    (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
                        <label>Boardgame ID {bill.BoardgameID}</label>
                        <MyDialog content={<PaymentForm gameBill={bill} />} disableCloser={true}>
                            <MyButton label="Pay" />
                        </MyDialog>

                    </div>)
                ))}
            </div>
            <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
                <label className=" text-center">Room Bill</label>
                {roomBills.map((bill, index) => (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
                    <label>Room ID {bill.RoomID}</label>
                    <MyDialog content={<PaymentForm roomBill={bill} />} disableCloser={true}>
                        <MyButton label="Pay" />
                    </MyDialog>

                </div>))}

            </div>
        </div>

    )
}

export default Payment