import React from 'react'
import MyButton from '../components/custom/MyButton'
import { useMemberContext } from '../contexts/MemberProvider'

const Profile = () => {
    const { setMember } = useMemberContext()
    function handleClick() {
        setMember(undefined)
    }
    return (
        <div>Profile
            <MyButton label="log out" onClick={handleClick} />
        </div>
    )
}

export default Profile