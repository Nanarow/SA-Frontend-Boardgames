import React, { useEffect } from 'react'
import { Boardgame } from '../../interfaces'
import { FaCircleQuestion, FaTrash } from 'react-icons/fa6'
import MyButton from '../custom/MyButton'
import MyDialog from '../custom/MyDialog'
import RentForm from './RentForm'

interface BoardgameCardProps {
    boardgame: Boardgame
}

const BoardgameCard: React.FC<BoardgameCardProps> = ({ boardgame }) => {
    return (
        <div className=" w-[24%] h-1/2 border-2 border-black rounded shadow-solid-s relative" >
            <img src={boardgame.Src}
                className=' border-b-2 border-black h-1/2 object-contain w-full'></img>
            <div className="flex flex-col">
                <label className='ml-2 font-medium mb-4 truncate pr-8'>{boardgame.Title}</label>
                <label className='ml-2 font-normal'>Player: {boardgame.NumberOfPlayers}</label>
                <label className='ml-2 font-normal truncate'>Category: {boardgame.Category}</label>
                <label className='ml-2 font-normal'>Amount : {boardgame.QuantityInStock}</label>
                <label className='ml-2 font-normal'>Price {boardgame.RentalPrice}฿ </label>
            </div>

            <div className="flex items-center absolute top-1/2 right-0 mt-1 mr-1 cursor-pointer">
                <FaCircleQuestion />
            </div>

            <MyDialog content={<RentForm />} disableCloser={true}>
                <MyButton label="Rent" className=" absolute bottom-2 right-2" />
            </MyDialog>


        </div>
    )
}

export default BoardgameCard