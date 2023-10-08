import React, { useRef } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import { BoardgameCardProps } from './BoardgameCard'
import { useMemberContext } from '../../contexts/MemberProvider'
import { CreateGameBill } from '../../services/boardgameRequest'
import { useNavigate } from 'react-router-dom'

const RentForm: React.FC<BoardgameCardProps> = ({ boardgame }) => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext()
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if (formRef.current) {
            if (member) {
                const formData = new FormData(formRef.current);
                await CreateGameBill(formData, member, boardgame)
                navigate("/payment")
            }
        }
    };

    return (
        <form className=" flex flex-col" id='formTest' ref={formRef}>
            <label>Start date</label>
            <MyInput type="date" name='startDate'></MyInput>
            <label>End date</label>
            <MyInput type="date" name='endDate'></MyInput>
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

export default RentForm