import React, { useContext, useState,useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../AuthContext';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdHistory } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProfilePage = () => {
  const { info } = useContext(AuthContext);
  const { name, email, phno } = info;
  const navigate = useNavigate();


  const { user, uid } = useContext(AuthContext);
  const [recentHistory, setRecentHistory] = useState([]);

  const fetchRecentHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getuserHistory/${uid}`);
      setRecentHistory(response.data.slice(0, 3)); // Get the most recent 3 activities
    } catch (error) {
      console.error('Error fetching recent history:', error);
    }
  };

  useEffect(() => {
    fetchRecentHistory();
  }, []);




  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        <div className="container mx-auto p-4">
          <div className="relative flex flex-col items-center bg-red-500 text-white rounded-lg p-6 shadow-lg">
            <div className="absolute top-4 right-4 text-white cursor-pointer">
              <AiOutlineSetting size={24} />
            </div>
            <label htmlFor="profileImage">
              <img
                src={selectedImage || "https://via.placeholder.com/100"}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white mb-4 cursor-pointer hover:opacity-80"
              />
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-sm opacity-75">{email}</p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-white text-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-100 transition" onClick={() => { navigate("/history") }}>
                <MdHistory size={20} className="inline-block mr-2" />
                View History
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border-t-4 border-red-500">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Personal Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-red-600 font-semibold">Name:</label>
                <p>{name}</p>
              </div>
              <div>
                <label className="block text-red-600 font-semibold">Email:</label>
                <p>{email}</p>
              </div>
              <div>
                <label className="block text-red-600 font-semibold">Phone:</label>
                <p>{phno}</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Recent Activity</h2>
        <ul className="space-y-2">
          {recentHistory.length === 0 ? (
            <li className="text-gray-500">No recent activity available.</li>
          ) : (
            recentHistory.map((activity, index) => (
              <li
                key={index}
                className="bg-red-50 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <p>
                  Recharged {activity.amt} to {activity.phno} via {activity.sim}
                </p>
                <span className="text-sm text-gray-600">
                  {activity.date} at {activity.time}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

          {/* Additional Features */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loyalty Points */}
            <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Loyalty Points</h3>
              <p className="text-lg font-bold">0 Points</p>
              <p className="text-sm text-gray-600">Redeem for discounts and offers</p>
            </div>

            {/* Payment Methods */}
            <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Payment Methods</h3>
              <p className="text-lg font-bold">**** **** **** 1234</p>
              <p className="text-sm text-gray-600">Visa ending in 1234</p>
              <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-100 transition">
                Manage Cards
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
