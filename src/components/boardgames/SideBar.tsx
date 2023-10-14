import React, { useRef, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import MyButton from '../custom/MyButton'
import MyCheckbox from '../custom/MyCheckbox'
import MyInput from '../custom/MyInput'
import MySlider from '../custom/MySlider'

interface SideBarPops {
    onValueCommit?: (query: string) => void;
}
interface IQuery {
    title?: string;
    age?: number;
    time?: number;
    min?: number;
    max?: number;
}
const SideBar = ({ onValueCommit }: SideBarPops) => {
    const searchRef = useRef<HTMLInputElement | null>(null)
    const [query, setQuery] = useState<IQuery>({
        title: '',
        age: 0,
        time: 0,
        min: 0,
        max: 0
    })

    function search() {
        if (searchRef.current) {
            const newQuery: IQuery = {
                ...query,
                title: searchRef.current.value
            }
            commit(newQuery)
        }
    }
    function clear() {
        if (searchRef.current) {
            if (searchRef.current.value === "") {
                const newQuery: IQuery = {
                    ...query,
                    title: ""
                }
                commit(newQuery)
            }
        }

    }
    function priceCommit(value: number[]) {
        const newQuery: IQuery = {
            ...query,
            min: value[0],
            max: value[1]
        }
        commit(newQuery)
    }
    function ageCommit(value: number[]) {
        const newQuery: IQuery = {
            ...query,
            age: value[0]
        }
        commit(newQuery)
    }
    function timeCommit(value: number[]) {
        const newQuery: IQuery = {
            ...query,
            time: value[0]
        }
        commit(newQuery)

    }
    function commit(newQuery: IQuery) {
        onValueCommit && onValueCommit(`title=${newQuery.title}&age=${newQuery.age}&time=${newQuery.time}&min=${newQuery.min}&max=${newQuery.max}`)
        setQuery(newQuery)
    }
    return (
        <aside className=' w-[20%] mt-0 ml-4 mr-4 mb-4 border-2 border-black my-sd rounded p-2'>
            <div className=" flex flex-row w-full">
                <MyInput className=' w-[80%]' placeholder="Search" ref={searchRef} onChange={clear} />
                <MyButton leftIcon={<FaMagnifyingGlass />} onClick={search} />
            </div>
            <label className="m-2 text-lg font-semibold">Age (years)</label>
            <MySlider min={6} max={100} defaultValue={[0]} onValueCommit={ageCommit}></MySlider>
            <label className="m-2 text-lg font-semibold">Play Time (minutes)</label>
            <MySlider min={10} max={240} defaultValue={[0]} onValueCommit={timeCommit} step={5}></MySlider>
            {/* <label className="m-2 text-lg font-semibold">Number of players</label>
            <MySlider min={2} max={20} defaultValue={[4]}></MySlider> */}
            <label className="m-2 text-lg font-semibold">Rental Price</label>
            <MySlider min={0} max={500} defaultValue={[0, 500]} minStepsBetweenThumbs={10} prefix='฿' onValueCommit={priceCommit}></MySlider>
            {/*<label className="m-2 text-lg font-semibold">Type Of Board Games</label>
            <MyCheckbox label="Engine Building " />
            <MyCheckbox label="Deck Building " />
            <MyCheckbox label="Worker Placement  " />
            <MyCheckbox label="Tile Placement " />
            <MyCheckbox label="Co-Op " />
            <MyCheckbox label="Social Deduction " />
            <MyCheckbox label="RPG " />
            <MyCheckbox label=" Without Dice" /> */}
        </aside>
    )
}

export default SideBar