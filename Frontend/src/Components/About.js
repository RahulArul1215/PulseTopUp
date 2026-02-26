import React from 'react'
import image from '../Resource/image';
import '../CssFiles/about.css'
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">

      <div className='flex h-[200px] border-t border-b '>
        <h2 className="text-5xl font-poppins font-semibold mt-[140px]">About</h2>
        </div>

        <div className='flex'>
            <div className='  text-wrap w-[800px] mt-[100px] ml-10'>
                <h1 className='font-poppins text-6xl font-semibold gradient-text'>We are Provide<br/>Recharge, Payment &<br/>Booking system</h1>
                <h1 className='font-montserrat text-3xl text-gray-500 mt-10'>We offer a fast and secure mobile recharge service,<br/>ensuring you stay connected without any hassle.</h1>
            </div>
            <div className=''>
            <div className="mt-[10px] ml-[10px]"><img src={image.about} width={800}></img></div>
            </div>
        </div>
        
        <div className='mb-24 '>
            <hr className='w-9/12'></hr>
        <div className='  text-wrap  mt-[80px] ml-10'>
                <h1 className='font-poppins text-5xl font-semibold gradient-text'>Our Mission</h1>
                <h1 className='font-montserrat text-2xl text-gray-500 mt-10'>At PulseTopUp, our mission is to simplify the mobile recharge process for users, offering a seamless and secure way to stay connected. We strive to provide an intuitive and efficient platform that meets all your recharge needs, anytime, anywhere.</h1>
            </div>
        </div>
        
        <div className='mb-24 '>
            <hr className='w-9/12 ml-[400px]'></hr>
        <div className='  text-wrap  mt-[80px] ml-10'>
                <h1 className='font-poppins text-5xl font-semibold gradient-text'>Who We Are</h1>
                <h1 className='font-montserrat text-2xl text-gray-500 mt-10'>PulseTopUp is a cutting-edge mobile recharge application developed by a dedicated team of tech enthusiasts and customer service professionals. We are committed to delivering a user-friendly experience that makes recharging your mobile devices quick and easy.</h1>
            </div>
        </div>

        <div className='mb-24 '>
            <hr className='w-9/12'></hr>
        <div className='  text-wrap  mt-[80px] ml-10'>
                <h1 className='font-poppins text-5xl font-semibold gradient-text'>Our Vision</h1>
                <h1 className='font-montserrat text-2xl text-gray-500 mt-10'>We envision a world where mobile connectivity is hassle-free and accessible to everyone. Our goal is to continuously innovate and improve our services to meet the evolving needs of our users, ensuring they always have a reliable and efficient way to stay connected.</h1>
            </div>
        </div>

        <div className='mb-24 '>
            <hr className='w-9/12 ml-[400px]'></hr>
        <div className='  text-wrap  mt-[80px] ml-10'>
                <h1 className='font-poppins text-5xl font-semibold gradient-text'>Contact Us</h1>
                <h1 className='font-montserrat text-2xl text-gray-500 mt-10'>Have questions or need assistance? Feel free to reach out to us at...</h1>
                <h1 className='font-montserrat text-2xl text-gray-500 mt-1'>We are here to help!</h1>
                <div className='mt-6'>
                <button className=' buttonbtn' onClick={() => { navigate("/contact") }}> <span>Contact Us</span></button>
                </div>
            </div>
        </div>

      </div>
      <Footer/>
      </>
  )
}

export default About