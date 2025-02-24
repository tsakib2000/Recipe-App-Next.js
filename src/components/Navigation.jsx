

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/01.png'
const Navigation = () => {
    return (
      
            
    <Menubar className='shadow-none rounded-none bg-gray-500 m-0 py-5'>
      <Image
      src={logo} 
      alt="logo"
      width={30}
      height={30}
      />
      <MenubarMenu>
        <MenubarTrigger><Link href='/'>Home</Link></MenubarTrigger>
       
      </MenubarMenu>

    </Menubar>
       
    );
};

export default Navigation;