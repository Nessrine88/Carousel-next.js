import React from 'react';
import Carousel from "./components/Carousel";

export default function Home() {
  let slides = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image10.jpg',
    './images/image11.jpg',
    './images/image7.jpg',
  ];

  return (
    <div className='w-[60%] m-auto pt-11'>
      <Carousel slides={slides} />
    </div>
  );
}
