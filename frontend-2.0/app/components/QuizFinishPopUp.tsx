'use client'

import { useState } from "react";

interface ModalProps {
    modalOpen: any;
    setModalOpen: (modalOpen: any) => void;
    actFunc: () => void;
}

const QuizFinishPopUp: React.FC<ModalProps> = ({ modalOpen, setModalOpen, actFunc }) => {
    const [loading, setLoading] = useState<any>(false);
    const handleEndQuiz = async() => {
        setLoading(true);
        actFunc();
    }
    const handleClose = () => {
        setModalOpen(false);
    }

    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen?'modal-open': ''}`}>
            <div className="modal-box flex flex-col">
                <p className="py-2 text-center">Are you sure you want to End Quiz?</p>
                <div className="modal-action flex flex-row">
                    <div className="flex flex-row">
                        <button className="btn btn-sm bg-cyan-700 hover:bg-cyan-500 text-white mr-auto" onClick={handleEndQuiz}>End Quiz {loading? <span className="loading loading-spinner loading-sm text-white"></span>: ""}</button>
                        <button className="btn btn-sm ml-auto" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default QuizFinishPopUp