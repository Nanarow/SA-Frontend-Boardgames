import React, { useEffect, useState } from 'react'
import { MemberTypeRequest } from '../services/memberRequest'
import { MemberType } from '../interfaces'
import PricingCard from '../components/pricing/PricingCard'

const memberTypeRequest = new MemberTypeRequest()

const hList = ["h-[450px]", "h-[500px]", "h-[550px]"]

const Pricing = () => {
    const [memberTypeList, setMemberTypeList] = useState<MemberType[]>([])

    async function getAllPricing() {
        setMemberTypeList(await memberTypeRequest.GetAllMemberType())
    }

    useEffect(() => {
        getAllPricing()
    }, [])

    return (
        <div className='flex flex-row justify-center gap-16 mt-[50px]'>
            {memberTypeList.map((memberType, index) => (
                <div className={`bg-while w-[300px] ${hList[index]} border-4 border-black shadow-solid-l rounded relative `} key={index}>
                    <PricingCard memberType={memberType} />
                </div>
            ))}
        </div>

    )
}

export default Pricing