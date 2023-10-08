import React, { useRef } from 'react'
import DialogCloser from '../custom/DialogCloser';
import MyButton from '../custom/MyButton';
import MyInput from '../custom/MyInput';
import { useDialogCloser } from '../custom/MyDialog';
import { Boardgame } from '../../interfaces';
import { CreateBoardGame, UpdateBoardgame } from '../../services/boardgameRequest';
import { useMemberContext } from '../../contexts/MemberProvider';
import { useNavigate } from 'react-router-dom';

interface IBGForm {
    boardgame?: Boardgame
}

const BoardgameForm = ({ boardgame }: IBGForm) => {
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement | null>(null);
    const { member } = useMemberContext();
    const { setDialogOpen } = useDialogCloser()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            if (member) {
                if (boardgame) {
                    UpdateBoardgame(formData, boardgame)
                } else {
                    CreateBoardGame(formData)
                }
                setDialogOpen(false)
                navigate("/loading/boardgames")
            }
        }
    };



    return (
        <form className=" flex flex-col" ref={formRef} onSubmit={handleSubmit}>
            <div className="flex items-center ">
                <label className=" w-48">Title :</label>
                <div className=" grow">
                    <MyInput name='Title' placeholder='' required defaultValue={boardgame?.Title} />
                </div>
            </div>
            <div className="flex items-center ">
                <label className=" w-48">NumberOfPlayers :</label>
                <div className=" grow">
                    <MyInput name='NumberOfPlayers' placeholder='' required defaultValue={boardgame?.NumberOfPlayers} />
                </div>
            </div>
            <div className="flex items-center ">
                <label className=" w-48">MinAge :</label>
                <MyInput name='MinAge' placeholder='' type="number" required defaultValue={boardgame?.MinAge} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">PlayTime :</label>
                <MyInput name='PlayTime' placeholder='' type="number" required step={10} defaultValue={boardgame?.PlayTime} />
            </div>
            <div className="flex items-center ">
                <label className=" w-48">Category :</label>
                <div className=" grow">
                    <MyInput name='Category' placeholder='Card Game Fantasy Horror Humor Science Fiction' required defaultValue={boardgame?.Category} />
                </div>
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
                <label className=" w-48">Src :</label>
                <div className=" grow">
                    <MyInput name='SrcFile' placeholder='' type="file" accept="image/*" required={(boardgame) ? false : true} />
                </div>
            </div>
            {/* <label className=" ml-48 text-center">OR</label>
            <MyInput name='SrcLink' placeholder='https://www.gameology.com.au/cdn/shop/files/1e678_348x.progressive.jpg' type="url" className="ml-[196px]" /> */}
            <div className="flex items-center ">
                <label className=" w-48">Tutorial :</label>
                <div className=" grow">
                    <MyInput name='Tutorial' placeholder='https://youtu.be/7rgWdXy0H...' type="url" required defaultValue={boardgame?.Tutorial} />
                </div>
            </div>

            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label >cancel</label>
                </DialogCloser>
                <MyButton label="Submit" type="submit" />
            </div>
        </form>
    )
}

export default BoardgameForm