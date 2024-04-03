'use client'
import { TbFilterSearch } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import ScorecardModal from "./ScorecardModal";
const ScorecardTable = () => {
    const [viewScorecardModal, setViewScorecardModal] = useState<any>(false);
    const handleClose = () => {
        setViewScorecardModal(false);
    }
    return (
        <div className="flex flex-col p-2">
            <div className="flex flex-row">
                <button className="btn bg-[#0284c7] text-white font-bold hover:bg-[#0e7490] ml-5 mt-5">Date Filter <TbFilterSearch /></button>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-4">
                    <div className="shadow-md p-4 flex flex-col rounded-lg m-2">
                        <h1 className="text-sm font-bold text-[#075985] text-center">Quiz #1 : The Indian History</h1>
                        <h1 className="text-xs font-bold text-[#94a3b8] mt-1 text-center">24th April 2024</h1>
                        <div className="grid grid-cols-2 w-full mt-3">
                            <button className="btn m-auto btn-xs pl-5 pr-5 font-bold btn-accent text-white mt-2">Score: 10</button>
                            <button className="btn m-auto btn-xs pl-5 pr-5 font-bold bg-[#f59e0b] text-white mt-2 hover:bg-[#f59e0b]">Rating: 109</button>
                        </div>
                        <button className="btn m-auto btn-xs font-bold btn-neutral text-white mt-5" onClick={()=>setViewScorecardModal(true)}><FaEye /> View Scorecard</button>
                    </div>
                </div>
            </div>
            {viewScorecardModal && <ScorecardModal modalOpen={viewScorecardModal} handleClose={handleClose}/>}
        </div>
    )
}

export default ScorecardTable