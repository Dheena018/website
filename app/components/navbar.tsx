'use client'
import Link from "next/link";
import Image from "next/image";
import SearchButton from "./searchButton";
import { useState } from "react";
import MenuBar from "./menuBar";
import HomePage from "./homePage";
import { motion } from "framer-motion";

export default function Navbar() {
    const NavInfo = ["Home", "About Us", "Services", "Careers", "Contact"];
    const [btnClick, setBtnClick] = useState(false);
    const [menuBar, setMenuBar] = useState(false);

    function handleSearchClick() {
        setBtnClick(true);
    }
    const handleCancelClick = () => {
        setBtnClick(false);
    };
    function handleMenuClick() {
        setMenuBar(true)
    }
    const handleCancelMenu = () => {
        setMenuBar(false);
    };
    return (
        <>
            {/* #5DEBD7 */}
            <motion.section className="" initial = {{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1,duration:1.5}}>
                <div className="px-3 lg:px-10 py-5 sticky top-0 bg-white shadow-sm">
                    <div className="container mx-auto">
                        <motion.div 
                        
                        className="flex justify-center md:justify-around lg:justify-between items-center">
                            {menuBar ?
                                <span onClick={handleCancelMenu} className='flex justify-start md:mr-10 lg:mr-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-4 w-6 h-6 border border-black rounded-full font-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                : <span className="lg:hidden md:flex mr-5" onClick={handleMenuClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </span>}
                            <Link href={"/"}>
                                <Image src={"/assets/Logo6.png"} alt="Logo" width={200} height={200} className="rounded md:text-center" blurDataURL="data:..." placeholder="blur" />
                            </Link>
                            <div className="md:hidden flex gap-2 ml-2">
                                {btnClick ? <span onClick={handleCancelClick} className='flex items-center justify-center lg:mr-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-4 w-6 h-6 rounded-full bg-red-500 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                    : <span onClick={handleSearchClick} className="lg:block  border-none rounded-full bg-blue-600 text-white px-2 py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </span>}

                                <span className="lg:block border-none rounded-full bg-red-600 text-white px-2 py-1">
                                    <Link href={"/signIn"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </Link>
                                </span>
                            </div>
                            <div className="my-auto">
                                <ul className="flex hidden lg:flex font-semibold">
                                    {NavInfo.map((val, index) => <li key={index} className="pr-5 text-center m-2 text-medium rounded-full"><Link href={"/"} className="px-3 py-2 hover:border-t-2 hover:border-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">{val}</Link></li>)}
                                </ul>
                            </div>
                            <div className="flex gap-4 hidden md:flex">
                                {btnClick ? <span onClick={handleCancelClick} className='flex items-center justify-center mr-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-4 w-6 h-6 rounded-full bg-red-500 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span> : <button className="flex gap-2 items-center font-bold px-4 py-3 border-none rounded bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSearchClick} title="Search">Search <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                </button>}
                                <Link href={"/signIn"}>
                                    <button className="flex gap-1 items-center font-bold px-4 py-3 border-none rounded bg-red-500 hover:bg-red-600 text-white">Sign in <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <SearchButton btnClick={btnClick} setBtnClick={setBtnClick} />
                <MenuBar menuBar={menuBar} setMenuBar={setMenuBar} />
                <div className="">
                    <HomePage />
                </div>
            </motion.section>
        </>
    )
};