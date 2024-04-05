'use client'

import { useState } from "react";
interface PopupModalProps {
    openModal: any;
    setOpenModal: (openModal: any) => void;
    actionTextOne: any;
    actionTextTwo: any;
    actionFunc: () => void;
    content: any;
}

const PopupModal: React.FC<PopupModalProps> = ({ openModal, setOpenModal, actionTextOne, actionTextTwo, actionFunc, content }) => {
    const [loading, setLoading] = useState<any>(false);
    const handleAction = () => {
        setLoading(true);
        actionFunc();
    }
    const handleClose = () => {
        setLoading(true);
        setOpenModal(false);
        setLoading(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal modal-${openModal ? 'open' : 'close'} w-full`}>
            <div className="modal-box">
                <div className="">
                    {content}
                </div>
                <div className="modal-action flex flex-row">
                    <button className="btn mr-auto hover:btn-neutral text-white bg-[#0c4a6e]" onClick={handleAction}>{actionTextOne} {loading && <span className="loading loading-dots loading-sm"></span>}</button>
                    <button className="btn ml-auto bg-[#cbd5e1] text-neutral font-bold" onClick={handleClose}>{actionTextTwo}</button>
                </div>
            </div>
        </dialog>
    )
}

export default PopupModal