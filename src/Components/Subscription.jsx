import React from "react";

const images = [
  { imageUrl: "/Images/App.svg", link: "#" },
  { imageUrl: "/Images/Appgallery.svg", link: "#" },
  { imageUrl: "/Images/Gpay.svg", link: "#" },
];

const Subscription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-16 bg-white">
      {/* Subscription Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 px-28">
        <h2 className="text-6xl font-bold mb-4">Subscribe to our awesome emails.</h2>
        <p className="text-gray-500 mb-6 text-2xl">
          Get our latest offers and news straight in your inbox.
        </p>
        <div className="flex border rounded-lg overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Please enter an email address"
            className="w-full p-5 text-lg bg-gray-100 outline-none"
          />
          <button className="bg-blue-500 text-white px-8 py-4 text-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Download Section */}
      <div className="w-full md:w-1/2 translate-x-[450px]">
        <h2 className="text-7xl font-bold mb-4 p-2">Download our apps</h2>
        <p className="text-gray-500 mb-6 text-3xl pb-2">Shop our products and offers on-the-go.</p>
        <div className="flex gap-8 flex-wrap">
          {images.map((img, index) => (
            <a key={index} href={img.link}>
              <img src={img.imageUrl} alt="Download option" className="h-20" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
