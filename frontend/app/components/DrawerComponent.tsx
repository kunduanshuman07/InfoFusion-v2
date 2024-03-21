import { MdQuiz } from "react-icons/md";
import { FaCampground } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiQuantconnect } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

const DrawerComponent = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content">
                    <li className=" text-md mt-3"><a><MdQuiz className="mr-3"/> Quiz</a></li>
                    <li className=" text-md mt-3"><a><FaCampground className="mr-3"/> Debate</a></li>
                    <li className=" text-md mt-4"><a><FaMoneyBillAlt className="mr-3"/> Crowdfunding</a></li>
                    <li className=" text-md mt-4"><a><SiQuantconnect className="mr-3"/> Connect</a></li>
                    <li className=" text-md mt-auto"><a><IoSettings className="mr-3"/> Settings</a></li>
                    <li className=" text-md mt-4"><a><MdSupportAgent className="mr-3"/> Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerComponent