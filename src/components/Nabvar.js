import React, { useState } from "react";
import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
// import DropDown from './DropDown';
import Carousel from "./Coursole";
import B1 from '../images/b1.avif';
import B2 from '../images/b2.avif';
import B3 from '../images/b3.avif';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Freatures",
        link: "/#freatures",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Mens",
        link: "/#",
    },
    {
        id: 2,
        name: "Womens",
        link: "/#",
    },
    {
        id: 3,
        name: "Kids",
        link: "/#",
    },

    {
        id: 4,
        name: "Grocery",
        link: "/#",
    },
];
const Navbar = ({ handleOrderPopup }) => {
    const images = [
        B1,
        B2,
        B3,
    ];
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const navRef = useRef();

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links section */}
                    <div className="flex items-center gap-4">
                        <p className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            FlipKart
                        </p>
                        {/* Menu Items */}
                        <div className="hidden lg:block">
                            <ul className=" flex items-center gap-4">
                                <nav ref={navRef}>
                                    <ul className=" flex items-center gap-4">
                                        {MenuLinks.map((data, index) => (
                                            <li key={index}>
                                                <a
                                                    href={data.link}
                                                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                                >
                                                    {" "}
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                {/* Dropdown  */}
                                <li className="relative cursor-pointer group">
                                    <p className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                                    >
                                        Products
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </p>

                                    {/* Dropdown Links */}
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                                        <ul className="space-y-2">
                                            {DropdownLinks.map((data, index) => (
                                                <li>
                                                    <a
                                                        className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                                        href={data.link}
                                                    >
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Navbar Right section */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Search Bar section */}
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-bar text-gray-500 dark:text-gray-400 bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                            />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>

                        <button className='lg:hidden nav-btn' onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <FaTimes className="w-4" onClick={closeMenu} />
                            ) : (
                                <FaBars className="w-4" />
                            )}
                        </button>
                        {/* Order-button section */}
                        <button className="relative p-3" onClick={handleOrderPopup}>
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                                6
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed top-0 w-full h-full bg-gray-900 z-50">
                    <button className='lg:hidden nav-btn right-0 ml-80 mt-4 p-2' onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FaTimes className="w-4" onClick={closeMenu} />
                        ) : (
                            <FaBars className="w-4" />
                        )}
                    </button>
                    <div className="flex text-left flex-col gap-4 font-medium my-4 mx-4">
                        <ul>

                            <li className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">Home</li>
                            <li className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">Shop</li>
                            <li className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">Featured</li>
                            <li className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">Recommended</li>
                            <li className="relative cursor-pointer group">
                                <p className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                                >
                                    Products
                                    <span>
                                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                    </span>
                                </p>

                                {/* Dropdown Links */}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                                    <ul className="space-y-2">
                                        {DropdownLinks.map((data, index) => (
                                            <li>
                                                <a
                                                    className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                                    href={data.link}
                                                >
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* <DropDown /> */}
            <div className="container mx-auto mt-8">
                <Carousel images={images} />
            </div>
        </div>
    );
};
export default Navbar;
