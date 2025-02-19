import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const navItems = [
  { icon: "🚚", label: "Free Shipping" },
  { icon: "🖥️", label: "Click & Collect" },
  { icon: "📅", label: "Warranty" },
];

const rightNavItems = [
  "B2B & Design Services",
  "Deliver to area",
  "Store Locator",
  "Help",
  "Sell With Us",
];

const countries = [
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Qatar", flag: "🇶🇦" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default country
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element").innerHTML) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };

    if (isDropdownOpen) {
      addGoogleTranslateScript();
      setTimeout(() => {
        window.googleTranslateElementInit();
      }, 500);
    }
  }, [isDropdownOpen]);

  return (
    <>
      {/* Top Navbar */}
      <header className="flex flex-col lg:flex-row lg:justify-between lg:px-5 bg-zinc-900 text-stone-100 text-sm md:text-base">
        <ul className="flex items-center flex-wrap space-x-4 pt-2 lg:pt-0 justify-center">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center space-x-1">
              <span role="img" aria-label={item.label}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-center min-[550px]:flex-row min-[550px]:justify-center py-2 gap-1 min-[550px]:gap-3">
          {rightNavItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      {/* Main Navbar */}
      <div className="flex flex-col items-center justify-between text-black border-b">
        <div className="flex items-center w-full justify-around py-2">
          <img
            src="Images/logo.jpeg"
            alt="Slasa"
            className="h-20 w-20 md:h-24 md:w-24 rounded-full"
          />

          <div className="relative">
            <button
              className="md:hidden text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <i className="ri-close-large-fill"></i>
              ) : (
                <i className="ri-menu-3-line"></i>
              )}
            </button>
            {/* Menu Items */}
            <nav
              className={`flex flex-col absolute bg-stone-100 top-8 right-0 py-3 px-6 z-10 font-semibold rounded-md space-y-4 md:space-y-0 md:space-x-6 ${
                isMobileMenuOpen ? "flex" : "hidden"
              } md:flex md:flex-row md:relative md:top-0 md:bg-transparent`}
            >
              <a href="/gardening" className="cursor-pointer">
                Gardening
              </a>
              <a href="/wood" className="cursor-pointer">
                Wood
              </a>
              <a href="/acrylic" className="cursor-pointer">
                Arcylic
              </a>
              <a href="/neon" className="cursor-pointer">
                Neon
              </a>
              <a href="/toys" className="cursor-pointer">
                Toys
              </a>
              <a href="/customize" className="cursor-pointer">
                Customize
              </a>
            </nav>
          </div>
        </div>

        {/* Right Section (Search, Account, Cart, Language, and Country) */}
        <div className="flex flex-col gap-3 py-2 sm:flex-row items-center border-t border-gray-500 w-full justify-center sm:px-2 sm:py-4 text-sm">
          {/* Account Options */}
          <div className="flex items-center font-semibold justify-between w-full px-6 sm:px-2">
            <div className="flex gap-2">
              <i className="ri-heart-line text-lg"></i>
              <i className="ri-shopping-bag-line text-lg"></i>
              <div className="">
                <i className="ri-user-line text-lg"></i>
                <span>Account</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Language & Country Dropdown */}
              <div className="relative">
                <div
                  className="flex items-center space-x-2 bg-gray-100 rounded cursor-pointer px-2 text-lg"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{selectedCountry.flag}</span>
                  <i className="ri-global-line"></i>
                  <i className="ri-arrow-down-s-line"></i>
                </div>

                {/* Dropdown Menu */}
                <div
                  className={`absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-xl p-4 z-50 border border-gray-200 transition-all duration-300 ease-in-out transform ${
                    isDropdownOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Google Translate */}
                  <div className="font-semibold text-gray-700 mb-2">
                    Select Language
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300 flex justify-center items-center">
                      <div
                        id="google_translate_element"
                        className="text-gray-700"
                      ></div>
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div className="font-semibold text-gray-700 mt-2">
                    Select Country
                  </div>
                  <ul className="space-y-2">
                    {countries.map((country, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="relative w-4/5 border rounded overflow-hidden max-w-md">
            <i className="ri-search-line absolute left-0 top-1/2 -translate-y-1/2 text-lg ml-1.5"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="py-1 pl-7 bg-gray-100 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
