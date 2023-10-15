import React, { useState } from 'react'
import { BoardgameCardProps } from './BoardgameCard'
import BoardgameForm, { IBGForm } from './BoardgameForm'
import { urlToEmbed } from '../../helper/utility'
import BoardgameDetailsList from './BoardgameDetailsList'

const BoardgameDetails = ({ boardgame }: BoardgameCardProps) => {
    return (
        <div className=" flex w-full h-full">
            <div className="flex flex-col w-full mr-4 items-center">
                <label className=" text-center">Image</label>
                <img src={boardgame?.Source} className=" m-2 border-2 border-black rounded object-contain w-full h-[200px]"></img>
                <label className=" text-center">Tutorial</label>
                <iframe src={urlToEmbed((boardgame) ? boardgame.Tutorial : "https://www.youtube.com/watch?v=dQw4w9WgXcQ")} className=" m-2 border-2 border-black rounded w-full h-[200px]" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div >
            <BoardgameDetailsList boardgame={boardgame!}></BoardgameDetailsList>
        </div>
    )
}

export default BoardgameDetails