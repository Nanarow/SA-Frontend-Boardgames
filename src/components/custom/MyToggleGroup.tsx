import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface IToggleGroup extends ToggleGroup.ToggleGroupImplSingleProps {
    items: string[]
    addClass?: string
}

const MyToggleGroup = (props: IToggleGroup) => {
    const toggleGroupItemClasses =
        'data-[state=on]:bg-black data-[state=on]:text-white flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 rounded focus:z-10 focus:outline-none grow m-[2px] data-[state=on]:border-2 data-[state=on]:border-black p-2';

    return (

        <ToggleGroup.Root
            className={`flex flex-row rounded m-2 border-2 border-black shadow-solid-m bg-white ${props.addClass}`}
            type="single"
            {...props}
        >
            {props.items.map((t, index) => {
                return (
                    <ToggleGroup.Item className={toggleGroupItemClasses} value={t} key={index}>
                        <label>{t}</label>
                    </ToggleGroup.Item>
                )
            })}
        </ToggleGroup.Root>
    )
};

export default MyToggleGroup;