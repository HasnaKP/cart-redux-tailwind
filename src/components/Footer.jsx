import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white-800 py-4 mt-auto bg-violet-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Intro */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold text-white">
              <i className="fa-solid fa-cart-plus"></i>
              <span className="ml-2">E-Cart</span>
            </h5>
            <p className="text-white mt-2">
              Designed and built with all the love in the world by the Luminar team with the help of our contributors.
            </p>
            <p className="text-white">Code licensed Luminar, docs CC BY 3.0.</p>
            <p className="text-white">Currently v5.3.2.</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold text-white">Links</h5>
            <div className="flex flex-col space-y-2 mt-2">
              <Link to={'/'} className="text-white hover:text-white">Home Page</Link>
              <Link to={'/cart'} className="text-white hover:text-white">Cart Page</Link>
              <Link to={'/wishlist'} className="text-white hover:text-white">Wishlist Page</Link>
            </div>
          </div>

          {/* Guides */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold text-white">Guides</h5>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="https://react-bootstrap.netlify.app/" className="text-white hover:text-white">React</a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction" className="text-white hover:text-white">React Bootstrap</a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/docs/components/accordion" className="text-white hover:text-white">React Router</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold text-white">Contact Us</h5>
            <form className="mt-2">
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 rounded-md border border-gray-400 bg-white text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  placeholder="Enter your email here"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
            <div className="flex mt-4 space-x-4">
              <a href="https://x.com/?lang=en&mx=2" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/direct/inbox/" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/sibil-a-555608336/" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/login" className="text-gray-300 hover:text-white">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="tel:67846576574564" className="text-gray-300 hover:text-white">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-300">
          Copyright © September 2024 batch. E-Cart. Built with React Redux
        </div>
      </div>
    </footer>
  );
};

export default Footer;