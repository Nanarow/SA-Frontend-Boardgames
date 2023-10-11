import MyButton from './custom/MyButton'
import { FaHouseChimney, FaUser, FaWallet } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import MyMenu from './custom/MyMenu';
import { authRequired } from '../contexts/MemberProvider';

const NavBar = () => {
    const navigate = useNavigate();
    const onPageChange = (page: string) => {
        navigate(`/${page.toLowerCase().replace(/\s/g, "")}`);
    }
    if (!authRequired()) {
        return null
    }
    return (
        <nav className="  relative flex flex-row w-full h-16 items-center">
            <div className=' flex flex-row items-center ml-4  grow'>
                <FaHouseChimney size={"32px"} />
                <label className="ml-2 text-xl font-bold">House Of Board Games</label>
            </div>
            <div className=" grow">
                <MyMenu items={["Board Games", "Rooms", "Pricing"]} className=" w-[480px]" defaultValue="Board Games" onValueChange={(page) => onPageChange(page)} />
            </div>
            <div className="mx-4 grow flex flex-col">
                <MyButton leftIcon={<FaWallet />} className="max-w-[80px]" onClick={() => onPageChange("payment")} />
            </div>
            <div className="mx-4 grow flex flex-col">
                <MyButton leftIcon={<FaUser />} className="max-w-[80px]" onClick={() => onPageChange("profile")} />
            </div>
        </nav>
    )
}

export default NavBar