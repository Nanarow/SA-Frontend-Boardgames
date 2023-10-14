import React, { useEffect, useRef, useState } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'
import { useMemberContext } from '../../contexts/MemberProvider';
import { GameBill, MemberType, RoomBill } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { UpdateRoomBill } from '../../services/roomRequest';
import { UpdateGameBill } from '../../services/boardgameRequest';
import { CreateMemberBill } from '../../services/memberRequest';

interface PaymentProps {
    roomBill?: RoomBill
    gameBill?: GameBill
    memberType?: MemberType

}

const PaymentForm: React.FC<PaymentProps> = ({ roomBill, gameBill, memberType }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { member, setMember } = useMemberContext()
    const [total, setTotal] = useState(0)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            if (member) {
                const formData = new FormData(formRef.current);
                if (roomBill) {
                    await UpdateRoomBill(formData, roomBill)
                    navigate("/loading/payment")
                }
                if (gameBill) {
                    await UpdateGameBill(formData, gameBill)
                    navigate("/loading/payment")
                }
                if (memberType) {
                    const newMember = await CreateMemberBill(formData, member, memberType)
                    if (newMember) {
                        setMember(newMember)
                    }
                    navigate("/loading/pricing")
                }
            }
        }
    };

    useEffect(() => {
        if (roomBill) {
            setTotal(roomBill.Total)
        }
        if (gameBill) {
            setTotal(gameBill.Total)
        }
        if (memberType) {
            setTotal(memberType.Price)
        }
    }, [])


    return (
        <form className=" flex flex-col" ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
            <img src={QRcode} className=" h-64 object-contain"></img>
            <label className=" text-center text-xl font-bold">Total <span className=" text-red-500">{total}</span> ฿</label>
            <label className=" text-center">Upload slip</label>
            <MyInput type="file" name='fileSlip' accept="image/*" required></MyInput>
            <div className="flex items-center justify-between gap-4">
                <DialogCloser>
                    <label className=' text-slate-500 ml-2'>cancel</label>
                </DialogCloser>
                <MyButton label="Confirm Payment!" type='submit' className=" bg-green-400 text-white" />
            </div>
        </form>
    )
}

export default PaymentForm