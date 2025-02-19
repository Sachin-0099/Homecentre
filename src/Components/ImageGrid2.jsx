const images = [
  { imageUrl: "/Images/8.png", link: "#" },
  { imageUrl: "/Images/9.png", link: "#" },
  { imageUrl: "/Images/10.png", link: "#" },
  { imageUrl: "/Images/11.png", link: "#" },
];

const ImageGrid2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 min-[470px]:grid-cols-2 max-w-2xl gap-4 place-items-center mx-auto">
        {images.map((image, index) => (
          <a key={index} href={image.link} className="w-52 sm:w-72 2xl:w-80">
            <img
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
              className="object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
      <div className="w-full">
        <img src="Images/4.png" alt="" className="w-full max-w-7xl mx-auto" />
      </div>
      <div className="w-full">
        <img
          src="Images/11.png"
          alt=""
          className="w-full h-[90vh] object-fit"
        />
      </div>
    </>
  );
};

export default ImageGrid2;
