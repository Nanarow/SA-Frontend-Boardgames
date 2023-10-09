import React, { useEffect } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import MyButton from '../components/custom/MyButton'
import { GetMember } from '../services/memberRequest'
import { useNavigate } from 'react-router-dom'



const SignIn = () => {
    const { setMember, memberType, member } = useMemberContext()
    const navigate = useNavigate();
    async function getMember() {
        const m = await GetMember(8)
        if (m) {
            setMember(m)
            navigate("/boardgames")
        }
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