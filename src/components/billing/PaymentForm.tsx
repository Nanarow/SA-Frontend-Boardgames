import React, { useRef } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'
import { useDialogCloser } from '../custom/MyDialog';
import { CreateMemberBill } from './bills';
import { useMemberContext } from '../../contexts/MemberProvider';
import { MemberType } from '../../interfaces';

interface PaymentProps {
    total: number
    memberType?: MemberType
}

const PaymentForm: React.FC<PaymentProps> = ({ total, memberType }) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { setDialogOpen } = useDialogCloser()
    const { member } = useMemberContext()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            if (member) {
                if (memberType) {
                    const formData = new FormData(formRef.current);
                    console.log(formData)
                    await CreateMemberBill(formData, member, memberType)
                } else {
                    console.log("type error")
                }
            } else {
                console.log("member error")
            }

        }
        // setDialogOpen(false)
    };
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