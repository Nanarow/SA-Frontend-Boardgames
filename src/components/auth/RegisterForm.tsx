import { FaLock, FaPhone, FaAddressCard } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import MyInput from "../custom/MyInput";
import MyCheckbox from "../custom/MyCheckbox";
import MyButton from "../custom/MyButton";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMemberContext } from "../../contexts/MemberProvider";
import { useRef } from "react";
import { Register } from "../../services/memberRequest";

const SignUpForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { setMember } = useMemberContext()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const res = await Register(formData)
            if (res) {
                setMember(res)
            }
        }

    }
    return (
        <form className="card-form mt-4 flex h-auto w-[520px] flex-col justify-center rounded-lg border-2 border-black bg-white p-2 shadow-solid-m " ref={formRef} onSubmit={handleSubmit}>
            <h1 className=" text-center font-bold text-4xl m-2">Register</h1>
            <div className="relative flex flex-row">
                <MyInput type="text" placeholder="First name" name="firstName" required />
                <MyInput type="text" placeholder="Last name" name="lastName" required />
            </div>

            <MyInput
                leftIcon={<FaPhone />}
                type="tel" placeholder="Tel."
                name="tel" required

            />
            <MyInput
                leftIcon={<HiMail />}
                placeholder="Email" type="email"
                errorMsg="Invalid Email"
                name="email" required
            />
            <MyInput
                leftIcon={<FaUser />}
                placeholder="Username"
                errorMsg="Wrong Username"
                name="userName" required

            />
            <MyInput
                leftIcon={<FaLock />}
                type="password" placeholder="Password"
                errorMsg="Wrong password?"
                name="password" required
            />

            {/* <MyCheckbox label="I Agree with privacy and policy" /> */}
            <p className=" text-center m-2">
                Already have an account ?{" "}
                <Link to={"/login"} className=" text-blue-500 underline">
                    Log in
                </Link>
            </p>
            <div className=" self-center">
                <MyButton label="Register" />
            </div>
        </form>
    );
};

export default SignUpForm;
