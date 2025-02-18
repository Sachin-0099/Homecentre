import React from 'react';

const images = [
  { imageUrl: "/Images/8.png", link: "#" },
  { imageUrl: "/Images/9.png", link: "#" },
  { imageUrl: "/Images/10.png", link: "#" },
  { imageUrl: "/Images/11.png", link: "#" },
];

const images1 = [
  { imageUrl: "/Images/12.png", link: "#" },
  { imageUrl: "/Images/13.png", link: "#" },
  { imageUrl: "/Images/14.png", link: "#" },
  { imageUrl: "/Images/15.png", link: "#" },
];

const ServiceGrid = () => {
  return (
    <>
    <div className="px-48 mt-30 space-y-10">


      {/* First Grid */}
      <div className="grid grid-cols-4 gap-8 mb-20">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className="flex justify-center items-center w-full"
          >
            <img
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </div>

      {/* Second Grid */}
  
      
    </div>
        <div className="w-full" >
        <img
          src="Images/3.png"
          alt=""
          className="w-full h-auto object-cover "
        />
      </div>
      <div className="w-full">
  <img
    src="Images/11.png"
    alt=""
    className="w-full h-[90vh] object-fit"
  />
</div>
<div className="grid grid-cols-4 gap-8 px-40 mt-40">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className="flex justify-center items-center w-full"
          >
            <img
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
      <div className="w-full mt-20">
  <img
    src="Images/11.png"
    alt=""
    className="w-full h-[90vh] object-fit"
  />
</div>
<div className="grid grid-cols-4 gap-8 mt-20 ">
        {images1.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className="flex justify-center items-center w-full"
          >
            <img
              src={image.imageUrl}
              alt={`Image ${index + 5}`} 
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
      <div className="w-full mt-20">
  <img
    src="Images/10.png"
    alt=""
    className="w-full h-[90vh] object-fit"
  />
</div>
      </>
  );
};

export default ServiceGrid;
