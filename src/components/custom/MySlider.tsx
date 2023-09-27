import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

interface ISlider extends Omit<Slider.SliderProps, "defaultValue"> {
    defaultValue?: number;
}

const MySlider: React.FC<ISlider> = ({ defaultValue = 0, ...props }) => {
    const [slideValue, setSlideValue] = useState<number>(defaultValue)

    return (
        <div className="flex flex-row items-center">
            <Slider.Root
                className="m-2 relative flex items-center select-none touch-none w-[200px] h-5"
                defaultValue={[defaultValue]}
                max={100}
                step={1}
                onValueChange={(v) => setSlideValue(v[0])}
                {...props}
            >
                <Slider.Track className="bg-black relative grow rounded-full h-[3px] ">
                    <Slider.Range className=" absolute bg-black rounded-full h-full " />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-white shadow-solid-s rounded-[10px] border-2 border-black active:scale-125 transition-transform outline-none -translate-y-[2px] cursor-pointer"
                    aria-label="Volume"
                />
            </Slider.Root>
            <label className="ml-4">{slideValue}</label>
        </div>

    )
};

export default MySlider;