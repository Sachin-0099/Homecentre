const products = [
  { 
    imageUrl: "/Images/machine.jpeg", 
    link: "#", 
    title: "Machine", 
    price: "AED 223", 
    oldPrice: "AED 279", 
    discount: "20%" 
  },
  { 
    imageUrl: "/Images/jar.jpg", 
    link: "#", 
    title: "Jar Set", 
    price: "AED 25", 
    oldPrice: "AED 39", 
    discount: "35%" 
  },
  { 
    imageUrl: "/Images/bottle.jpg", 
    link: "#", 
    title: "Bottle Rack", 
    price: "AED 48", 
    oldPrice: "AED 89", 
    discount: "46%" 
  },
  { 
    imageUrl: "/Images/bottle.jpg", 
    link: "#", 
    title: "Storage Trolley", 
    price: "AED 226", 
    oldPrice: "AED 349", 
    discount: "35%" 
  },
];

const Products = () => {
  return (
    <>
    <div className="p-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-10 ">
        <h1 className="py-6 text-4xl lg:text-5xl">Price drop on select products | <a href="#" className=" text-blue-400">View All</a> </h1>
      
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Product Image */}
            <a href={product.link} className="relative w-full">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-auto object-cover rounded-lg" 
              />
              {/* Discount Badge */}
           
              <div className="absolute bottom-3 left-3 bg-white px-2 py-1 text-xs font-bold shadow">
                DAILY DEAL
              </div>
              <div className="absolute bottom-10 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                {product.discount} OFF
              </div>
            </a>
            
            {/* Product Title */}
            <p className="mt-3 text-3xl font-regular">{product.title}</p>

            {/* Price Section */}
            <div className="text-2xl font-bold">
              <span className="text-black">{product.price}</span>
              <span className="text-gray-500 line-through text-sm ml-2">{product.oldPrice}</span>
            </div>
          </div>
        ))}
        
      </div>
    </div>
    <div className="w-full mt-20">
  <img
    src="Images/Bagthebestdeal.jpeg"
    alt=""
    className="w-full max-w-7xl mx-auto"
  />
  </div>
    </>

  );
};

export default Products;
