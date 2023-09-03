import * as Checkbox from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa6';
interface ICheckbox extends Checkbox.CheckboxProps {
    label?: string;
    bgColor?: string;
    className?: string;
    checkColor?: string;
    markColor?: string;
    size?: string;
}
const MyCheckbox = (props: ICheckbox) => (
    <div className="flex flex-row items-center m-2">
        <Checkbox.Root
            className={`shadow-solid-s flex ${props.size ?? "h-[20px] w-[20px]"} items-center justify-center rounded ${props.bgColor ?? "bg-white"} border-2 border-black ${props.className} ${props.checkColor}`}
            {...props}

        >
            <Checkbox.Indicator >
                <FaCheck size={"14px"} color={props.markColor} />
            </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="pl-2" >
            {props.label}
        </label>
    </div>
);

export default MyCheckbox;