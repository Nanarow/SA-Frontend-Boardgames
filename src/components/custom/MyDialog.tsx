import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaXmark } from 'react-icons/fa6';
import MyButton from './MyButton';
import DialogCloser from './DialogCloser';
interface IDialog {
    content: JSX.Element
    children?: ReactNode
    disableCloser?: boolean;
}

const MyDialog = (props: IDialog) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            {props.children}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[4px] bg-white p-[25px] border-2 shadow-solid-l border-black">
                {/* <Dialog.Title className="m-0 text-[17px] font-medium">
                    Edit profile
                </Dialog.Title>
                <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
                    Make changes to your profile here. Click save when you're done.
                </Dialog.Description> */}
                {props.content}
                {
                    props.disableCloser ? null :
                        <DialogCloser>
                            <div className="absolute top-[0px] right-[0px]">
                                <MyButton leftIcon={<FaXmark />} />
                            </div>
                        </DialogCloser>
                }
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default MyDialog;