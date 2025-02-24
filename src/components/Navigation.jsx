

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from "next/link";
const Navigation = () => {
    return (
        <div>
            
    <Menubar className='shadow-none rounded-none'>
      <MenubarMenu>
        <MenubarTrigger><Link href='/'>Home</Link></MenubarTrigger>
       
      </MenubarMenu>

    </Menubar>
        </div>
    );
};

export default Navigation;