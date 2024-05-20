import Image from "next/image"
import Footer from "./footer"

export default function AboutUs() {
    return <>
        <section className="px-14">
            <div className="container mx-auto">
                <div className="py-6">
                    <h2 className=" text-2xl lg:text-5xl font-bold border-b-4 border-pink-500 rounded p-4 m-0 W-20"><span>About Us</span></h2>
                    <div className="flex flex-wrap lg:py-16">
                        <div className="w-full lg:w-1/2 lg:mt-4">
                            <ol className="w-full lg:px-5 mt-5 p-2">
                                <li className="font-semibold text-xl lg:text-2xl">Company Story</li>
                            <Image src="/assets/Company.jpeg" alt="company-img" className="lg:hidden lg:p-4 p-2 shadow-md mt-2 rounded flex justify-center items-center" width={200} height={200} />
                            </ol>
                            <ul className="lg:px-10 lg:mt-3 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-2 lg:p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company&apos;s journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people&apos;s lives</li>
                                {/* <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li> */}
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                        <div className="hidden lg:flex w-1/2 mt-9 justify-center items-center">
                            <Image src="/assets/Company.jpeg" alt="company-img" className="p-4 border border-black  rounded" width={700} height={200} />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:py-16">
                        <div className="w-full lg:w-1/2 lg:mt-4">
                        <ol className="lg:px-5 mt-5 lg:p-2">
                                <li className="font-semibold text-lg lg:text-2xl">
                                    Product Or Service Offering</li>
                            </ol>
                            <div className="lg:mt-9 mt-5 px-5">
                            <Image src="/assets/product.jpeg" alt="../" className="p-4 border border-black rounded" width={600} height={300} />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-10">
                        <ul className="lg:px-10 mt-10 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company&apos;s journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people&apos;s lives</li>
                                {/* <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li> */}
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:py-16">
                        <div className="w-full lg:w-1/2 lg:mt-4">
                            <ol className="lg:px-5 mt-5">
                                <li className="font-semibold text-xl lg:text-2xl">
                                    Team</li>
                            </ol>
                            <div className="lg:hidden mt-2 grid grid-cols-1 lg:grid-cols-2 shadow-md">
                            <Image src="/assets/Teams.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team1.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team2.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team3.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            </div>
                            <ul className="lg:px-10 mt-1 lg:mt-3 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company&apos;s journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people&apos;s lives</li>
                                {/* <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li> */}
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                        <div className="w-full hidden lg:w-1/2 mt-9 lg:flex justify-center items-center">
                            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-md">
                            <Image src="/assets/Teams.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team1.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team2.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            <Image src="/assets/Team3.jpeg" alt="company-img" className="p-4 rounded" width={500} height={200}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:py-16">   
                        <div className="w-full lg:w-1/2 lg:mt-4">
                        <ol className="lg:px-5 lg:mt-5">
                                <li className="font-semibold text-lg lg:text-2xl">
                                    Company Culture</li>
                            </ol>
                            <div className="mt-9 flex justify-center items-center">
                            <Image src="/assets/Culture.jpeg" alt="../" className="p-4 border border-black  rounded" width={650} height={200} />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-10">
                        <ul className="lg:px-10 py-8 lg:py-16 lg:mt-6 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed lg:p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company&apos;s journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people&apos;s lives</li>
                                <li className="p-3">Discuss your company&apos;s vision for the future and how you plan to continue growing and evolving.</li>
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}