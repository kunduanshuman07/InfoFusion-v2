'use client'
import { FaArtstation } from "react-icons/fa";
import DrawerComponent from "./DrawerComponent"

const AdminNavbar = () => {
    return (
        <div className="navbar bg-[#0c4a6e]">
            <div className="navbar-start">
                
            </div>
            <div className="navbar-center">
                <a className="text-xl font-bold text-white flex flex-row" ><FaArtstation className='m-auto mr-2'/> InfoFusion - Admin Dashboard</a>
            </div>
            <div className="navbar-end z-1">
                
            </div>
        </div>
    )
}

export default AdminNavbar