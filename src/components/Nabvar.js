import React, { useState } from "react";
import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

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
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);    
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links section */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
                        >
                            SriptGuru
                        </a>
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
                                    <a
                                        href="#"
                                        className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                                    >
                                        Products
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </a>

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
                <div className="fixed top-4 w-full h-full bg-gray-900 z-50">
                    <button className='lg:hidden nav-btn right-0 ml-80 mt-4 p-2' onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <FaTimes className="w-4" onClick={closeMenu} />
                            ) : (
                                <FaBars className="w-4" />
                            )}
                        </button>
                    <div className="flex text-left flex-col gap-4 font-medium my-4 mx-4">
                        <h1>Home</h1>
                        <h1>Shop</h1>
                        <h1>Featured</h1>
                        <h1>Recommended</h1>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Navbar;

// export default function Navbar() {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setMenuOpen(false);
//     };

//     return (
//         <div className="flex sm:items-center sm:justify-between sm:mx-10 sm:gap-8 gap-2 mx-2 mt-4">

//             {/* left */}
//             <div className="flex-shrink-0">
//                 <img src={Logo} alt="Logo" className="sm:w-20 sm:h-20 w-10 h-10" />
//             </div>

//             {/* middle 1*/}
//             <div className="sm:flex-grow sm:flex-col">
//                 <div className="sm:flex sm:my-6 my-2">

//                     <button className="sm:p-4 text-black absolute p-2">
//                         <CiSearch className="sm:w-4" />
//                     </button>

//                     <input
//                         type="search"
//                         placeholder="Search Any Product"
//                         className="sm:pl-12 sm:pr-48 sm:py-2 sm:border pl-8 py-2 text-xs"
//                     />
//                 </div>
//             </div>

//             {/* Hamburger Menu Button */}
//             <button
//                 className="sm:hidden p-2"
//                 onClick={toggleMenu}
//             >
//                 {isMenuOpen ? (
//                     <FaTimes className="w-4" onClick={closeMenu} />
//                 ) : (
//                     <FaBars className="w-4" />
//                 )}
//             </button>

//             {/* Full-screen Hamburger Menu - Visible on Small Devices */}
//             {isMenuOpen && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
//                     <div className="flex flex-col gap-4 font-medium my-4 mx-4">
//                         <h1>Home</h1>
//                         <h1>Shop</h1>
//                         <h1>Featured</h1>
//                         <h1>Recommended</h1>
//                         <button className="bg-white p-2" onClick={closeMenu}>Sign Up</button>
//                         <button className="bg-[#d52ffa] p-2" onClick={closeMenu}>Sign In</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


