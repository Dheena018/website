export default function Contact() {
    return <>
        <section className="lg:px-16">
            <div className="container mx-auto border bg-[#005153] text-white rounded">
                <h1 className="text-4xl lg:text-5xl font-bold address uppercase text-center mt-5 lg:mt-10 py-3">Contact</h1>
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 lg:w-1/3 lg:p-5 mt-2">
                        <div className="p-5 lg:p-10 flex flex-col items-center justify-center gap-2">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 rounded-full bg-[#77A8AC] text-white p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <h2 className="text-xl lg:text-2xl font-semibold address uppercase mt-2">Address</h2>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">Leventis Software Solution Pvt Ltd... Coimbatore.</span><br />
                            <span className=" ordinal address text-base font-medium tracking-wide text-center text-wrap">3rd floor,LEO Towers</span>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">
                            50, Sathy Rd, Athipalayam Pirivu, Sri Laxmi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 lg:p-5">
                        <div className="p-5 lg:p-10 flex flex-col items-center justify-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 rounded-full bg-[#77A8AC] text-white p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </span>
                            <h2 className="text-xl lg:text-2xl font-semibold address uppercase mt-2">Phone</h2>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">Leventis Software Solution Pvt Ltd... Coimbatore.</span><br />
                            <span className=" ordinal address text-base font-medium tracking-wide text-center text-wrap">3rd floor,LEO Towers</span>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">
                            50, Sathy Rd, Athipalayam Pirivu, Sri Laxmi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:p-5">
                        <div className="p-5 lg:p-10 flex flex-col items-center justify-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 rounded-full bg-[#77A8AC] text-white p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold address uppercase mt-2">Email</h2>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">Leventis Software Solution Pvt Ltd... Coimbatore.</span><br />
                            <span className=" ordinal address text-base font-medium tracking-wide text-center text-wrap">3rd floor,LEO Towers</span>
                            <span className="address text-base font-medium tracking-wide text-center text-wrap">
                            50, Sathy Rd, Athipalayam Pirivu, Sri Laxmi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};