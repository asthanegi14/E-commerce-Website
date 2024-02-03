// Dropdown.js

import React from "react";
import { FaCaretDown } from "react-icons/fa6";
// import N1 from '../images/n1.jpeg';
// import N2 from '../images/n2.jpeg';
import N3 from '../images/n3.jpeg';
// import N4 from '../images/n4.jpeg';
import N5 from '../images/n5.webp';
// import N6 from '../images/n6.jpeg';

const DropdownFashion = [
  { id: 1, name: "Mens", link: "/#" },
  { id: 2, name: "Womens", link: "/#" },
  { id: 3, name: "Mens", link: "/#" },
  { id: 4, name: "Womens", link: "/#" },
  { id: 5, name: "Womens", link: "/#" },
  { id: 6, name: "Mens", link: "/#" },
  { id: 7, name: "Womens", link: "/#" },
  { id: 8, name: "Womens", link: "/#" },
  { id: 9, name: "Mens", link: "/#" },
];

const Dropdown = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="lg:block">
              <ul className="flex flex-cols-3 sm:flex gap-4 overflow-x-auto scrollbar-hide">
                {DropdownFashion.map((data, index) => (
                  <li
                    key={index}
                    className="flex-shrink-0 w-full sm:w-40 flex flex-col items-center cursor-pointer group"
                  >
                    <img
                      src={index % 2 === 0 ? N3 : N5}
                      alt={`image1${index}`}
                      className="w-fit h-20 rounded justify-center"
                    />
                    <p className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                      {data.name}
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
