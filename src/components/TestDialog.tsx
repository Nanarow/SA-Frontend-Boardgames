import React from 'react'
import DialogCloser from './custom/DialogCloser'
import MyButton from './custom/MyButton'
import MyInput from './custom/MyInput'

const TestDialog = () => {
    return (
        <div>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                    Name
                </label>
                <MyInput type="text" placeholder="Name" defaultValue={"woranan sholee"} />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Username
                </label>
                <MyInput type="text" placeholder="Username" />
            </fieldset>
            <div className="mt-[25px] flex justify-end items-center gap-4 ">
                <DialogCloser>
                    <label className=" text-slate-500 cursor-pointer">Cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyButton label='Save changes' className='bg-[#ff6080]' />
                </DialogCloser>
            </div>
        </div>
    )
}

export default TestDialog