import React from "react";
// import Slider from "./Slider";
import PicImage from "../images/header_img.png"
// import B1 from '../images/b1.jpeg';
// import B2 from '../images/b2.jpeg';

export default function Header() {
    return (
        <div className="bg-white border-gray-200 dark:bg-gray-800 sm:mx-20 sm:my-6 m-4 rounded-sm">
            <div className="sm:max-w-screen-xl sm:flex sm:flex-row flex-col items-center sm:gap-40">
                {/* First Section with Image */}
                <div>
                    <img src={PicImage} alt="Pic" className="sm:max-w-sm max-w-40 sm:left-0 mx-20" />
                </div>

                {/* Second Section with Text */}
                <div className="p-4 text-balance sm:text-left text-center">

                    <h1 className="text-3xl font-bold text-yellow-700 font-large">Unleash the Beat
                    </h1>
                    <br />
                    <p className="text-white font-bold">
                        We believe that buying headphones should be a delightful experience that leaves you smiling and looking effortlessly cool, all while keeping your wallet happy.

                    </p>
                    <br />

                    <button className="text-white bg-yellow-700 p-2 rounded cursor-pointer">Learn More</button>
                </div>
            </div>
        </div>


        // <div id="default-carousel" class="relative w-full" data-carousel="slide">
        //     <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         <div className="1 opacity-100 duration-700 ease-in-out" data-carousel-item>
        //             <img src={B1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //         <div className="2 opacity-0 duration-700 ease-in-out" data-carousel-item>
        //             <img src={B2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        //         </div>
        //     </div>
        //     {/* <!-- Slider indicators --> */}
        //     <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        //         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        //     </div>
        //     {/* <!-- Slider controls --> */}
        //     <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        //             </svg>
        //             <span class="sr-only">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        //             </svg>
        //             <span class="sr-only">Next</span>
        //         </span>
        //     </button>
        // </div>

        // <div>
        //     <Slider />
        // </div>

    );
}
