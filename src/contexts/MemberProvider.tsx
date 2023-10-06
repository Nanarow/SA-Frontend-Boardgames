import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { MemberWithMemberType } from '../interfaces'

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

    function setMember(member: MemberWithMemberType) {
        setMemberWithType(member)
        if (member.MemberType.Name === "admin") {
            setMemberType("admin")
        } else {
            setMemberType("user")
        }
    }

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