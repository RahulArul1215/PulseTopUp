
import React,{useState} from 'react';
import '../CssFiles/footer.css'
import axios from 'axios';
import { toast } from 'react-toastify';



const Footer = () => {
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

const handleSubscribe = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`http://localhost:8080/subscribe/${email}`);
    setMessage(response.data);
    toast.success("Success")
  } catch (error) {
    toast("Error")
    console.log(error.message)
    setMessage('Subscription failed. Please try again.');
  }
};
  return (
    <footer className="bg-pinkback pt-10 sm:mt-10">
      <div className="max-w-6xl m-auto text-gray-800 grid grid-cols-1 md:grid-cols-5 gap-5 justify-between">
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Services</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile Recharge</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Bill Payment</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Flight Tickets Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Train Ticket Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Hotel Booking</a></li>
          </ul>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliate</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Team</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Help Center</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
          </ul>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2">Policies</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Grievance Policy</a></li>
          </ul>
        </div>

        {/* <div className="p-5 md:col-span-2 lg:col-span-1 w-[400px]">
          <form className="form mb-7">
            <h3 className="font-extrabold text-3xl mb-2 text-white">Subscribe to our newsletter.</h3>
            <p className="description text-gray-600 mb-4">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
            <div>
              <input placeholder="Enter your email" type="email" name="email" id="email-address" className="w-full mb-2 p-2 border border-gray-300 rounded"/>
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Subscribe</button>
            </div>
          </form>
        </div> */}

<div className="max-w-sm mx-auto bg-gradient-to-r from-red-600 via-red-600 to-red-600 text-white p-5 pl-6 pr-6 rounded-lg shadow-lg mb-9 ">
      <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter.</h3>
      <p className="mb-4">Stay updated with the latest recharge plans, exclusive offers, and more! Subscribe to our newsletter and never miss out on exciting updates and discounts.

</p>
      <form className="flex" onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="Enter your email"
          className="flex-grow p-2 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-grey"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
    </div>

      </div>

      <div className="bg-gray-200 py-2">
        <div className="max-w-6xl m-auto text-gray-800 flex justify-between">
          <div>
            <p>Copyright © 2022 <a href="#" className="text-blue-600 hover:underline">Rahul A</a>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
