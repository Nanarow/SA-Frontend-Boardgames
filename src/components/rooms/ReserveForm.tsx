import React, { useRef, useState } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import PaymentForm from '../billing/PaymentForm'
import MyDialog from '../custom/MyDialog'
import { useMemberContext } from '../../contexts/MemberProvider'
import { RoomBillRequest } from '../../services/roomRequest'
import { RoomBill } from '../../interfaces'
import { RoomCardProps } from './RoomCard'

const roomBillRequest = new RoomBillRequest()
const ReserveForm: React.FC<RoomCardProps> = ({ room }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext()

    const [roomBill, setRoomBill] = useState<RoomBill>()


    async function createBill(formData: FormData) {
        if (member) {
            const roomBill: RoomBill = {
                RoomID: room.ID,
                StartTime: new Date(`${formData.get("reserveDate")} ${formData.get("startTime")}`),
                EndTime: new Date(`${formData.get("reserveDate")} ${formData.get("startTime")}`),
                Hour: Number(formData.get("hour")),
                MemberID: member.ID,
                Status: 'pending',
                Total: Number(formData.get("hour")) * room.RoomType.Price,
                Slip: '',
                PayAt: new Date()
            }
            setRoomBill(roomBill)
            console.log(roomBill)
            const newRoomBill = await roomBillRequest.CreateRoomBill(roomBill)
            console.log(newRoomBill)
        }
    }

    const handleSubmit = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            createBill(formData)
            //console.log(formData)
        }
    };

    return (
        <form className=" flex flex-col" ref={formRef}>
            <label>Reserve date</label>
            <MyInput type="date" name='reserveDate'></MyInput>
            <label>Start time</label>
            <MyInput type="time" name='startTime'></MyInput>
            <label>Hour</label>
            <MyInput type="number" name='hour'></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyDialog content={<PaymentForm total={(roomBill?.Total) ? roomBill.Total : 0} />} disableCloser={true}>
                        <MyButton label="Submit" onClick={handleSubmit} />
                    </MyDialog>
                    {/* <MyButton label="Submit" onClick={handleSubmit} /> */}
                </DialogCloser>
            </div>
        </form>
    )
}

export default ReserveForm