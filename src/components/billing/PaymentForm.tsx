import React, { useEffect, useRef, useState } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'
import { useDialogCloser } from '../custom/MyDialog';
import { useMemberContext } from '../../contexts/MemberProvider';
import { Boardgame, MemberType, RoomBill } from '../../interfaces';
import { UpdateRoomBill } from './bills';
import { useNavigate } from 'react-router-dom';

interface PaymentProps {
    memberType?: MemberType
    boardgame?: Boardgame
    roomBill?: RoomBill

}

const PaymentForm: React.FC<PaymentProps> = ({ memberType, boardgame, roomBill }) => {
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
            }
        }
        setDialogOpen(false)
    };

    useEffect(() => {
        if (roomBill) {
            setTotal(roomBill.Total)
        }
    }, [])


    return (
        <form className=" flex flex-col" ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
            <img src={QRcode} className=" h-64 object-contain"></img>
            <label>Total {total} ฿</label>
            <label>Upload slip</label>
            <MyInput type="file" name='fileSlip' accept="image/*"></MyInput>
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