import React, { useEffect, useState } from 'react'
import { useMemberContext } from '../contexts/MemberProvider'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

interface AuthProps {
    form: "login" | "register"
}

const Auth = ({ form = "login" }: AuthProps) => {
    const { member } = useMemberContext()
    const navigate = useNavigate();
    useEffect(() => {
        if (member) {
            navigate("/boardgames")
        }
    }, [])

    return (
        <div className={`w-full h-screen flex items-center justify-center flex-col`}>
            {/* transition-all ${form === "login" ? "flex-col" : "flex-row"} */}
            <div><span className="text-[#43c7ff] title mt-4">HOUSE </span><span className="text-[#ff5050] title mt-4">OF</span></div>
            <div><span className="text-[#2fd38e] title">BOARD </span><span className="text-[#fdc432] title">GAME</span></div>
            {/* <div className="text-white title mt-4">HOUSE OF <br /> BOARD GAME</div> */}

            {form === "login" ? <LoginForm /> : <RegisterForm />}

        </div >
        // <div className=" h-full">
        //     {/* <MyButton onClick={() => console.log(memberType, member)} label="test"></MyButton> */}
        //     {/* <iframe src='https://my.spline.design/draganddropstreetcopy-eb672580edafb016b109744ed974591b/' className="w-full h-screen"></iframe> */}
        // </div>
    )
}

export default Auth