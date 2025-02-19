import React from 'react';

const discountImages = [
    { imageUrl: "/Images/products.jpeg", link: "#" },
    { imageUrl: "/Images/products.jpeg", link: "#" },
    { imageUrl: "/Images/products.jpeg", link: "#" },
    { imageUrl: "/Images/products.jpeg", link: "#" },
  { imageUrl: "/Images/products.jpeg", link: "#" },
  { imageUrl: "/Images/products.jpeg", link: "#" },
];

const Discount = () => {
  return (
    <div className="px-25">
      {/* Image Grid - Single Row with 6 Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {discountImages.map((image, index) => (
          <a key={index} href={image.link} className="flex justify-center items-center w-full">
            <img
              src={image.imageUrl}
              alt={`Discount Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Discount;
