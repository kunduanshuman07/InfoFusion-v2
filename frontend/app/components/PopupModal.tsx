'use client'

import { useLoading } from "../context/LoadingContext";

interface PopupModalProps {
    openModal: any;
    setOpenModal: (openModal: any) => void;
    actionTextOne: any;
    actionTextTwo: any;
    actionFunc: () => void;
    content: any;
}

const PopupModal: React.FC<PopupModalProps> = ({ openModal, setOpenModal, actionTextOne, actionTextTwo, actionFunc, content }) => {
    const { loading, startLoading, stopLoading } = useLoading();
    const handleAction = () => {
        startLoading();
        actionFunc();
        stopLoading();
    }
    const handleClose = () => {
        startLoading();
        setOpenModal(false);
        stopLoading();
    }
    return (
        <dialog id="my_modal_1" className={`modal modal-${openModal ? 'open' : 'close'} w-full`}>
            <div className="modal-box">
                <div className="">
                    {content}
                </div>
                <div className="modal-action flex flex-row">
                    <button className="btn mr-auto hover:btn-neutral text-white bg-[#0c4a6e]" onClick={handleAction}>{actionTextOne} {loading && <span className="loading loading-dots loading-md"></span>}</button>
                    <button className="btn ml-auto btn-error text-white" onClick={handleClose}>{actionTextTwo}</button>
                </div>
            </div>
        </dialog>
    )
}

export default PopupModal