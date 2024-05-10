import Link from "next/link";
import Image from "next/image";
export default function SignIn() {
    return <>
        <section className="md:bg-[#5DEBD7] lg:w-screen h-screen flex justify-start md:justify-center md:items-center flex-col gap-6">
            <div className="md:w-[450px] bg-white lg:shadow-md">
                <div className="lg:p-10 p-5">
                    <div className="flex flex-col justify-start">
                    <Link href={"/"}>
                        <Image src={"/assets/Logo6.png"} alt="Logo" width={180} height={180} className="rounded text-gray-400 w-[158px] h-[50px]" blurDataURL="data:..." placeholder="blur" />
                    </Link>
                    <h1 className="px-2 py-1 lg:py-3 font-semibold text-2xl tracking-wider">Sign in</h1>
                    <div className="py-2">
                        <input type="Search" placeholder="Email,Phone, or Skype" className="w-full text-sm lg:text-base font-normal px-2 outline-none border-b border-gray-400" />
                    </div>
                    <p className="text-xs lg:text-sm px-2 lg:py-2">No account? <a href="" className="text-blue-600">Create one!</a></p>
                    </div>
                    <div className="lg:w-full flex justify-end mt-14">
                        <button className="px-8 py-1 border-none bg-[#0067B8] text-white">Next</button>
                    </div>
                </div>
            </div>
            <div className=" w-[300px] md:w-[450px] bg-white p-2 border md:border-none border-black lg:shadow-md">
                <p className="flex px-10 gap-4 items-center text-lg"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                    Sign-in options</p>
            </div>
        </section>
    </>
};