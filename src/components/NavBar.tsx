import MyButton from './custom/MyButton'
import { FaHouseChimney, FaUser } from 'react-icons/fa6'
import MyRadioGroup from './custom/MyRadioGroup'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const onPageChange = (page: string) => {
        navigate(`/${page.toLowerCase().replace(/\s/g, "")}`);
    }
    return (
        <nav className="  relative flex flex-row w-full h-16 items-center">
            <div className=' flex flex-row items-center ml-4  grow'>
                <FaHouseChimney size={"32px"} />
                <label className="ml-2 text-xl font-bold">House Of Board Games</label>
            </div>
            <div className=" grow">
                <MyRadioGroup items={["Board Games", "Rooms", "Recent", "Pricing"]} addClass=" w-[480px]" defaultValue="Board Games" onValueChange={(page) => onPageChange(page)} />
            </div>
            <div className="mx-4 grow flex flex-col">
                <MyButton leftIcon={<FaUser />} addClass="max-w-[80px]" />
            </div>
        </nav>
    )
}

export default NavBar