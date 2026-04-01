import { useState, useEffect } from "react";
import CartIcon from "./shoppingCart";
export default function Navbar() {
  const width = window.innerWidth < 768;
  const [MobileScreen, setMobileScreen] = useState(width);
  const [mobilemenu, setMobilemenu] = useState(false);

  function handleShow() {
    setMobilemenu(!mobilemenu);
  }

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <section className="w-full mx-auto py-4 bg-white shadow-md shadow-red-200">
      <div className="flex w-[90%] md:w-[80%] mx-auto items-center justify-between">
        <h3 className="font-bold text-2xl md:text-3xl text-[#4f39f6]">
          DigiTools
        </h3>

        {!MobileScreen && (
          <div className="flex items-center gap-6">
            <a href="">Products</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">FAQ</a>
          </div>
        )}
        <CartIcon />
        <div className="flex items-center gap-2">
          {!MobileScreen && (
            <button className="px-2 py-2 rounded-md text-black">Login</button>
          )}

          {MobileScreen && (
            <button
              onClick={handleShow}
              className="px-3 py-2 bg-gray-200 rounded-md cursor-pointer text-gray-700"
            >
              {mobilemenu ? "Close" : "Menu"}
            </button>
          )}

          {!MobileScreen && (
            <button className="px-4 py-2 rounded-3xl text-white bg-[#4f39f6]">
              Get Started
            </button>
          )}
        </div>
      </div>

      {MobileScreen && mobilemenu && (
        <div className="w-[90%] mx-auto mt-4 bg-gray-100 p-4 rounded-lg flex flex-col gap-4">
          <a
            className="rounded-2xl p-2 text-center bg-gray-200 text-black border"
            href=""
          >
            Products
          </a>
          <a
            className="rounded-2xl p-2 text-center bg-gray-200 text-black border"
            href=""
          >
            Features
          </a>
          <a
            className="rounded-2xl p-2 text-center bg-gray-200 text-black border"
            href=""
          >
            Pricing
          </a>
          <a
            className="rounded-2xl p-2 text-center bg-gray-200 text-black border"
            href=""
          >
            Testimonials
          </a>
          <a
            className="rounded-2xl p-2 text-center bg-gray-200 text-black border"
            href=""
          >
            FAQ
          </a>
          <button className="rounded-2xl p-3 bg-blue-600 text-black border">
            Login
          </button>
          <button className="bg-purple-500 rounded-2xl p-4 text-white">
            Get Started
          </button>
        </div>
      )}
    </section>
  );
}
