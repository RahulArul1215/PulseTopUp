import React from 'react';
import { FaBolt, FaShieldAlt, FaClock, FaGift } from 'react-icons/fa';

const Fragment2 = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 py-16 " >
      <div className="w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4">Discover the benefits that set us apart and make us your top choice.</p>
          <hr className="border-t-2 border-red-600 mt-6 w-24 mx-auto"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaBolt className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast and Efficient</h3>
            <p className="text-gray-600 text-center">Our streamlined process allows you to complete transactions quickly and effortlessly.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaShieldAlt className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure and Reliable</h3>
            <p className="text-gray-600 text-center">We use advanced security measures to protect your personal and payment information.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaClock className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Availability</h3>
            <p className="text-gray-600 text-center">Access our services anytime, from anywhere. We’re here to support you around the clock.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaGift className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Offers</h3>
            <p className="text-gray-600 text-center">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fragment2;
