import React, { useEffect } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import { MemberRequest } from '../services/memberRequest'

const memberRequest = new MemberRequest()

const SignIn = () => {
    const { setMember, memberType } = useMemberContext()
    async function getMember() {
        const m = await memberRequest.GetMember(4)
        setMember(m)
        // console.log(m)
    }

    useEffect(() => {
        getMember()
    }, [])

    return (
        <div>SignIn
            <button onClick={() => console.log(memberType)}>test</button>
        </div>

    )
}

export default SignIn