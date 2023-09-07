import React from 'react'
import NavBar from '../components/NavBar'
import MyButton from '../components/custom/MyButton'
const Rooms = () => {
    return (
        <main>
            <NavBar />
            <div className='flex flex-col items-center gap-8'>
                <div className='flex flex-row gap-8 mt-[40px]'>
                    <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                        <div className='flex flex-col'>
                            <label className=' text-3xl font-bold ml-12 mt-3.5'>M01</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>ห้องเล่นส ำหรับ 6-8 คน</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>available</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>__.__</label>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <MyButton label='Reserve' />
                        </div>
                    </div>
                    <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                        <div className='flex flex-col'>
                            <label className=' text-3xl font-bold ml-12 mt-3.5'>M03</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>ห้องเล่นส ำหรับ 6-8 คน</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>Unavailable</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>14.00-16.00 am</label>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <MyButton label='Reserve' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-8 '>
                    <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                        <div className='flex flex-col'>
                            <label className=' text-3xl font-bold ml-12 mt-3.5'>M02</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>ห้องเล่นส ำหรับ 6-8 คน</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>Unavailable</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>10.00-12.00 am</label>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <MyButton label='Reserve' />
                        </div>
                    </div>
                    <div className='w-[600px] h-[240px] rounded border-2 border-black shadow-solid-m relative'>
                        <div className='flex flex-col'>
                            <label className=' text-3xl font-bold ml-12 mt-3.5'>M04</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>ห้องเล่นส ำหรับ 6-8 คน</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>available</label>
                            <label className=' text-2xl font-semibold ml-16 mt-3.5'>__.__</label>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <MyButton label='Reserve' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-16'>
                    <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center'>
                        <label className=' text-2xl font-bold text-center'>S</label>
                    </div>
                    <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center shadow-solid-m -translate-x-[4px] -translate-y-[4px]'>
                        <label className=' text-2xl font-bold text-center'>M</label>
                    </div>
                    <div className='w-[120px] h-[56px] rounded-full border-2 border-black flex items-center justify-center'>
                        <label className=' text-2xl font-bold text-center'>L</label>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Rooms
