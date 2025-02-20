import React from "react";

const images = [
  { src: "/Images/5.png", colSpan: "col-span-2", rowSpan: "row-span-1" }, 
  { src: "/Images/11.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
  { src: "/Images/10.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
  { src: "/Images/9.png", colSpan: "col-span-1", rowSpan: "row-span-2" }, // Tall image
  { src: "/Images/8.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, // Wide image
  { src: "/Images/5.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
  { src: "/Images/7.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
];

const ImageGrid = () => {
  return (
    <>

    <div className="max-w-full w-[90%] lg:w-[80%] mx-auto py-8 px-4 md:px-8 lg:px-16 bg-blue-100 translate-y-[-200px]">
      <div className="grid grid-cols-3 gap-4 md:gap-6 grid-rows-2">
        {images.map((image, index) => (
          <div key={index} className={`${image.colSpan} ${image.rowSpan}`}>
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      
    </div>
    <div className="w-full">
  <img
    src="Images/3.png"
    alt=""
    className="w-full h-auto object-cover"
  />
</div>

    </>
    
    
  );
};

export default ImageGrid;
