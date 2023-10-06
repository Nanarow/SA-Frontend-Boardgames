import React, { useRef } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import QRcode from '../../assets/QRCode.jpg'

interface PaymentProps {
    total: number
}

const PaymentForm: React.FC<PaymentProps> = ({ total }) => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            console.log(formData)
        }
    };
    return (
        <form className=" flex flex-col" ref={formRef}>
            <img src={QRcode} className=" h-64 object-contain"></img>
            <label>Total{total}</label>
            <label>Upload slip</label>
            <MyInput type="file" name='upload sl.$'></MyInput>
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