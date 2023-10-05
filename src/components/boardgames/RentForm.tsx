import React, { useEffect } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'

const RentForm = () => {



    function handleSubmit() {
        const form = document.getElementById("formTest") as HTMLFormElement;
        if (form !== null) {
            const data = new FormData(form);
            console.log(data);
        }
    }

    useEffect(() => {

    }, [])

    return (
        <form className=" flex flex-col" onSubmit={event => console.log(event)} id='formTest'>
            <label>Start date</label>
            <MyInput type="date" name='startDate'></MyInput>
            <label>End date</label>
            <MyInput type="date" name='endDate'></MyInput>
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

export default RentForm