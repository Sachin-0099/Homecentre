import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  const images = [
    '/Images/img1.jpeg',
    '/Images/img2.jpeg',
    '/Images/img3.jpeg',
    '/Images/img4.jpeg',
    '/Images/img5.jpeg',
    '/Images/B4.jpeg',
    '/Images/B5.jpeg',
    '/Images/B6.jpeg',
    '/Images/B7.jpeg',
    '/Images/Bathroom.jpeg',
    '/Images/Bedroom.jpeg',
    '/Images/Blueprint.jpeg',
    '/Images/Blueprint2.jpeg',
    '/Images/kitchen.jpeg',
    '/Images/Layout.jpeg',
    '/Images/dinning.jpeg',
    '/Images/Construction.jpeg',
    '/Images/C2.jpeg',
    '/Images/c3.jpeg',
    '/Images/C4.jpeg',
    '/Images/C5.jpeg',
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Only show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 3000, // Auto play interval
    arrows: true, // Show arrows for navigation
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
  <img 
    src="Images/1.png" 
    alt=""  
    className="w-full h-[200px] object-cover mx-auto"
  />
</div>
<div>
      
<img 
    src="Images/2.png" 
    alt=""  
    className="w-[90vh] h-[200px] object-cover mx-auto translate-x-[80px] space-x-2 pt-20"
  />
</div>

    </div>
  );
};

export default Hero;
