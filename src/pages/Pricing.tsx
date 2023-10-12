import React, { useEffect, useState } from 'react'
import { MemberType } from '../interfaces'
import PricingCard from '../components/pricing/PricingCard'
import { GetAllMemberType } from '../services/memberRequest'


const hList = ["h-[350px]", "h-[400px]", "h-[450px]", "h-[500px]"]

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
                <div className={`bg-while w-[300px] ${hList[index]} border-4 border-black shadow-solid-l rounded relative `} key={index}>
                    <PricingCard memberType={memberType} />
                </div>
            ))}
        </div>

    )
}

export default Pricing