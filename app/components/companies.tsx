import Services from "./services";

export default function Companies() {
    return <>
        <section className="">
            <div className="border-b border-[#5DEBD7]">
                <div className="mt-4">
                    <h1 className="text-center text-3xl lg:text-3xl font-bold mt-4 p-3 lg:p-6 bg-blue-500 text-white">Our Companies</h1>
                    <div className="flex justify-center items-center gap-10 p-4 mt-6">
                        <a href="https://mericaninc.com/"> <img src="/assets/merican-logo.jpeg" alt=".../" width={100} height={100} /></a>
                        <a href="https://quberinc.com/"> <img src="/assets/quber-inc.jpeg" alt=".../" width={100} height={100} /></a>
                        <a href=""><img src="/assets/Logo6.png" alt=".../" width={200} height={200} /></a>
                        <a href="">
                            <img src="https://www.qvest.com/typo3conf/ext/mysite/Resources/Public/Images/logo-orange.svg" alt=".../" width={100} height={100} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Services />
    </>
}