import React from 'react';
import ServiceGrid from './ServiceGrid';

const images = [
  { imageUrl: "/Images/Dinnerware.jpeg", link: "#", title: "Dinnerware" },
  { imageUrl: "/Images/Linen.jpeg", link: "#", title: "Linen" },
  { imageUrl: "/Images/Dinnerware.jpeg", link: "#", title: "More Dinnerware" },
  { imageUrl: "/Images/11.png", link: "#", title: "Kitchen Essentials" },
  { imageUrl: "/Images/10.png", link: "#", title: "Cooking Tools" },
  { imageUrl: "/Images/11.png", link: "#", title: "More Kitchen Items" },
];

const KitchenGrid = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-8 mt-30 px-25">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center text-center m-4">
          <a href={image.link} className="w-full flex justify-center">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
          <p className="mt-2 self-start text-4xl">{image.title}</p>
        </div>
      ))}
    </div>
    <div className="w-full mt-20" >
  <img
    src="Images/kitchn.jpeg"
    alt=""
    className="w-full h-auto object-cover "
  />
</div>
<div className="w-full mt-20">
  <img
    src="Images/Living.jpeg"
    alt=""
    className="w-full  object-fit"
  />
</div>
<div className="w-full mt-20">
  <img
    src="Images/sofas.jpeg"
    alt=""
    className="w-full  object-fit"
  />
</div>
  <ServiceGrid/>
  
  <div className="w-full mt-20">
  <img
    src="Images/Daily.webp"
    alt=""
    className="w-full  object-fit"
  />
  </div>

   </>
  );
};

export default KitchenGrid;
