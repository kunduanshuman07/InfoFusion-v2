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
                
            </div>
        </div>
    )
}

export default NavbarComponent