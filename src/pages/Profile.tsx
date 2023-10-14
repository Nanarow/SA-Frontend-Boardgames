import React, { useEffect, useState } from 'react'
import MyButton from '../components/custom/MyButton'
import { useMemberContext } from '../contexts/MemberProvider'
import { GetUserByID } from '../services/memberRequest'
import { User } from '../interfaces'

const Profile = () => {
    const { member, setMember } = useMemberContext()
    const [user, setUser] = useState<User>()
    function handleClick() {
        setMember(undefined)
    }

    async function getUser() {
        if (member) {
            setUser(await GetUserByID(member.UserID))
        }
    }
    useEffect(() => {
        getUser()
    }, [])


    return (
        <div className="flex justify-between ">
            {(user) ? (
                <div className="flex w-1/2 border-2 border-black shadow-solid-m m-4 p-2 rounded flex-col gap-2">
                    <label>Username : {user.UserName}</label>
                    <label>Name : {user.FirstName} {user.LastName}</label>
                    <label>Email : {user.Email}</label>
                    <label>Tel. : {user.Tel}</label>
                    <label>Coming soon......</label>
                </div>) : null
            }
            <div className="mr-8">
                <MyButton label="log out" onClick={handleClick} className=" bg-red-500 text-white" />
            </div>
        </div>
    )
}

export default Profile