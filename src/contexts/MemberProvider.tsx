import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { MemberWithMemberType } from '../interfaces'

type MemberContextProps = {
    member: MemberWithMemberType | undefined,
    setMember: React.Dispatch<React.SetStateAction<MemberWithMemberType | undefined>>
}

const MemberContext = createContext<MemberContextProps | null>(null)

const MemberProvider = ({ children }: PropsWithChildren) => {
    const [member, setMember] = useState<MemberWithMemberType>()
    return (
        <MemberContext.Provider value={{ member, setMember }}>
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