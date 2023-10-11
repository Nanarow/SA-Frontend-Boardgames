import React, { useEffect, useState } from 'react'
import { Boardgame } from '../interfaces'
import BoardgameCard from '../components/boardgames/BoardgameCard'
import SideBar from '../components/boardgames/SideBar'
import { useMemberContext } from '../contexts/MemberProvider'
import MyButton from '../components/custom/MyButton'
import { FaPlus } from 'react-icons/fa6'
import MyDialog from '../components/custom/MyDialog'
import BoardgameForm from '../components/boardgames/BoardgameForm'
import { GetBoardgames } from '../services/boardgameRequest'



const BoardGames = () => {
    const { memberType } = useMemberContext()
    const [boardgameList, setBoardgameList] = useState<Boardgame[]>([])

    async function getAllBoardgame() {
        setBoardgameList(await GetBoardgames("limit=8&offset=20"))
    }

    useEffect(() => {
        getAllBoardgame()
    }, [])

    return (
        <section className="flex flex-row h-[calc(100%-64px)]">
            <SideBar />
            <section className=" w-[80%] ">
                <div className=" h-[90%] flex flex-wrap justify-start gap-x-2 gap-y-2 mb-2 p-2">
                    {boardgameList.map((boardgame, index) => <BoardgameCard boardgame={boardgame} key={index} />)}
                </div>
                {(memberType === "admin") ?
                    <MyDialog content={<BoardgameForm />} className=" max-w-2xl" disableCloser>
                        <MyButton leftIcon={<FaPlus />} className='mx-2 bg-green-400' />
                    </MyDialog>
                    : null}
            </section>
        </section>
    )
}

export default BoardGames