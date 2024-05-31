
"use client";
import React, { useState } from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Infos from './components/Infos';

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const slides = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
    '/images/image7.jpg',
  ];

  const handlePopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='w-[40%] h-full'>
          <Infos />
        </div>
        <div onClick={handlePopup} className='w-[60%] h-full'>
          <Carousel slides={slides} />
        </div>
      </div>
      
      {isPopupVisible && (
        <div className='fixed inset-0 bg-black flex items-center justify-center z-50 '>
          <div className=' p-5 rounded-lg'>
            <button onClick={closePopup} className='absolute top-2 right-2 text-white'>
              <i className="fa-solid fa-times"></i>
            </button>
            <div className='w-[60%] h-[60%] mx-auto'>
              <Carousel slides={slides} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}