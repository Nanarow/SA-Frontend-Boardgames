import React from 'react'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import { useNavigate } from 'react-router-dom'
import { DeleteBoardgame } from '../../services/boardgameRequest'

interface IConfirm {
    boardgameID: number
}

const ConfirmDelete = ({ boardgameID }: IConfirm) => {
    const navigate = useNavigate();
    async function handleConfirm() {
        await DeleteBoardgame(boardgameID)
        navigate("/loading/boardgames")
    }
    return (
        <div className="flex flex-col">
            <label className=" text-center text-4xl">Are you sure you want to delete this boardgame?
            </label>
            <div className="flex items-center justify-center">
                <DialogCloser>
                    <label className=" mr-8">cancel</label>
                </DialogCloser>
                <MyButton label="Delete" onClick={handleConfirm} className=" bg-red-500" />
            </div>
        </div>

    )
}

export default ConfirmDelete