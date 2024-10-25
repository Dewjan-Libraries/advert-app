import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contact'>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Us Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">About Us</h2>
            <p className="text-gray-300">
              We are dedicated to bringing you the best deals on products and services.
              Our platform connects buyers and sellers with ease.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Contact Us</h2>
            <p className="text-gray-300">Phone: +233540502328</p>
            <p className="text-gray-300">Email: teamdewjan@gmail.com</p>
            <p className="text-gray-300">Address: 2nd Royal Avenue Street, Adenta west,Accra.</p>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400">
            &copy; 2024 Postiize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
