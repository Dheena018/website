'use client'
import { motion } from "framer-motion"

export default function Services() {
    return <>
        <section className="px-14">
            <div className="container mx-auto">
                <div className="py-12 lg:py-24">
                    <h2 className="text-2xl lg:text-5xl font-bold border-b-4 border-blue-500 rounded p-4 m-0 W-20">Our Services</h2>
                    <p className="text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed lg:indent-40 mt-7 lg:mt-10">Welcome to Our <b className="text-blue-500">Leventis</b>, your one-stop destination for comprehensive software solutions and BPO services. We specialize in crafting cutting-edge software products tailored to your business needs, from conceptualization to execution. Our BPO services ensure streamlined operations, allowing you to focus on your core competencies while we handle the rest. Additionally, our UI/UX design expertise ensures seamless user experiences that elevate your products above the competition.</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/3 p-5">
                        <motion.div whileHover={{ scale: 1.1 }} className="bg-white shadow-lg text-center p-5 lg:p-10 rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1661302908772-e19a215c118a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] lg:h-[300px]">
                            <div className="mt-16 py-3 lg:mt-32 lg:py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl">Human Resources</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-white shadow-lg text-center p-5 lg:p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="py-3 mt-32 lg:py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl"> Software Developement </h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <motion.div whileHover={{ scale: 1.1 }} className="bg-white shadow-lg text-center p-5 lg:p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="py-3 mt-32 lg:py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl">UI/UX</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <motion.div whileHover={{ scale: 1.1 }} className="bg-white shadow-lg text-center p-5 lg:p-10 rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1661286630002-6c45078cb151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJlc3VtZSUyMHdyaXRpbmd8ZW58MHx8MHx8fDA%3D')] h-[300px]">
                            <div className="mt-32 py-3 lg:py-6">
                                <h2 className="font-bold text-white py-2 text-xl">Resume Writing</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/3 p-5">
                        <motion.div whileHover={{ scale: 1.1 }} className="bg-white shadow-lg text-center p-5 lg:p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBwcm9jZXNzJTIwb3V0c291cmNpbmd8ZW58MHx8MHx8fDA%3D')] h-[300px]">
                            <div className="mt-32 py-3 lg:py-6">
                                <h2 className="font-bold text-white py-2 text-xl">BPO</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* <AboutUs /> */}
    </>
}