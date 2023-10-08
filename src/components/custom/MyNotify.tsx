import React from 'react'
import toast from 'react-hot-toast'
import { FetchState } from '../../hooks/useFetch'

const LoadingNotify = () => {
    return (
        <div>LoadingNotify</div>
    )
}
const SuccessNotify = () => {
    return (
        <div>SuccessNotify</div>
    )
}

interface IErrorNotify {
    message: string
}
const ErrorNotify = ({ message }: IErrorNotify) => {
    return (
        <div>ErrorNotify {message}</div>
    )
}

// export function Notify(promise: Promise<unknown>) {
//     toast.promise(promise, {
//         loading: <LoadingNotify />,
//         success: <SuccessNotify />,
//         error: (error) => <ErrorNotify message={error} />,
//     });
// }

export function NotifyError(message: string) {
    // toast.custom(<ErrorNotify message={message} />)
    toast.error(message)
}

export function NotifySuccess() {
    // toast.custom(<SuccessNotify />)
    toast.success("Success")
}