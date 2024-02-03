import React from "react";
import Heading from "../components/Shared/Heading";
import CartData from "./CartData";

// images import
import Img1 from "../images/img1.jpeg";
import Img2 from "../images/img2.jpeg";
import Img3 from "../images/img3.jpeg";
import Img4 from "../images/img4.jpeg";
import Img5 from "../images/img5.jpeg";
import Img6 from "../images/img6.jpeg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img1,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div className="m-14">
      <div className="container text-gray-400">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <CartData data={ProductsData} />
        <CartData data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
