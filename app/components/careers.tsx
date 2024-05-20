import Link from "next/link";

export default function Careers() {
    return <>
        <section className="lg:px-14">
            <div className="container mx-auto shadow-lg">
                <div className="flex flex-wrap p-4 lg:mt-4 lg:py-24 py-10 gap-4 lg:gap-0 ">
                    <div className="w-full lg:w-1/2 flex justify-center items-center ">
                        <div className="lg:px-2">
                            <h2 className="text-3xl text-center lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Careers</h2>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <p className="text-[12px] lg:text-justify whitespace-normal lg:text-base px-10 lg:p-2 tracking-wide leading-relaxed">Join our innovative product-based company and be part of a team that&apos;s shaping the future. Explore exciting career opportunities where you can unleash your creativity, drive meaningful impact, and grow alongside industry leaders. Whether you&apos;re a seasoned professional or just starting your journey, discover your potential with us.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="lg:px-14">
            <div className="container mx-auto">
                <div className="flex justify-center items-center lg:p-9 p-5">
                    <h1 className="uppercase text-center font-bold text-lg lg:text-2xl border-b-4 border-blue-500 text-blue-500 rounded-md"><a href="#">Open Positions</a></h1>
                </div>
                <div className="w-full lg:bg-white lg:shadow-lg rounded-2xl lg:p-10 p-5 flex flex-col lg:flex-row lg:justify-around items-center gap-7">
                    <h3 className="text-2xl font-medium text-center">See Open Position in Linkedin</h3>
                    <button className="bg-blue-500 px-7 py-3 text-white rounded">
                        <Link href={"https://www.linkedin.com/company/mericaninc/"} className="flex items-center gap-1 text-base lg:text-lg font-medium"><svg className="w-6 h-6 bg-white text-blue-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
                        </svg> Linkedin </Link>
                    </button>
                </div>

            </div>
        </section>
        <section className="lg:px-14">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 p-5">
                        <div className="bg-white p-10 rounded-2xl shadow-lg">
                            <h1 className="text-lg font-medium my-5">Software Development</h1>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="flex gap-2 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Apply Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <div className="bg-white p-10 rounded-2xl shadow-lg">
                            <h1 className="text-lg font-medium my-5 ">Software Testing and Quality Engineer</h1>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="flex gap-2 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Apply Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <div className="bg-white p-10 rounded-2xl shadow-lg">
                            <h1 className="text-lg font-medium my-5">Full Stack Developer</h1>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="flex gap-2 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Apply Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}