const Footer = () => {
  const footerDataRow1 = [
    {
      title: "Furniture",
      links: [
        { href: "/bedroom", label: "Bedroom" },
        { href: "/sofa-seating", label: "Sofa and Seating" },
        { href: "/living-room", label: "Living Room" },
        { href: "/dining-room", label: "Dining Room" },
        { href: "/mattresses", label: "Mattresses" },
        { href: "/office", label: "Office" },
        { href: "/outdoor", label: "Outdoor" },
        { href: "/modular", label: "Modular" },
      ],
    },
    {
      title: "Household",
      links: [
        { href: "/bedding", label: "Bedding" },
        { href: "/lighting", label: "Lighting" },
        { href: "/dining", label: "Dining" },
        { href: "/kitchen", label: "Kitchen" },
        { href: "/decor-fragrance", label: "Decor & Fragrance" },
        { href: "/cushions", label: "Cushions" },
        { href: "/wall-decor", label: "Wall decor & mirrors" },
        { href: "/garden-outdoor", label: "Garden & Outdoor" },
        { href: "/bath-laundry", label: "Bath & Laundry" },
        { href: "/storage", label: "Storage" },
        { href: "/rugs", label: "Rugs" },
        { href: "/windows", label: "Windows" },
      ],
    },
    {
      title: "Baby & Kids",
      links: [
        { href: "/kids-beds", label: "Kids Beds" },
        { href: "/room-furniture", label: "Room Furniture" },
        { href: "/kids-mattresses", label: "Mattresses" },
        { href: "/decor-lighting-kids", label: "Decor & Lighting" },
        { href: "/bedding-windows-kids", label: "Bedding & Windows" },
        { href: "/bath-storage-kids", label: "Bath & Storage" },
        { href: "/toys", label: "Toys" },
        { href: "/eat-drink", label: "Eat & Drink" },
        { href: "/rugs-carpets-kids", label: "Rugs & Carpets" },
      ],
    },
    {
      title: "New Arrivals",
      links: [
        { href: "/furniture-new", label: "Furniture" },
        { href: "/bedding-cushions-new", label: "Bedding & Cushions" },
        { href: "/lighting-new", label: "Lighting" },
        { href: "/dining-kitchen-new", label: "Dining & Kitchen" },
        { href: "/decor-fragrance-new", label: "Decor & Fragrance" },
        { href: "/bath-laundry-storage-new", label: "Bath, Laundry & Storage" },
        { href: "/rugs-carpets-new", label: "Rugs & Carpets" },
        { href: "/windows-new", label: "Windows" },
        { href: "/baby-kids-new", label: "Baby & Kids" },
      ],
    },
    {
      title: "About",
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/write-to-us", label: "Write to us" },
        { href: "/careers", label: "Careers" },
        { href: "/take-a-tour", label: "Take a Tour" },
        { href: "/shukran", label: "Shukran" },
        { href: "/in-store-offers", label: "In-Store Offers" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-conditions", label: "Terms & Conditions" },
        { href: "/b2b-design", label: "B2B Design Services" },
        { href: "/interior-design", label: "Interior Design" },
      ],
    },
  ];

  const footerDataRow2 = {
    title: "Help",
    links: [
      { href: "/help", label: "Help" },
      { href: "/contact-us", label: "Contact us" },
      { href: "/shipping", label: "Shipping" },
      { href: "/sell-with-us", label: "Sell with us" },
      { href: "/returns-process", label: "Returns Process" },
      { href: "/returns-policy", label: "Returns Policy" },
      { href: "/warranty", label: "Warranty" },
      { href: "/help-centre", label: "Help Centre" },
    ],
  };

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-2">
        {/* First Row: 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 pt-4 justify-between ml-10">
          {footerDataRow1.map((column, index) => (
            <div key={index}>
              <h1 className="font-bold text-3xl text-gray-800 mb-4">
                {column.title}
              </h1>
              <ul className="text-gray-600">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-3 text-2xl">
                    <a
                      href={link.href}
                      className="hover:underline hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row: Single Column (Help Section) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-12 justify-between ml-10">
          <div>
            <h3 className="font-bold text-3xl text-gray-800 mb-4">
              {footerDataRow2.title}
            </h3>
            <ul className="text-gray-600">
              {footerDataRow2.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-3 text-2xl">
                  <a
                    href={link.href}
                    className="hover:underline hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
