import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font bg-gradient-to-br from-purple-400 to-orange-400">
                <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/Landing'> 
                        <span className="ml-3 text-2xl font-serif bg-white p-2 rounded-lg"><span className='text-purple-500'>Yash</span><span className='text-orange-500'> Computech</span></span>
                    </Link>
                    <div>
                        {/* <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2" to="/Profile1">Profile</Link>
            <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2" to="/LogIn">Log In</Link>

            <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2" to="/Registration">Sign Up</Link> */}
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header;
