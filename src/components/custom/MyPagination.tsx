import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

interface IPage {
    onValueChange?: (query: string, page: number) => void
    size?: number
    current?: number
    length?: number
    dataLength?: number
}

const MyPagination = ({ onValueChange, size = 10, current = 1, length = 999, dataLength = 10 }: IPage) => {

    const [page, setPage] = useState(current)

    function changePageTo(value: number) {
        setPage(prev => {
            const newPage = prev + value
            const offset = (newPage - 1) * size
            onValueChange && onValueChange(`limit=${size}&offset=${offset}`, newPage)
            return newPage
        })
    }
    const prev = page === 1
    const next = page === length || dataLength < size

    return (
        <div className=" flex flex-row justify-between items-center border-2 border-black shadow-solid-m rounded px-2 py-2 mx-2 my-2">
            <button className='flex justify-center items-center w-6 h-6 text-center' onClick={() => changePageTo(-1)} disabled={prev}><FaCaretLeft size={"22px"} className={` hover:scale-125 transition-transform ${prev ? " text-red-500" : ""}`} /></button>
            <button className='flex justify-center items-center w-6 h-6 text-center bg-black text-white rounded'>{page}</button>
            <div className='flex justify-center items-center w-6 h-6 text-center'>/</div>
            <button className='flex justify-center items-center w-6 h-6 text-center'>{length === 999 ? ". . ." : length}</button>
            <button className='flex justify-center items-center w-6 h-6 text-center' onClick={() => changePageTo(1)} disabled={next}><FaCaretRight size={"22px"} className={` hover:scale-125 transition-transform ${next ? " text-red-500" : ""}`} /></button>
        </div>
    )
}

export default MyPagination