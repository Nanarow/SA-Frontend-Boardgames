import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { MemberWithMemberType } from '../interfaces'
import { useLocation, useNavigate } from 'react-router-dom'

type MemberContextProps = {
    member: MemberWithMemberType | undefined,
    memberType: Role | undefined,
    setMember: (member: MemberWithMemberType) => void
}

type Role = 'user' | 'admin'

const MemberContext = createContext<MemberContextProps | null>(null)

const MemberProvider = ({ children }: PropsWithChildren) => {
    const [member, setMemberWithType] = useState<MemberWithMemberType>()
    const [memberType, setMemberType] = useState<Role>()
    const navigate = useNavigate();
    function setMember(member: MemberWithMemberType) {
        setMemberWithType(member)
        if (member.MemberType.Name === "admin") {
            setMemberType("admin")
        } else {
            setMemberType("user")
        }
    }

    useEffect(() => {
        if (authRequired() && !member) {
            navigate("/login")
        }
    }, [])


    return (
        <MemberContext.Provider value={{ member, memberType, setMember }}>
            {children}
        </MemberContext.Provider>
    )
}

export { MemberContext, MemberProvider }



export function useMemberContext() {
    const context = useContext(MemberContext)
    if (!context) {
        throw new Error("useMemberContext must be used within a MemberProvider")
    }
    return context
}

export function authRequired() {
    const location = window.location
    return !(location.pathname === "/login" || location.pathname === "/" || location.pathname === "/register")
}