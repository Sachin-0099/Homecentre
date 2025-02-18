import React from "react";

const images = [
  { imageUrl: "/Images/8.png", link: "#" },
  { imageUrl: "/Images/9.png", link: "#" },
  { imageUrl: "/Images/10.png", link: "#" },
  { imageUrl: "/Images/11.png", link: "#" },
];

const ImageGrid2 = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-40 md:grid-cols-2 lg:grid-cols-2">
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
    <div className="w-full" >
  <img
    src="Images/4.png"
    alt=""
    className="w-full h-auto object-cover -ml-32"
  />
</div>
<div className="w-full">
  <img
    src="Images/9.png"
    alt=""
    className="w-full h-[90vh] object-fit"
  />
</div>

    </>
  );
};

export default ImageGrid2;
