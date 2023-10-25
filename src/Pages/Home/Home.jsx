import { useEffect, useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";

import Marquee from "react-fast-marquee";

const Home = () => {
    const [alldata, setAlldata] = useState([]);

    useEffect(() => {
        fetch('BrandData.json')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])
    return (

        <div>
            <Banner></Banner>
            <Brand></Brand>
            <h3 className="text-6xl font-bold text-center ">Our Brand</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto'>
                {
                    alldata.map(brandData =>
                        <div key={brandData.id} className="card card-compact w-72 bg-base-200 shadow-xl" >
                            <Link to={`/${brandData.brandname}`} > <figure><img className="w-[450px] h-[300px]" src={brandData.brandnameImg} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-center">{brandData.brandname}</h2>
                                </div></Link>

                        </div>)
                }
            </div>


            <div className="py-5 ">
                <Marquee pauseOnHover>
                    <div className="container mx-auto flex gap-5">
                        <div><img className="h-[100px]" src="https://i.ibb.co/3s52tND/Flipkart-Logo-2007.png" alt="" />
                        </div>
                        <div>
                            <img className="h-[100px]" src="https://i.ibb.co/9hnLrph/amazon-PNG7.png" alt="" />
                        </div>
                        <div>
                            <img className="h-[100px]" src="https://i.ibb.co/xzgV03j/dlf-pt-best-buy-logo-png-4287568.png" alt="" />
                        </div>
                        <div>
                            <img className="h-[100px]" src="https://i.ibb.co/7kj1sLD/dlf-pt-ebay-logo-png-336844.png" alt="" />
                        </div>
                        <div>
                            <img className="h-[100px]" src="https://i.ibb.co/gVSXFSg/5-51701-target-hd-png-download.png" alt="" />
                        </div>
                        <div>
                            <img className="h-[100px]" src="https://i.ibb.co/g6sK23G/dlf-pt-walmart-png-204519.png" alt="" />
                        </div>
                    </div>
                </Marquee>
            </div>
            <h3 className="text-6xl font-bold text-center py-2">Our Membership Service </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-10 p-8 container mx-auto">
                    
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            medium
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>40
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    200+ components
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            standard
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>60
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    200+ components
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            premium
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>90
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    200+ components
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Home;