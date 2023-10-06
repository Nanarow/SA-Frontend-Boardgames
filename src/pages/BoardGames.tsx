import React, { useEffect, useState } from 'react'
import { BoardgameRequest } from '../services/boardgameRequest'
import { Boardgame } from '../interfaces'
import BoardgameCard from '../components/boardgames/BoardgameCard'
import SideBar from '../components/boardgames/SideBar'
import MyPagination from '../components/custom/MyPagination'


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
            <section className=" w-[80%] ">
                <div className=" h-[90%] flex flex-wrap mx-2 justify-between gap-y-2 mb-2">
                    {boardgameList.map((boardgame, index) => <BoardgameCard boardgame={boardgame} key={index} />)}
                </div>
                {/* <MyPagination /> */}
            </section>
        </section>
    )
}

export default BoardGames