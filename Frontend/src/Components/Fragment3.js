


import React from 'react';
import image from '../Resource/image';

const Fragment3 = () => {
  return (
    <div className=" bg-gray-50 -mt-[60px] pb-5 flex items-center justify-center ">
      <div className="font-montserrat py-12 ml-4 px-4 sm:px-6 lg:px-8 mt-[10px] w-[1700px] h-[700px] flex justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="mb-8 lg:mb-0 lg:mr-12 h-[600px] w-[600px]">
            <img src={image.features} alt="Features" className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </div>

          {/* Content Section */}
          <div className="flex-1 mt-5 lg:mt-0 ml-10">
            <h1 className="text-5xl text-zinc-700 font-bold text-center lg:text-left mb-10">Explore Our Features</h1>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-4 text-zinc-800">Instant Recharges</h2>
                <p className="text-gray-600">
                  Top up your phone instantly with our easy-to-use platform. No waiting times, just immediate results.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-4 text-zinc-800">Easy Payment Options</h2>
                <p className="text-gray-600">
                  Choose from multiple payment methods including credit/debit cards, net banking, and mobile wallets. Our secure payment gateway ensures a smooth transaction every time.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-4 text-zinc-800">Transaction History</h2>
                <p className="text-gray-600">
                  Keep track of all your recharges with our detailed transaction history. Easily view and manage your past transactions for better budgeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fragment3;
