import React, { useRef } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'
import { Base64ToUrl, ImageToBase64 } from '../../helper/utility';

interface PaymentProps {
    total: number
}

const PaymentForm: React.FC<PaymentProps> = ({ total }) => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const data = formData.get("upload")
            if (data instanceof File) {
                const base64 = await ImageToBase64(data)
                console.log(base64)
                console.log(Base64ToUrl(base64))
            }
            console.log(formData)
        }
    };
    return (
        <form className=" flex flex-col" ref={formRef}>
            <img src={QRcode} className=" h-64 object-contain"></img>
            <label>Total {total} ฿</label>
            <label>Upload slip</label>
            <MyInput type="file" name='upload' accept="image/*"></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyButton label="Submit" onClick={handleSubmit} />
                </DialogCloser>
            </div>
        </form>
    )
}

export default PaymentForm