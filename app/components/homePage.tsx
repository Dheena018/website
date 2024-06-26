'use client';
import Image from "next/image";
import {motion} from "framer-motion";

export default function HomePage() {
    return <>
        <motion.section initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}>
            <div className=" w-full flex mt-5 p-5">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="text-[25px] lg:text-4xl px-10 font-bold lg:font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">Software Developement Company</h1>
                    <p className="text-[12px] text-justify whitespace-normal lg:text-base px-10 p-2 tracking-wide leading-relaxed">We&apos;re your digital partners, dedicated to transforming your ideas into robust solutions. With a team of seasoned developers, designers, and strategists, we embark on every project with passion and precision.</p>
                    <span className="font-normal px-10 text-start text-xl tracking-wide">
                        Development + HR Technique + UI/UX
                    </span>
                    <div className="px-10 mt-10 text-center lg:text-left">
                        <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-5 py-2 lg:px-7 lg:py-4 rounded">Discover Our Products</button>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2">
                    <Image src="/assets/development.png" alt="../" className="p-4" width={800} height={200} />
                </div>

            </div>
            <div>
                <p className="text-center flex justify-center items-center mt-2 gap-2">Scroll Down <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
                </p>
            </div>
            <div className="fixed right-6 bottom-[1rem] lg:right-[6rem] lg:bottom-14">
                <Image src="/assets/favicon.ico" alt=".../" className="w-10 h-10 lg:w-14 lg:h-14 cursor-pointer bg-white rounded-full" width={200} height={200} />
            </div>
        </motion.section>
    </>
};