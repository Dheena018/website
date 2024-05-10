import React from 'react';
import motion from "framer-motion";
interface MenuBarProps {
    menuBar: boolean;
    setMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ menuBar, setMenuBar }) => {

    const NavInfo = ["Home", "About Us", "Services", "Careers", "Contact Us"];
    return (
        <>
            {menuBar &&
                <section className="bg-white">
                    <div className="container mx-auto"> 
                        <div className='w-full'>
                            <ul className=''>{NavInfo.map((item, index) => <li key={index} className=' border border-gray-50 hover:border hover:border-dotted hover:border-black px-4 py-4'><a href="" className='text-medium font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>{item}</a></li>)}</ul>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default MenuBar;
