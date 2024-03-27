import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaArtstation } from "react-icons/fa";
import DrawerComponent from "./DrawerComponent"

const NavbarComponent = () => {
    return (
        <div className="navbar bg-base-100 border ">
            <div className="navbar-start">
                <DrawerComponent />
            </div>
            <div className="navbar-center">
                <a className="text-2xl font-bold text-[#1e3a8a] flex flex-row" ><FaArtstation className='m-auto mr-2'/> InfoFusion</a>
            </div>
            <div className="navbar-end z-1">
                <div className="tooltip tooltip-bottom" data-tip="Dashboard">
                    <button className="btn text-[#0ea5e9] bg-white border-none hover:bg-[#e0f2fe] btn-circle"><MdDashboard /></button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Profile">
                    <button className="btn text-[#0ea5e9] bg-white border-none hover:bg-[#e0f2fe] btn-circle"><MdManageAccounts /></button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Activity">
                    <button className="btn text-[#0ea5e9] bg-white border-none hover:bg-[#e0f2fe] btn-circle"><IoMdNotifications /></button>
                </div>

            </div>
        </div>
    )
}

export default NavbarComponent