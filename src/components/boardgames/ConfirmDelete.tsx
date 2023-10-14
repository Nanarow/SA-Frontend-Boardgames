import React from 'react'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import { useNavigate } from 'react-router-dom'
import { DeleteBoardgame } from '../../services/boardgameRequest'
import { NotifyError } from '../custom/notify'
import { FaExclamationTriangle } from 'react-icons/fa'

interface IConfirm {
    boardgameID?: number
}

const ConfirmDelete = ({ boardgameID }: IConfirm) => {
    const navigate = useNavigate();
    async function handleConfirm() {
        if (boardgameID) {
            await DeleteBoardgame(boardgameID)
            navigate("/loading/boardgames")
        } else {
            NotifyError("Delete Failed")
        }
    }
    return (
        <div className="flex flex-col items-center">
            <FaExclamationTriangle size={50} className=" text-red-500" />

            <label className=" text-center text-4xl font-bold m-2">Delete Boardgame
            </label>
            <label className=" text-center text-base font-normal m-2 text-slate-800">Are you sure you want to delete this boardgame?
            </label>
            <div className="flex items-center justify-center">
                <DialogCloser>
                    <label className=" mr-8 text-slate-500">No, Keep it. </label>
                </DialogCloser>
                <MyButton label="Yes, Delete!" onClick={handleConfirm} className=" bg-red-500 text-white" />
            </div>
        </div>

    )
}

export default ConfirmDelete