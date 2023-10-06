import React, { useRef } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'

const GetStartForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            console.log(formData)
        }
    };

    return (
        <form className=" flex flex-col" ref={formRef}>
            <label>Start date</label>
            <MyInput type="time" name='startDate'></MyInput>
            <label>End date</label>
            <MyInput type="datetime-local" name='endDate'></MyInput>
            <label>Hour</label>
            <MyInput type="number" name='hour'></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyButton label="Submit" onClick={handleSubmit} />
                </DialogCloser>

            </div>
        </form>

    )
}

export default GetStartForm