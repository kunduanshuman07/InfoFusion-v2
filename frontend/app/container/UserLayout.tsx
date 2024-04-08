'use client'

import NavbarComponent from "../components/NavbarComponent"


interface LayoutProps{
  callFrom?: any;
}

const UserLayout:React.FC<LayoutProps> = ({callFrom}) => {
  return (
    <div>
        <NavbarComponent callFrom={callFrom}/>
    </div>
  )
}

export default UserLayout