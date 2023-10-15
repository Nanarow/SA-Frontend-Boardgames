import React from 'react'
import { BoardgameCardProps } from './BoardgameCard'
import MyButton from '../custom/MyButton'
import DialogCloser from '../custom/DialogCloser'

const BoardgameDetailsList = ({ boardgame }: BoardgameCardProps) => {
    return (
        <div className="flex flex-col w-full items-end">
            <div className="flex w-full h-full">
                <div className="flex flex-col w-64 justify-between m-4">
                    <label>Title :</label>
                    <label>NumberOfPlayers :</label>
                    <label>MinAge :</label>
                    <label>PlayTime :</label>
                    <label>Category :</label>
                    <label>RentalPrice :</label>
                    <label>QuantityInStock :</label>
                    <label>QuantityInRental :</label>
                    <label>Deposit :</label>
                </div>
                <div className="flex flex-col justify-between w-full m-4">
                    <label>{boardgame.Title}</label>
                    <label>{boardgame.NumberOfPlayers}</label>
                    <label>{boardgame.MinimumAge}</label>
                    <label>{boardgame.PlayTime}</label>
                    <label>{boardgame.Category}</label>
                    <label>{boardgame.RentalPrice}</label>
                    <label>{boardgame.QuantityInStock}</label>
                    <label>{boardgame.QuantityInRental}</label>
                    <label>{boardgame.Deposit}</label>
                </div>
            </div>
            <DialogCloser>
                <MyButton label="Close"></MyButton>
            </DialogCloser>
        </div>
    )
}

export default BoardgameDetailsList