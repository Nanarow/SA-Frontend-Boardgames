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
import MyPagination from '../components/custom/MyPagination'



const BoardGames = () => {
    const { memberType } = useMemberContext()
    const [boardgameList, setBoardgameList] = useState<Boardgame[]>([])
    const [pageQuery, setPageQuery] = useState("")
    const [filterQuery, setFilterQuery] = useState("")
    const [page, setPage] = useState(1)

    async function getAllBoardgame() {
        setBoardgameList(await GetBoardgames("limit=8&offset=0"))
        setPageQuery("limit=8&offset=0")
    }

    useEffect(() => {
        getAllBoardgame()
    }, [])

    async function pageChange(query: string, page: number) {
        setPage(page)
        setPageQuery(query)
        setBoardgameList(await GetBoardgames(`${query}&${filterQuery}`))
    }
    async function commitValue(query: string) {
        setPage(1)
        setFilterQuery(query)
        setBoardgameList(await GetBoardgames(`limit=8&offset=0&${query}`))
    }

    return (
        <section className="flex flex-row h-[calc(100%-80px)]">
            <SideBar onValueCommit={commitValue} />
            <section className=" w-[80%] ">
                <div className=" h-[90%] flex flex-wrap justify-start gap-x-2 gap-y-2 mb-2 p-2">
                    {boardgameList.map((boardgame, index) => <BoardgameCard boardgame={boardgame} key={index} />)}
                </div>
                <div className="flex justify-between items-center">
                    {(memberType === "admin") ?
                        <MyDialog content={<BoardgameForm />} className=" max-w-2xl" disableCloser>
                            <MyButton leftIcon={<FaPlus />} className='mx-2 bg-green-400' />
                        </MyDialog>
                        : null}
                    <MyPagination onValueChange={pageChange} size={8} dataLength={boardgameList.length} current={page} />
                </div>
            </section>
        </section>
    )
}

export default BoardGames