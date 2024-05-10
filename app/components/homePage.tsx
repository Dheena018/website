import Image from "next/image"
import Companies from "./companies"
import AboutUs from "./aboutUs"
import Services from "./services"

export default function HomePage() {
    return <>
        <section>
            <div className=" w-full flex mt-5 p-5">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="text-[23px] lg:text-4xl px-10 font-bold lg:font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">Software Developement Company</h1>
                    <p className="text-sm lg:text-base px-10 p-2 tracking-wide leading-relaxed">We&apos;re your digital partners, dedicated to transforming your ideas into robust solutions. With a team of seasoned developers, designers, and strategists, we embark on every project with passion and precision.</p>
                    <span className="font-normal px-10 text-start text-xl tracking-wide">
                        Development + HR Technique + UI/UX
                    </span>
                    <div className="px-10 mt-10">
                        <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-7 py-4 rounded">Discover Our Products</button>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2">
                    <img src="https://plus.unsplash.com/premium_photo-1661379296879-0f6dc17c894f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="../" className="p-4" />
                </div>

            </div>
            <div>
                <p className="text-center flex justify-center items-center mt-2 gap-2">Scroll Down <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
                </p>
            </div>
            <div className="fixed right-8 bottom-[2.5rem] lg:right-[9rem] lg:bottom-2">
                <img src="/assets/favicon.ico" alt=".../" className="w-10 h-10 lg:w-14 lg:h-14 cursor-pointer border border-gray-500 rounded-full" />
            </div>
        </section>
        <Companies />
        {/* <AboutUs /> */}
    </>
};