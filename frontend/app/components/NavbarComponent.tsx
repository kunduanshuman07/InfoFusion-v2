'use client'

import { FaArtstation } from "react-icons/fa";
import DrawerComponent from "./DrawerComponent"
import { MdKeyboardArrowRight } from "react-icons/md";
import NextBreadcrumb from '../components/NextBreadCrumb';

interface NavbarProps {
    callFrom?: any;
}

const NavbarComponent: React.FC<NavbarProps> = ({ callFrom }) => {
    return (
        <div className="navbar bg-base-100 border ">
            <div className="navbar-start">
                {callFrom === 'Scorecards' ? <></> : <DrawerComponent />}
            </div>
            <div className="navbar-center">
                <a className="text-2xl font-bold text-[#0891b2] flex flex-row cursor-pointer" href="/"><FaArtstation className='m-auto mr-2' /> InfoFusion</a>
            </div>
            <div className="navbar-end">
                <NextBreadcrumb
                    homeElement={'Home'}
                    separator={<span> <MdKeyboardArrowRight className="mt-1" /> </span>}
                    activeClasses='text-[#64748b]'
                    containerClasses='flex py-2 bg-white'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                />
            </div>
        </div>
    )
}

export default NavbarComponent