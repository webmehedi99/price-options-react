import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] =useState(false) ;
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-500">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open ?< AiOutlineMenu  ></AiOutlineMenu>  : <AiOutlineClose></AiOutlineClose>

                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static 
               ${open ? 'top-16' : '-top-60'} bg-blue-300 px-6 py-2 w-fit   `}>
                {
                    routes.map(route =>  <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;