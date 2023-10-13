import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

interface ISlider extends Omit<Slider.SliderProps, "defaultValue"> {
    defaultValue?: number[];
    prefix?: string;
    onValueCommit?: (value: number[]) => void
}

const MySlider: React.FC<ISlider> = ({ defaultValue = [0], prefix = ">", onValueCommit, ...props }) => {
    const [slideValue, setSlideValue] = useState<number[]>(defaultValue)

    return (
        <div className={`flex items-center relative m-1 ${slideValue.length === 1 ? "flex-row" : "flex-col"}`}>
            <Slider.Root
                className="m-2 relative flex items-center select-none touch-none w-full h-5"
                defaultValue={defaultValue}
                max={100}
                step={1}
                onValueChange={(v) => setSlideValue(v)}
                onValueCommit={onValueCommit}
                {...props}
            >
                <Slider.Track className="bg-black relative rounded-full h-[3px] w-full">
                    <Slider.Range className=" absolute bg-rose-400 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-white shadow-solid-s rounded-[10px] border-2 border-black active:scale-125 transition-transform outline-none -translate-y-[2px] cursor-pointer"

                />
                <Slider.Thumb
                    className="block w-5 h-5 bg-white shadow-solid-s rounded-[10px] border-2 border-black active:scale-125 transition-transform outline-none -translate-y-[2px] cursor-pointer"

                />
            </Slider.Root>
            {slideValue.length === 1 ?
                <label className="ml-2 pl-2 pr-10 py-1 border-2 border-black rounded">
                    {prefix}<span className=" absolute right-2">{slideValue[0]}</span>
                </label>
                :
                <div className="flex items-center w-full mt-2">
                    <label className="px-2 py-1 border-2 border-black rounded grow text-start relative">
                        {prefix} <span className=" absolute right-2">{slideValue[0]}</span>
                    </label>
                    <label className="mx-4">
                        -
                    </label>
                    <label className="px-2 py-1 border-2 border-black rounded grow text-start relative">
                        {prefix} <span className=" absolute right-2">{slideValue[1]}</span>
                    </label>
                </div>
            }
            {/* <label className="ml-4">{slideValue}</label> */}
        </div>

    )
};

export default MySlider;