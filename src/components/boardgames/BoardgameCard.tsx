import React from 'react'
import { Boardgame } from '../../interfaces'
import { FaBahtSign, FaCircleQuestion, FaClock, FaPen, FaTrash, FaUser } from 'react-icons/fa6'
import MyButton from '../custom/MyButton'
import MyDialog from '../custom/MyDialog'
import RentForm from './RentForm'
import ConfirmDelete from './ConfirmDelete'
import BoardgameForm from './BoardgameForm'
import { useMemberContext } from '../../contexts/MemberProvider'
import BoardgameDetails from './BoardgameDetails'

export interface BoardgameCardProps {
    boardgame: Boardgame
}

const BoardgameCard: React.FC<BoardgameCardProps> = ({ boardgame }) => {
    const { memberType } = useMemberContext()
    return (
        <div className=" w-[24%] h-1/2 border-2 border-black rounded shadow-solid-s relative " >
            <img src={boardgame.Source}
                className=' border-b-2 border-black h-1/2 object-contain w-full bg-white'></img>
            <div className="flex flex-col">
                <label className='ml-2 font-medium text-xl mb-2 truncate pr-8'>{boardgame.Title}</label>
                <div className=" flex items-center ml-2">
                    <FaUser size={14} />
                    <label className='ml-2 text-base text-zinc-700'>Player: {boardgame.NumberOfPlayers}</label>
                </div>
                <div className=" flex items-center ml-2">
                    <FaClock size={14} />
                    <label className='ml-2 text-sm text-zinc-700'>Play-Time: {boardgame.PlayTime} minutes</label>
                </div>
                <label className='ml-2 text-sm text-zinc-700'>Stock : {boardgame.QuantityInStock}</label>
                <div className="items-center ml-2 absolute bottom-1 left-1 flex">
                    <FaBahtSign />
                    <label className='ml-2 text-green-400 font-bold text-2xl '>{boardgame.RentalPrice}</label>
                </div>
            </div>

            <div className="flex items-center absolute top-1/2 right-0 mt-1 mr-1 cursor-pointer">
                <MyDialog content={<BoardgameDetails boardgame={boardgame} />} className="max-w-4xl" disableCloser>
                    <button>
                        <FaCircleQuestion />
                    </button>
                </MyDialog>

            </div>
            {memberType === "admin" ?
                <>
                    <MyDialog content={<ConfirmDelete boardgameID={boardgame.ID} />} disableCloser={true}>
                        <MyButton leftIcon={<FaTrash />} className=" absolute -top-1 -right-1 bg-red-500" />
                    </MyDialog>
                    <MyDialog content={<BoardgameForm boardgame={boardgame} />} className=" max-w-xl" disableCloser>
                        <MyButton leftIcon={<FaPen />} className=" absolute -bottom-1 -right-1 bg-yellow-300" />
                    </MyDialog>
                </> :
                (boardgame.QuantityInStock !== 0) ?
                    <MyDialog content={<RentForm boardgame={boardgame} />} disableCloser={true}>
                        <MyButton label="Rent" className=" absolute bottom-2 right-2 bg-[#FC7262] text-white" />
                    </MyDialog> :
                    null}
        </div>
    )
}

export default BoardgameCard