import React, { useEffect, useState } from 'react'
import MyButton from '../components/custom/MyButton'
import { FaCaretLeft, FaCaretRight, FaPlus, } from 'react-icons/fa6'
import { BoardgameRequest } from '../services/boardgameRequest'
import { Boardgame } from '../interfaces'
import BoardgameCard from '../components/boardgames/BoardgameCard'
import SideBar from '../components/boardgames/SideBar'


const boardgameRequest = new BoardgameRequest()
interface IBoard {
    role?: "user" | "admin";
}

const BoardGames: React.FC<IBoard> = ({ role = "user" }) => {
    const [boardgameList, setBoardgameList] = useState<Boardgame[]>([])

    async function getAll() {
        setBoardgameList(await boardgameRequest.GetBoardgames("limit=8"))
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <section className="flex flex-row h-[calc(100%-64px)]">
            <SideBar />
            <section className=' w-[80%] mb-2'>
                <div className=" h-[90%] flex flex-wrap gap-2 ml-2">
                    {boardgameList.map((boardgame, index) => <BoardgameCard boardgame={boardgame} key={index} />)}
                </div>
                <div className=" h-[10%] flex flex-row justify-end relative items-center">
                    <MyButton leftIcon={<FaCaretLeft />} className=' h-[35.2px] w-[35.2px]' />
                    <div className="flex flex-row items-center">
                        <label className=" font-medium text-center text-lg mr-2 border-2 border-black h-[35.2px] w-[35.2px] rounded translate-y-[2px]">1</label>
                        <MyButton label='2' className='w-[36px]' />
                        <label className=" font-medium text-center text-lg ml-2 border-2 border-black h-[35.2px] w-[35.2px] rounded translate-y-[2px]">3</label>
                    </div>

                    <div className="mr-4">
                        <MyButton leftIcon={<FaCaretRight />} className=' h-[35.2px] w-[35.2px]' />
                    </div>
                    {
                        (role === "admin") ?
                            <div className="flex items-center absolute top-0 left-0 mt-1 mr-1 cursor-pointer">
                                <MyButton leftIcon={<FaPlus />} className=' h-[35.2px] w-[35.2px]' />
                            </div>
                            : null
                    }
                </div>
            </section>
        </section>
    )
}

export default BoardGames