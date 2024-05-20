import React from 'react';
import motion from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface MenuBarProps {
    menuBar: boolean;
    setMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ menuBar, setMenuBar }) => {
    const currentPage = usePathname();

    const NavInfo = [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/aboutUs" },
        { title: "Services", link: "/servicePage" },
        { title: "Careers", link: "/careers" },
        { title: "Contact", link: "/contact" }
    ];
    return (
        <>
            {menuBar &&
                <section className="bg-white">
                    <div className="container mx-auto">
                        <div className='w-full'>
                            <ul className=''>{NavInfo.map((val, index) =><li key={index} className="pr-5 text-center m-2 text-medium rounded-full"><Link href={val.link} className={`${currentPage === val.title ? "text-black":"px-3 py-2 hover:border-t-2 hover:border-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" } `}>{val.title} 
                                    </Link></li>)}</ul>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default MenuBar;
