import * as Dialog from '@radix-ui/react-dialog'
import { PropsWithChildren } from 'react'

const DialogCloser = (props: PropsWithChildren) => {
    return (
        <Dialog.Close asChild>
            {props.children}
        </Dialog.Close>
    )
}

export default DialogCloser