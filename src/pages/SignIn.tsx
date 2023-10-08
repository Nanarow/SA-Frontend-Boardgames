import React, { useEffect } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import MyButton from '../components/custom/MyButton'
import { GetMember } from '../services/memberRequest'

const SignIn = () => {
    const { setMember, memberType, member } = useMemberContext()
    async function getMember() {
        const m = await GetMember(4)
        setMember(m)
        // console.log(m)
    }

    useEffect(() => {
        getMember()
    }, [])

    return (
        <div>
            <MyButton onClick={() => console.log(memberType, member)} label="test"></MyButton>
        </div>

    )
}

export default SignIn