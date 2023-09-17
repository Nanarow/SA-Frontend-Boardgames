import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'

const MyPagination = () => {
    return (
        <div className=" flex flex-row justify-between items-center border-2 border-black shadow-solid-m rounded px-2 py-1 mx-2 my-2">
            <button className='flex justify-center items-center w-6 h-6 text-center'><FaCaretLeft size={"22px"} className=" hover:scale-125 transition-transform" /></button>
            <button className='flex justify-center items-center w-6 h-6 text-center bg-black text-white rounded'>1</button>
            <button className='flex justify-center items-center w-6 h-6 text-center'>2</button>
            <button className='flex justify-center items-center w-6 h-6 text-center'>3</button>
            <div className='flex justify-center items-center w-6 h-6 text-center'>...</div>
            <button className='flex justify-center items-center w-6 h-6 text-center'>10</button>
            <button className='flex justify-center items-center w-6 h-6 text-center'><FaCaretRight size={"22px"} className=" hover:scale-125 transition-transform" /></button>
        </div>
    )
}

export default MyPagination