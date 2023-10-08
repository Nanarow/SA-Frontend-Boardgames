import React, { useEffect, useRef, useState } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'
import { useDialogCloser } from '../custom/MyDialog';
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
    const { setDialogOpen } = useDialogCloser()
    const { member } = useMemberContext()
    const [total, setTotal] = useState(0)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            if (member) {
                const formData = new FormData(formRef.current);
                if (roomBill) {
                    await UpdateRoomBill(formData, roomBill)
                    navigate("/loading/pending")
                }
                if (gameBill) {
                    await UpdateGameBill(formData, gameBill)
                    navigate("/loading/pending")
                }
                if (memberType) {
                    await CreateMemberBill(formData, member, memberType)
                    navigate("/loading/*")
                }
            }
        }
        setDialogOpen(false)
    };

    useEffect(() => {
        if (roomBill) {
            setTotal(roomBill.Total)
        }
        if (gameBill) {
            setTotal(gameBill.Total)
        }
        if (memberType) {
            console.log(memberType)
            setTotal(memberType.Price)
        }

    }, [])


    return (
        <form className=" flex flex-col" ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
            <img src={QRcode} className=" h-64 object-contain"></img>
            <label>Total {total} ฿</label>
            <label>Upload slip</label>
            <MyInput type="file" name='fileSlip' accept="image/*" required></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <MyButton label="Submit" type='submit' />
            </div>
        </form>
    )
}

export default PaymentForm