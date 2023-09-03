
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RiLoaderLine } from "react-icons/ri";
import { BiLoaderCircle } from "react-icons/bi";
import MyInput from './custom/MyInput';
import MyButton from './custom/MyButton';
import MyCheckbox from './custom/MyCheckbox';
import MySlider from './custom/MySlider';
import MyDialog from './custom/MyDialog';
import MyToggleGroup from './custom/MyToggleGroup';

const MyComponents = () => {
    return (
        <div className="flex flex-col bg-[#ffffff] w-full h-screen">
            <MyInput type="date"></MyInput>
            <MyInput type="email" value={"test@example.com"} ></MyInput>
            <MyInput type="number" value={123}></MyInput>
            <MyInput type="password" placeholder="Password"></MyInput>
            <MyInput type="text" value="Hello world"></MyInput>
            <MyInput type="time"></MyInput>
            <MyInput type="text" value="disable" disabled></MyInput>
            <div className="flex flex-row items-center">

                <MyInput type="text" placeholder="Search" ></MyInput>
                <MyButton leftIcon={FaMagnifyingGlass} label="Search" />
                <MyButton label="Search" />
                <MyButton leftIcon={FaMagnifyingGlass} />
                <MyButton leftIcon={BiLoaderCircle} iconProps={{ className: "custom-loader", size: "22px" }} />
                <MyButton leftIcon={BiLoaderCircle} iconProps={{ className: "custom-loader", size: "22px" }} label="loading" />
                <MyButton label="Disable" disabled />
            </div>
            <div className="flex flex-row">
                <MyCheckbox label="Accept terms and conditions." defaultChecked={true} />
                <MySlider />
            </div>
            {/* <MyCheckbox label="Accept terms and conditions." checkColor="aria-checked:bg-[#0eaedb]" bgColor="bg-[#dc7dff]" markColor="black" /> */}
            <MyButton label="Submit" />
            <MyButton leftIcon={RiLoaderLine} />
            <MyDialog content={<label>Hello World !!!</label>} >
                <MyButton label="Open dialog" />
            </MyDialog>
            <MyToggleGroup items={["test1", "test2", "test3", "test4"]} defaultValue="test1" />


        </div >
    )
}

export default MyComponents