import { motion } from "framer-motion"

export default function Services() {
    return <>
        <section className="px-14">
            <div className="container mx-auto">
                <div className="py-24">
                    <h2 className="text-5xl font-bold">Our Services</h2>
                    <p className="indent-40 mt-5">Welcome to Our <b>Leventis</b>, your one-stop destination for comprehensive software solutions and BPO services. We specialize in crafting cutting-edge software products tailored to your business needs, from conceptualization to execution. Our BPO services ensure streamlined operations, allowing you to focus on your core competencies while we handle the rest. Additionally, our UI/UX design expertise ensures seamless user experiences that elevate your products above the competition.</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-1/3 p-5">
                        <motion.div whileHover={{scale:1.1}} className="bg-white  shadow-lg p-10 rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1661302908772-e19a215c118a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="mt-32 py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl">Human Resources</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-1/3 p-5">
                        <motion.div
                        whileHover={{scale:1.1}}
                        className="bg-white shadow-lg p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="mt-32 py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl"> Software Developement </h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-1/3 p-5">
                        <motion.div whileHover={{scale:1.1}} className="bg-white shadow-lg p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="mt-32 py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl">UI/UX</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-1/3 p-5">
                        <motion.div whileHover={{scale:1.1}} className="bg-white shadow-lg p-10 rounded-2xl bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')] h-[300px]">
                            <div className="mt-32 py-6 ">
                                <h2 className="font-bold text-white py-2 text-xl">UI/UX</h2>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    </>
}