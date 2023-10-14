import React from 'react'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'
import MyInput from '../custom/MyInput'

const TestDialog = () => {
    return (
        <div>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                    Name
                </label>
                <MyInput type="text" placeholder="Name" defaultValue={"woranan sholee"} />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Username
                </label>
                <MyInput type="text" placeholder="Username" />
            </fieldset>
            <div className="mt-[25px] flex justify-end items-center gap-4 ">
                <DialogCloser>
                    <label className=" text-slate-500 cursor-pointer">Cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyButton label='Save changes' className='bg-[#ff6080]' />
                </DialogCloser>
            </div>
        </div>
    )
}

export default TestDialog

// import React, { useEffect, useRef, useState } from 'react'
// import DialogCloser from '../custom/DialogCloser';
// import MyButton from '../custom/MyButton';
// import MyInput from '../custom/MyInput';
// import QRcode from '../../assets/QRCode.jpg'
// import { useMemberContext } from '../../contexts/MemberProvider';
// import { GameBill, MemberType, RoomBill } from '../../interfaces';
// import { useNavigate } from 'react-router-dom';
// import { UpdateRoomBill } from '../../services/roomRequest';
// import { UpdateGameBill } from '../../services/boardgameRequest';
// import { CreateMemberBill } from '../../services/memberRequest';

// interface PaymentProps {
//     roomBill?: RoomBill
//     gameBill?: GameBill
//     memberType?: MemberType

// }

// const PaymentForm: React.FC<PaymentProps> = ({ roomBill, gameBill, memberType }) => {
//     const formRef = useRef<HTMLFormElement | null>(null);
//     const { member, setMember } = useMemberContext()
//     const [total, setTotal] = useState(0)
//     const navigate = useNavigate();

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         if (formRef.current) {
//             if (member) {
//                 const formData = new FormData(formRef.current);
//                 if (roomBill) {
//                     await UpdateRoomBill(formData, roomBill)
//                     navigate("/loading/payment")
//                 }
//                 if (gameBill) {
//                     await UpdateGameBill(formData, gameBill)
//                     navigate("/loading/payment")
//                 }
//                 if (memberType) {
//                     const newMember = await CreateMemberBill(formData, member, memberType)
//                     if (newMember) {
//                         setMember(newMember)
//                     }
//                     navigate("/loading/pricing")
//                 }
//             }
//         }
//     };

//     useEffect(() => {
//         if (roomBill) {
//             setTotal(roomBill.Total)
//         }
//         if (gameBill) {
//             setTotal(gameBill.Total)
//         }
//         if (memberType) {
//             setTotal(memberType.Price)
//         }
//     }, [])


//     return (
//         <form className=" flex flex-col" ref={formRef} onSubmit={(e) => { handleSubmit(e) }}>
//             <img src={QRcode} className=" h-64 object-contain"></img>
//             <label className=" text-center text-xl font-bold">Total <span className=" text-red-500">{total}</span> ฿</label>
//             <label className=" text-center">Upload slip</label>
//             <MyInput type="file" name='fileSlip' accept="image/*" required></MyInput>
//             <div className="flex items-center justify-between gap-4">
//                 <DialogCloser>
//                     <label className=' text-slate-500 ml-2'>cancel</label>
//                 </DialogCloser>
//                 <MyButton label="Confirm Payment!" type='submit' className=" bg-green-400 text-white" />
//             </div>
//         </form>
//     )
// }

// export default PaymentForm

// import { useEffect, useState } from 'react'
// import MyButton from '../components/custom/MyButton'

// import { useMemberContext } from '../contexts/MemberProvider'
// import { GameBill, RoomBill } from '../interfaces'

// import MyDialog from '../components/custom/MyDialog'
// import PaymentForm from '../components/payment/PaymentForm'
// import { GetRoomBills } from '../services/roomRequest'
// import { GetGameBills } from '../services/boardgameRequest'


// const Payment = () => {
//     const { member } = useMemberContext()
//     const [roomBills, setRoomBills] = useState<RoomBill[]>([])
//     const [gameBills, setGameBills] = useState<GameBill[]>([])
//     async function getAllRoomBill() {
//         if (member) {
//             setRoomBills(await GetRoomBills(`status=pending&mid=${member.ID}`))
//         }
//     }
//     async function getAllGameBill() {
//         if (member) {
//             setGameBills(await GetGameBills(`status=pending&mid=${member.ID}`))
//         }
//     }
//     useEffect(() => {
//         getAllRoomBill()
//         getAllGameBill()
//     }, [])


//     return (
//         <div className=" flex flex-row">
//             <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
//                 <label className=" text-center">Boardgames Bill</label>
//                 {gameBills.map((bill, index) => (
//                     (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
//                         <label>Boardgame ID {bill.BoardgameID}</label>
//                         <MyDialog content={<PaymentForm gameBill={bill} />} disableCloser={true}>
//                             <MyButton label="Pay" />
//                         </MyDialog>

//                     </div>)
//                 ))}
//             </div>
//             <div className=" flex flex-col w-1/2 p-2 border-2 border-black">
//                 <label className=" text-center">Room Bill</label>
//                 {roomBills.map((bill, index) => (<div key={index} className="flex items-center justify-between border-2 border-orange-800 p-2">
//                     <label>Room ID {bill.RoomID}</label>
//                     <MyDialog content={<PaymentForm roomBill={bill} />} disableCloser={true}>
//                         <MyButton label="Pay" />
//                     </MyDialog>

//                 </div>))}

//             </div>
//         </div>

//     )
// }

// export default Payment