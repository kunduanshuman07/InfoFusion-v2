'use client'
import { useRouter } from "next/navigation";

interface PopupModalProps {
    openModal: any;
    setOpenModal: (openModal: any) => void;
    actionTextOne: any;
    actionTextTwo: any;
    actionFunc: () => void;
    content: any;
}

const PopupModal: React.FC<PopupModalProps> = ({ openModal, setOpenModal, actionTextOne, actionTextTwo, actionFunc, content }) => {
    const router = useRouter();
    const handleAction = () => {
        actionFunc();
    }
    const handleClose = () => {
        setOpenModal(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal modal-${openModal ? 'open' : 'close'} w-full`}>
            <div className="modal-box">
                <div className="">
                    {content}
                </div>
                <div className="modal-action flex flex-row">
                    <button className="btn mr-auto hover:btn-neutral text-white bg-[#0c4a6e]" onClick={handleAction}>{actionTextOne}</button>
                    <button className="btn ml-auto btn-error text-white" onClick={handleClose}>{actionTextTwo}</button>
                </div>
            </div>
        </dialog>
    )
}

export default PopupModal