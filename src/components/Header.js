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

    );
}
