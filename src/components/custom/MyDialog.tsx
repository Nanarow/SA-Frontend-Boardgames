import React, { ReactNode, createContext, useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaXmark } from 'react-icons/fa6';
import MyButton from './MyButton';
import DialogCloser from './DialogCloser';
import { twMerge } from 'tailwind-merge';
interface IDialog extends Dialog.DialogProps {
    content: JSX.Element
    children?: ReactNode
    disableCloser?: boolean;
    className?: string;
}
type IDialogContext = {
    dialogOpen: boolean
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DialogContext = createContext<IDialogContext | null>(null);

export function useDialogCloser() {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error("useMemberContext must be used within a MemberProvider")
    }
    return context
}
const MyDialog: React.FC<IDialog> = ({ children, content, disableCloser, className, ...dialogProps }) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (

        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen} {...dialogProps}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
                <Dialog.Content className={twMerge("data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[4px] bg-white p-[25px] border-2 shadow-solid-l border-black ", className)}
                    onInteractOutside={(event) => {
                        event.preventDefault();
                    }}>
                    {/* <Dialog.Title className="m-0 text-[17px] font-medium">
                            Edit profile
                        </Dialog.Title>
                        <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
                            Make changes to your profile here. Click save when you're done.
                        </Dialog.Description> */}
                    <DialogContext.Provider value={{ dialogOpen, setDialogOpen }}>
                        {content}
                    </DialogContext.Provider>

                    {
                        disableCloser ? null :
                            <DialogCloser>
                                <div className="absolute top-[0px] right-[0px]">
                                    <MyButton leftIcon={<FaXmark />} />
                                </div>
                            </DialogCloser>
                    }
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default MyDialog;