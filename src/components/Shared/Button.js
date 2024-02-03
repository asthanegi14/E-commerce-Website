import React from "react";

const Button = ({ text, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`bg-red-800 text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
