import React, { useRef } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import MyInput from "../custom/MyInput";
import MyButton from "../custom/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { useMemberContext } from "../../contexts/MemberProvider";
import { GetMember, Login } from "../../services/memberRequest";



const LoginForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const navigate = useNavigate()
    const { setMember } = useMemberContext()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const res = await Login(formData)
            if (res) {
                const data = await GetMember(res.ID)
                if (data) {
                    setMember(data)
                    navigate("/boardgames")
                }
            }
        }

    }

    return (
        <form className="card-form mt-4 flex h-72 w-96 flex-col rounded-md border-2 border-black bg-white p-2 shadow-solid-l justify-center" onSubmit={handleSubmit} ref={formRef}>
            <h1 className=" text-6xl font-bold mb-4 text-center">LOG IN</h1>

            <MyInput
                leftIcon={<FaUser />}
                placeholder="Username"
                errorMsg="Invalid Email"
                name="username" required
            />
            <MyInput
                leftIcon={<FaLock />}
                type="password" placeholder="Password"
                errorMsg="Wrong password?"
                name="password" required
            />

            <p className=" text-center my-2">
                Don't have an account ?{" "}
                <Link to={"/register"} className="text-blue-500 underline">
                    Register
                </Link>
            </p>
            <div className=" self-center">
                <MyButton label="Login" />
            </div>

            {/* <div>
                <p>
                    Don't have an account ?{" "}
                    <a href="/register" className=" text-blue-500 underline">
                        Register
                    </a>
                </p>
                <p className=" title text-white">
                    บ้าน
                    <br />
                    บอร์ด
                    <br />
                    เกม
                </p>
            </div> */}
        </form>
    );
};

export default LoginForm;


