import { useEffect, useState } from 'react'
import MyButton from '../components/custom/MyButton'
import { RoomBillRequest } from '../services/roomRequest'
import { useMemberContext } from '../contexts/MemberProvider'
import { GameBill, RoomBill } from '../interfaces'
import { UpdateRoomBill } from '../components/billing/bills'
import MyDialog from '../components/custom/MyDialog'
import PaymentForm from '../components/billing/PaymentForm'
import { GameBillRequest } from '../services/boardgameRequest'

const Pending = () => {
    const { member } = useMemberContext()
    const roomBillRequest = new RoomBillRequest()
    const gameBillRequest = new GameBillRequest()
    const [roomBills, setRoomBills] = useState<RoomBill[]>([])
    const [gameBills, setGameBills] = useState<GameBill[]>([])
    const [open, setOpen] = useState(false)
    async function getAllRoomBill() {
        if (member) {
            setRoomBills(await roomBillRequest.GetRoomBills(`status=pending&mid=${member.ID}`))
        }
    }
    async function getAllGameBill() {
        if (member) {
            setGameBills(await gameBillRequest.GetGameBills(`status=pending&mid=${member.ID}`))
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
                {/* { }
                <label>{ }</label>
                <MyButton label="Pay" /> */}
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

export default Pending