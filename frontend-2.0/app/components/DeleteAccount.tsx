'use client'

import { useState } from "react";
import ErrorToast from "./ErrorToast";

interface ModalProps {
    modalOpen: any;
    setModalOpen: (modalOpen: any) => void;
    actFunc: () => void;
    errorMessage: any;
    setErrorMessage: (errorMessage: any) => void;
}

const DeleteAccount: React.FC<ModalProps> = ({ modalOpen, setModalOpen, actFunc, setErrorMessage, errorMessage }) => {
    const [loading, setLoading] = useState<any>(false);
    const handleDelete = async () => {
        setLoading(true);
        actFunc();
    }
    const handleClose = () => {
        setErrorMessage(null);
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
            {errorMessage && <ErrorToast text={errorMessage}/>}
            <div className="modal-box flex flex-col">
                <div className="flex flex-col pb-5">
                    <p className="text-rose-600 text-xs font-bold">You will loose everything including your quiz history, learning paths, dashboard data, scorecards, etc. This action cannot be undone, are you sure you want to continue?</p>
                </div>
                <div className="modal-action flex flex-row">
                    <div className="flex flex-row">
                        <button className="btn btn-error btn-sm text-white mr-2" onClick={handleDelete} disabled={loading}>Delete {loading ? <span className="loading loading-spinner loading-sm text-white"></span> : ""}</button>
                        <button className="btn btn-sm ml-4" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default DeleteAccount