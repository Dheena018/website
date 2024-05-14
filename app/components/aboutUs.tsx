export default function AboutUs() {
    return <>
        <section className="px-14">
            <div className="container mx-auto">
                <div className="py-12 lg:py-24">
                    <h2 className=" text-2xl lg:text-5xl font-bold border-b-4 border-pink-500 rounded p-4 m-0 W-20"><span>About Us</span></h2>
                    <div className="flex flex-wrap lg:py-16">
                        <div className="w-full lg:w-1/2 lg:mt-4">
                            <ol className="lg:px-5 mt-5 p-2">
                                <li className="font-semibold text-xl lg:text-2xl">Company Story</li>
                            <img src="/assets/Company.jpeg" alt="company-img" className="lg:hidden lg:p-4 p-2 shadow-md mt-2 rounded flex justify-center items-center" />
                            </ol>
                            <ul className="lg:px-10 lg:mt-3 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-2 lg:p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company's journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people's lives</li>
                                {/* <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li> */}
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                        <div className="hidden lg:flex w-1/2 mt-9 justify-center items-center">
                            <img src="/assets/Company.jpeg" alt="company-img" className="p-4 border border-black  rounded" />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:py-16">
                        <div className="w-full lg:w-1/2 lg:mt-4">
                        <ol className="lg:px-5 mt-5 lg:p-2">
                                <li className="font-semibold text-lg lg:text-2xl">
                                    Product Or Service Offering</li>
                            </ol>
                            <div className="lg:mt-9 mt-5 flex justify-center items-center">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="../" className="p-4 border border-black  rounded" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-10">
                        <ul className="lg:px-10 mt-6 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company's journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people's lives</li>
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
                            <img src="/assets/Teams.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team1.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team2.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team3.jpeg" alt="company-img" className="p-4   rounded" />
                            </div>
                            <ul className="lg:px-10 mt-1 lg:mt-3 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company's journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people's lives</li>
                                {/* <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li> */}
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                        <div className="w-full hidden lg:w-1/2 mt-9 lg:flex justify-center items-center">
                            {/* <div className="w-1/2">
                            <img src="/assets/Teams.jpeg" alt="company-img" className="p-4 border border-black  rounded" />
                            </div>
                            <div className="w-1/2">
                            <img src="/assets/Teams.jpeg" alt="company-img" className="p-4 border border-black  rounded" />
                            </div> */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-md">
                            <img src="/assets/Teams.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team1.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team2.jpeg" alt="company-img" className="p-4   rounded" />
                            <img src="/assets/Team3.jpeg" alt="company-img" className="p-4   rounded" />
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
                            <img src="/assets/Culture.jpeg" alt="../" className="p-4 border border-black  rounded" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-10">
                        <ul className="lg:px-10 py-8 lg:py-16 lg:mt-6 list-disc text-justify whitespace-normal text-sm lg:text-base font-normal tracking-wide lg:tracking-wider leading-relaxed lg:p-4"> 
                                <li className="p-3">Start with a captivating headline that grabs attention</li>
                                <li className="p-3">Introduce your company briefly, highlighting its mission and values</li>
                                <li className="p-3">Provide a teaser of what readers can expect to learn about your company's journey.</li>
                                <li className="p-3">Introduce key members of your team, highlighting their roles and expertise.</li>
                                <li className="p-3">Share stories or data illustrating the positive impact your company has had on customers, communities, or the environment.</li>
                                <li className="p-3">Explain how your products or services have made a difference in people's lives</li>
                                <li className="p-3">Discuss your company's vision for the future and how you plan to continue growing and evolving.</li>
                                {/* <li className="p-3">Invite readers to join you on your journey and become part of your community.</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}