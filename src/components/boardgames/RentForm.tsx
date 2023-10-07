import React, { useRef } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import { CreateGameBill } from '../billing/bills'
import { BoardgameCardProps } from './BoardgameCard'
import { useDialogCloser } from '../custom/MyDialog'
import { useMemberContext } from '../../contexts/MemberProvider'

const RentForm: React.FC<BoardgameCardProps> = ({ boardgame }) => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext()
    const { setDialogOpen } = useDialogCloser()

    const handleSubmit = async () => {
        if (formRef.current) {
            if (member) {
                const formData = new FormData(formRef.current);
                await CreateGameBill(formData, member, boardgame)
                setDialogOpen(false)
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