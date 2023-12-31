import React, { useRef, useState } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import { useDialogCloser } from '../custom/MyDialog'
import { useMemberContext } from '../../contexts/MemberProvider'
import { RoomCardProps } from './RoomCard'
import { useNavigate } from 'react-router-dom'
import { CreateRoomBill } from '../../services/roomRequest'



const ReserveForm: React.FC<RoomCardProps> = ({ room }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext()
    const { setDialogOpen } = useDialogCloser()
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            if (member) {
                const formData = new FormData(formRef.current);
                await CreateRoomBill(formData, member, room)
                setDialogOpen(false)
                navigate("/payment")
            }
        }

    };

    return (
        <form className=" flex flex-col" ref={formRef} onSubmit={handleSubmit}>
            <label>Reserve date</label>
            <MyInput type="date" name='reserveDate' required></MyInput>
            <label>Start time</label>
            <MyInput type="time" name='startTime' required></MyInput>
            <label>Hour</label>
            <MyInput type="number" name='hour' required></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <MyButton label="Submit" type="submit" />
                {/* <MyDialog content={<PaymentForm roomBill={roomBill} />} disableCloser={true} open={open}>

                </MyDialog> */}
            </div>
        </form>
    )
}

export default ReserveForm