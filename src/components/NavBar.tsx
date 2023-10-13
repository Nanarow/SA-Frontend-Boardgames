import { buttonAnimation } from './custom/MyButton'
import { FaUser, FaWallet } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import MyMenu from './custom/MyMenu';
import { authRequired } from '../contexts/MemberProvider';
import { RadioGroup, RadioGroupItem } from './custom/radixPrimitives';

const NavBar = () => {
    const navigate = useNavigate();

    const menus = ["Board Games", "Rooms", "Pricing"]
    const paths = ["boardgames", "rooms", "pricing"]
    const onPageChange = (page: string) => {
        navigate(`/${page}`);
    }

    if (!authRequired()) {
        return null;
    }

    return (
        <nav>
            <RadioGroup
                className="relative flex flex-row w-full h-20 items-center justify-center"
                onValueChange={(page) => onPageChange(page)}
                defaultValue='boardgames'
            >
                <RadioGroupItem value='boardgames' className=" absolute left-8 ">
                    <label className=" font-medium text-xl cursor-pointer">House Of Board Games</label>
                </RadioGroupItem>
                <MyMenu
                    items={menus}
                    values={paths}
                    className=" w-[480px]"
                />

                <RadioGroupItem value="payment" className=" absolute right-32">
                    <FaWallet size={32} className=" hover:scale-110 active:scale-95 transition-transform" />
                </RadioGroupItem>
                <RadioGroupItem value="profile" className={`absolute right-8 border-2 border-black shadow-solid-s rounded-full p-4 ${buttonAnimation}`}>
                    <FaUser />
                </RadioGroupItem>
            </RadioGroup>
        </nav>

    )
}

export default NavBar