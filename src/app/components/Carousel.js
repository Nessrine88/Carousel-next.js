"use client";
import React from 'react';
import { useState } from 'react';

const Carousel = ({ slides, onSlideClick }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative" onClick={onSlideClick}>
      <div className="overflow-hidden relative">
        <div className="flex transition ease-out duration-40" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index}`} className="w-full" />
          ))}
        </div>
        <div className="absolute top-[50%] left-0 right-0 flex justify-between items-center px-5 text-[50px] text-white">
          <button onClick={previousSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`cursor-pointer mx-1 ${index === current ? "opacity-100" : "opacity-50"}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(index);
            }}
          >
            <img src={slide} alt={`Slide ${index}`} className="w-[100px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
