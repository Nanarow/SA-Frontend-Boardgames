import React, { useEffect, useState } from 'react'
import { MemberType } from '../interfaces'
import PricingCard from '../components/pricing/PricingCard'
import { GetAllMemberType } from '../services/memberRequest'



const Pricing = () => {
    const [memberTypeList, setMemberTypeList] = useState<MemberType[]>([])
    async function getAllPricing() {
        setMemberTypeList(await GetAllMemberType())
    }

    useEffect(() => {
        getAllPricing()
    }, [])

    return (
        <div className='flex flex-row justify-center gap-16 mt-[50px] px-8'>
            {memberTypeList.map((memberType, index) => (
                <div className={`bg-while w-[300px] border-4 border-black shadow-solid-l rounded relative `} key={index} style={{ height: `${index * 50 + 350}px` }}>
                    <PricingCard memberType={memberType} />
                </div>
            ))}
        </div>

    )
}

export default Pricing