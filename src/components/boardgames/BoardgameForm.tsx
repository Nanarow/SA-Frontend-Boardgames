import React, { useRef } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import { Boardgame } from '../../interfaces';
import { CreateBoardGame, UpdateBoardgame } from '../../services/boardgameRequest';
import { useMemberContext } from '../../contexts/MemberProvider';
import { useNavigate } from 'react-router-dom';

export interface IBGForm {
    boardgame?: Boardgame
}

const BoardgameForm = ({ boardgame }: IBGForm) => {
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            if (member) {
                if (boardgame) {
                    await UpdateBoardgame(formData, boardgame)
                } else {
                    await CreateBoardGame(formData)
                }
                navigate("/loading/boardgames")
            }
        }
    };



    return (
        <form className=" flex flex-col w-full" ref={formRef} onSubmit={handleSubmit}>
            <div className="flex items-center ">
                <label className=" w-48">Title :</label>
                <MyInput name='Title' placeholder='' required defaultValue={boardgame?.Title} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">NumberOfPlayers :</label>
                <MyInput name='NumberOfPlayers' placeholder='' required defaultValue={boardgame?.NumberOfPlayers} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">MinimumAge :</label>
                <MyInput name='MinAge' placeholder='' type="number" required defaultValue={boardgame?.MinimumAge} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">PlayTime :</label>
                <MyInput name='PlayTime' placeholder='' type="number" required step={10} defaultValue={boardgame?.PlayTime} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">Category :</label>
                <MyInput name='Category' placeholder='Card Game Fantasy Horror Humor Science Fiction' required defaultValue={boardgame?.Category} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">RentalPrice :</label>
                <MyInput name='RentalPrice' placeholder='' type="number" required defaultValue={boardgame?.RentalPrice} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">QuantityInStock :</label>
                <MyInput name='QuantityInStock' placeholder='' type="number" required defaultValue={boardgame?.QuantityInStock} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">QuantityInRental :</label>
                <MyInput name='QuantityInRental' placeholder='' type="number" required defaultValue={boardgame?.QuantityInRental} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">Deposit :</label>
                <MyInput name='Deposit' placeholder='' type="number" required defaultValue={boardgame?.Deposit} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">Source :</label>
                <MyInput name='SrcFile' type="file" accept="image/*" required={(boardgame) ? false : true} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">Tutorial :</label>
                <MyInput name='Tutorial' placeholder='https://youtu.be/7rgWdXy0H...' type="url" required defaultValue={boardgame?.Tutorial} />
            </div>

            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label className=" text-slate-500">cancel</label>
                </DialogCloser>
                <MyButton label={(boardgame) ? "Update" : "Add"} type="submit" className=" bg-green-400" />
            </div>
        </form>
    )
}

export default BoardgameForm