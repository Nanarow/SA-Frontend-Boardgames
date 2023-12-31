import React from 'react'
import MyButton from '../custom/MyButton'
import MyCheckbox from '../custom/MyCheckbox'
import { MemberType } from '../../interfaces'
import MyDialog from '../custom/MyDialog'
import SubscriptionForm from '../pricing/SubscriptionForm'
import { useMemberContext } from '../../contexts/MemberProvider'


interface PricingCardProps {
    memberType: MemberType
}
const PricingCard: React.FC<PricingCardProps> = ({ memberType }) => {
    const { member } = useMemberContext()
    return (

        <div className={`flex flex-col justify-start h-full ${(member?.MemberTypeID === memberType.ID) ? " bg-violet-400" : ""}`}>
            <label className=' text-center text-2xl mt-6'>{memberType.Name}</label>
            <label className=' font-bold text-5xl my-16 text-center'>{memberType.Price === 0 ? "Free!" : `${memberType.Price}`} <label className=' text-sm font-medium'>/ month</label></label>
            <div className=' self-start ml-2 mt-2'>
                <MyCheckbox label={`เช่าบอร์ดเกมได้ ${memberType.MaxBoardgame === 2147483647 ? "unlimit" : `${memberType.MaxBoardgame}`} เกม/ครั้ง`} checked={true} />
                <div className='mt-4'>
                    <MyCheckbox label={`จองห้องได้ไม่เกิน ${memberType.MaxRoomHour} ชั่วโมง/วัน`} checked={true} />
                </div>
            </div>
            {
                (member) ?
                    (member.MemberTypeID !== memberType.ID && memberType.ID > member.MemberTypeID) ?
                        (<div className=' absolute mt-[40px] bottom-6 left-1/2 -translate-x-[50%]'>
                            <MyDialog content={<SubscriptionForm memberType={memberType} />} disableCloser={true}>
                                <MyButton label='Get Start' />
                            </MyDialog>
                        </div>) :
                        null :
                    null
            }

        </div>

    )
}

export default PricingCard