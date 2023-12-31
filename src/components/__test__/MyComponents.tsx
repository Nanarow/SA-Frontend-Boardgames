import MyInput from "../custom/MyInput"
import MyButton from "../custom/MyButton"
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RiLoaderLine } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";
import MyCheckbox from "../custom/MyCheckbox";
import MySlider from "../custom/MySlider";
import MyDialog from "../custom/MyDialog";
import TestDialog from "./TestDialog";

import { useRef } from "react";
import { MyTooltip } from "../custom/MyTooltip";
import MyToggleButton from "../custom/MyToggleButton";
import MyPagination from "../custom/MyPagination";
import MyMenu from "../custom/MyMenu";
import { Boardgame, Room } from "../../interfaces";


// const bg1: Boardgame = {
//     Title: "game mai na ja",
//     numberOfPlayers: "",
//     minAge: 8,
//     playTime: 0,
//     category: "",
//     rentalPrice: 0,
//     quantityInStock: 0,
//     quantityInRental: 0,
//     deposit: 0,
//     src: "",
//     tutorial: ""
// }
// const bg2: Boardgame = {
//     id: 4,
//     Title: "game 2 na ja",
//     numberOfPlayers: "",
//     minAge: 8,
//     playTime: 0,
//     category: "",
//     rentalPrice: 0,
//     quantityInStock: 0,
//     quantityInRental: 10,
//     deposit: 0,
//     src: "",
//     tutorial: ""
// }
async function handleGet() {

}

async function handleGetById(id: number) {

}

async function handleDelete(id: number) {

}

async function handleUpdate(data: Boardgame) {

}

async function handleCreate() {
    // BoardgameList.forEach(async (boardgame) => {
    //     const bg: Boardgame = await boardgameRequest.CreateBoardgame(boardgame);
    // })
}



const MyComponents = () => {
    const input = useRef<HTMLInputElement>(null);
    return (
        <div className="flex flex-row w-full h-screen gap-4 justify-center">
            <div className="flex flex-col bg-[#ffffff] w-[25%] h-screen ">
                <MyTooltip position="top">
                    <MyButton label="Submit" />
                </MyTooltip>
                <MyButton leftIcon={<RiLoaderLine className=" animate-spin" />} />
                <MyDialog content={<TestDialog />} >
                    <MyButton label="Open dialog" />
                </MyDialog>
                {/* <MyMenu items={["test1", "test2", "test3", "test4"]} values={["test1", "test2", "test3", "test4"]} className={""} /> */}
                <MyPagination />
                <MyButton label="Test Api delete" onClick={() => handleDelete(2)} />
                <MyButton label="Test Api get" onClick={handleGet} />
                <MyButton label="Test Api get by id" onClick={() => handleGetById(30)} />
                {/* <MyButton label="Test Api update" onClick={() => handleUpdate(bg2)} /> */}
                <MyButton label="Test Api create" onClick={() => handleCreate()} />
            </div>
            <div className="flex flex-col bg-[#ffffff] w-[25%] h-screen ">
                <MyInput type="date"></MyInput>
                <MyInput type="email" value={"test@example.com"} readOnly></MyInput>
                <MyInput type="number" defaultValue={0}></MyInput>
                <MyInput type="search" leftIcon={<FaMagnifyingGlass />}></MyInput>
                <MyInput type="password" placeholder="Password"></MyInput>
                <MyInput type="text" ref={input}></MyInput>
                <MyInput type="time"></MyInput>
                <MyInput type="text" value="disable" disabled readOnly></MyInput>
                <div className="flex flex-wrap items-center">
                    <MyInput type="text" placeholder="Search" ></MyInput>
                    <MyButton leftIcon={<FaMagnifyingGlass />} label="Search" />
                    <MyButton label="Search" onClick={() => console.log(input.current?.value)} />
                    <MyButton leftIcon={<FaMagnifyingGlass />} />
                    <MyButton leftIcon={<BiLoaderCircle className="" size="22px" />} />
                    <MyButton leftIcon={<BiLoaderCircle className="" size="22px" />} label="loading" />
                    <MyButton label="Disable" disabled />
                    <MyButton label="Test Api V2" />
                </div>
                <MyToggleButton label="Toggle" />
                <div className="flex flex-wrap">
                    <MyCheckbox label="Accept" defaultChecked={true} />
                    <MyCheckbox className=" bg-slate-500 aria-checked:bg-red-500 scale-125" markColor="white" />
                    <MySlider />
                </div>

            </div >
        </div>
    )
}

export default MyComponents