import React from 'react';
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            <body class="bg-gray-100">
                <div class="bg-blue500 text-white ">
                    <div class="flex items-center justify-center">

                    </div>
                    {/* <h1 class="text-2xl font-semibold text-center">John Doe</h1> */}
                </div>
                <div class="container mx-auto p-2">
                    <div class="bg-white p-5 shadow-lg rounded-lg">
                        <h2 class="text-lg font-semibold">Update Profile Details</h2>

                    </div>
                    <div className='flex justify-between h-[calc(100vh-5.5rem)] w-full'>
                        <div className='w-1/3 h-full flex flex-col justify-evenly items-center'>
                            <div className='h-40 w-40 rounded-full bg-gradient-to-br from-purple-400 to-orange-400'></div>
                            <div className='text-4xl font-semibold text-orange-500'>Ananyo Maitra</div>
                        </div>
                        <div className='bg-white rounded-lg m-1 w-2/3 h-full pt-5 px-6'>
                            <div className='flex justify-evenly w-full'>
                                <div className="mb-6 w-full pr-3">
                                    <label htmlFor="name" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Ananyo Maitra" className="w-full placeholder-black rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                                <div className="mb-6 w-full pl-3">
                                    <label htmlFor="email" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="ananyomaitroan@gmail.com" className="placeholder-black w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                            </div>
                            <div className="mb-6 w-full">
                                <label htmlFor="address" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Address</label>
                                <input type="address" name="address" id="address" placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, voluptas." className="placeholder-black w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                            </div>
                            <div className='flex justify-evenly w-full'>
                                <div className="mb-6 w-full pr-3">
                                    <label htmlFor="city" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">City</label>
                                    <input type="city" name="city" id="city" placeholder="Indore" className="w-full placeholder-black rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                                <div className="mb-6 w-full pl-3">
                                    <label htmlFor="state" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">State/Province</label>
                                    <input type="state" name="state" id="state" placeholder="Madhya Pradesh" className="placeholder-black w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                            </div>
                            <div className='flex justify-evenly w-full'>
                                <div className="mb-6 w-full pr-3">
                                    <label htmlFor="zip" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Zip Code</label>
                                    <input type="zip" name="zip" id="zip" placeholder="452012" className="w-full placeholder-black rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                                <div className="mb-6 w-full pl-3">
                                    <label htmlFor="country" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Country</label>
                                    <input type="country" name="country" id="country" placeholder="India" className="placeholder-black w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                            </div>
                            <Link to='/Profile1'><button className='bg-gradient-to-br from-purple-400 to-orange-400 w-full rounded-lg text-lg text-white hover:text-xl font-semibold p-2'>Complete Update</button></Link>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Profile
