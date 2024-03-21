import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import DrawerComponent from "./DrawerComponent"

const NavbarComponent = () => {
    return (
        <div className="navbar bg-base-100 border ">
            <div className="navbar-start">
                <DrawerComponent />
            </div>
            <div className="navbar-center">
                <a className="text-xl font-bold text-info">InfoFusion</a>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-bottom" data-tip="Dashboard">
                    <button className="btn btn-ghost btn-circle"><MdDashboard /></button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Profile">
                    <button className="btn btn-ghost btn-circle"><MdManageAccounts /></button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Activity">
                    <button className="btn btn-ghost btn-circle mr-4"><IoMdNotifications /></button>
                </div>

            </div>
        </div>
    )
}

export default NavbarComponent