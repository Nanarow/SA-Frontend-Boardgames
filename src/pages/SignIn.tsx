import React, { useEffect } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import { MemberRequest } from '../services/memberRequest'

const memberRequest = new MemberRequest()

const SignIn = () => {
    const { setMember } = useMemberContext()
    async function getMember() {
        const m = await memberRequest.GetMember(1)
        setMember(m)
        console.log(m)
    }

    useEffect(() => {
        getMember()
    }, [])

    return (
        <div>SignIn</div>
    )
}

export default SignIn