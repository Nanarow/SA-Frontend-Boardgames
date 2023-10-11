import React, { useEffect } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import MyButton from '../components/custom/MyButton'
import { GetMember } from '../services/memberRequest'
import { useNavigate } from 'react-router-dom'



const SignIn = () => {
    const { setMember, memberType, member } = useMemberContext()
    const navigate = useNavigate();
    async function getMember() {
        const m = await GetMember(2)
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
        <div className=" h-full">
            <MyButton onClick={() => console.log(memberType, member)} label="test"></MyButton>
            {/* <iframe src='https://my.spline.design/draganddropstreetcopy-eb672580edafb016b109744ed974591b/' className="w-full h-screen"></iframe> */}
        </div>
    )
}

export default SignIn