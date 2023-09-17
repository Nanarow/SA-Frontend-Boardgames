import MyInput from "./custom/MyInput"
import MyButton from "./custom/MyButton"
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RiLoaderLine } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";
import MyCheckbox from "./custom/MyCheckbox";
import MySlider from "./custom/MySlider";
import MyDialog from "./custom/MyDialog";
import TestDialog from "./TestDialog";
import MyRadioGroup from "./custom/MyRadioGroup";
import { useRef } from "react";
import { MyTooltip } from "./custom/MyTooltip";
const MyComponents = () => {
    const input = useRef<HTMLInputElement>(null);
    return (
        <div className="flex flex-col bg-[#ffffff] w-[25%] h-screen translate-x-[20px]">
            <MyInput type="date"></MyInput>
            <MyInput type="email" value={"test@example.com"} readOnly></MyInput>
            <MyInput type="number" placeholder="0"></MyInput>
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
            </div>
            <div className="flex flex-wrap">
                <MyCheckbox label="Accept terms and conditions." defaultChecked={true} />
                <MySlider />
            </div>
            <MyTooltip>
                <MyButton label="Submit" />
            </MyTooltip>
            <MyButton leftIcon={<RiLoaderLine />} />
            <MyDialog content={<TestDialog />} >
                <MyButton label="Open dialog" />
            </MyDialog>
            <MyRadioGroup items={["test1", "test2", "test3", "test4"]} defaultValue="test1" />
        </div >
    )
}

export default MyComponents