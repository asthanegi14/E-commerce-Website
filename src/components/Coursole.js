import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
          &#x2190;
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-1/2 sm:h-80 h-40" />
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 hover:border-cyan-50">
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
