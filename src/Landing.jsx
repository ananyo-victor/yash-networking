import React from 'react';
// import Header from "./header";
import { Link } from 'react-router-dom';
import picture from './image.jpg';

function Landing() {
  return (
    <div className='bg-gradient-to-br from-purple-400 to-orange-400 h-screen'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-serif bg-white p-2 rounded-lg"><span className='text-purple-500'>Yash</span><span className='text-orange-500'> Computech</span></span>
          </a>
          <div>
            <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-100 rounded text-base text-orange-500 mt-4 md:mt-0 mx-2" to="/Profile1">Profile</Link>
            <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-100 rounded text-base text-orange-500 mt-4 md:mt-0 mx-2" to="/LogIn">Log In</Link>

            <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-100 rounded text-base text-orange-500 mt-4 md:mt-0 mx-2" to="/Registration">Sign Up</Link>
          </div>
        </div>

      </header>
      <div className='flex justify-evenly w-screen mt-14'>
        <div className='text-white font-semibold text-lg w-1/2 p-6 text-justify'>Yash Computech Solutions delivers technology solutions that improve the efficiency, productivity, and profitability of our clients.
          We have extensive experience in virtually all technology-related fields, ranging from software development and IT consulting services, to website design and development solutions. We are also a Microsoft Certified Partner.
          We provide valuable customer service and support to back every project we undertake. We operate our business efficiently so the costs of our products remain competitive. We invest our resources into our community. We train and educate our employees.
          Yash Computech Solutions has a global outlook and ambition, but we understand that success comes to companies that operate with integrity.</div>
        <div className='w-1/2 h-auto flex justify-center pt-5'>
          <img src={picture} alt="/" className='h-80 w-80' />
        </div>
      </div>
    </div>
  )
}

export default Landing
