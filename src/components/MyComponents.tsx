import MyInput from "./MyInput"
import MyButton from "./MyButton"
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RiLoaderLine } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";
import MyCheckbox from "./MyCheckbox";
import MySlider from "./MySlider";
import MyDialog from "./MyDialog";
import TestDialog from "./TestDialog";
import MyRadioGroup from "./MyRadioGroup";
const MyComponents = () => {
    return (
        <div className="flex flex-col bg-[#ffffff] w-[25%] h-screen translate-x-[20px]">
            <MyInput type="date"></MyInput>
            <MyInput type="email" value={"test@example.com"} ></MyInput>
            <MyInput type="number" value={123}></MyInput>
            <MyInput type="password" placeholder="Password"></MyInput>
            <MyInput type="text" value="Hello world"></MyInput>
            <MyInput type="time"></MyInput>
            <MyInput type="text" value="disable" disabled></MyInput>
            <div className="flex flex-wrap items-center">
                <MyInput type="text" placeholder="Search" ></MyInput>
                <MyButton leftIcon={<FaMagnifyingGlass />} label="Search" />
                <MyButton label="Search" />
                <MyButton leftIcon={<FaMagnifyingGlass />} />
                <MyButton leftIcon={<BiLoaderCircle className="custom-loader" size="22px" />} />
                <MyButton leftIcon={<BiLoaderCircle className="custom-loader" size="22px" />} label="loading" />
                <MyButton label="Disable" disabled />
            </div>
            <div className="flex flex-wrap">
                <MyCheckbox label="Accept terms and conditions." defaultChecked={true} />
                <MySlider />
            </div>
            <MyButton label="Submit" />
            <MyButton leftIcon={<RiLoaderLine />} />
            <MyDialog content={<TestDialog />} >
                <MyButton label="Open dialog" />
            </MyDialog>
            <MyRadioGroup items={["test1", "test2", "test3", "test4"]} defaultValue="test1" />
        </div >
    )
}

export default MyComponents