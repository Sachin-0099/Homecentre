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
      <div className="space-y-10 my-12 max-w-7xl mx-auto">
        {/* First Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {images1.map((image, index) => (
            <a
              key={index}
              href={image.link}
              className="w-52 sm:w-72 2xl:w-80"
            >
              <img
                src={image.imageUrl}
                alt={`Image ${index + 5}`}
                className="h-auto object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
        {/* Second Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              className="w-52 sm:w-72 2xl:w-80"
            >
              <img
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                className="h-auto object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full">
        <img
          src="Images/3.png"
          alt=""
          className="w-full max-w-7xl mx-auto"
        />
      </div>
      <div className="w-full">
        <img
          src="Images/10.png"
          alt=""
          className="w-full h-[90vh] object-fit"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 my-12">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className="w-52 sm:w-72 2xl:w-80"
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
    </>
  );
};

export default ServiceGrid;
