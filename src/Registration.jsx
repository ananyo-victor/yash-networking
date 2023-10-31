import React from 'react';
import Header from './header';
import { Link } from "react-router-dom";


function Registration() {
    return (
        <div id='registration'>
            <Header/>
            <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-900 px-5 py-5">
                <div className="w-full max-w-[900px] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 text-gray-500 shadow-xl">
                    <div className="flex w-full justify-center md:flex">
                        <div className="w-full px-5 py-10 md:w-2/3 md:px-10">
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl font-bold text-gray-100">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <div>
                                <div className="-mx-3 flex">
                                    <div className="mb-5 w-1/2 px-3">
                                        <label for="" className="px-1 text-xs font-semibold">First name</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                                            <input type="text"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="Ananyo" />
                                        </div>
                                    </div>
                                    <div className="mb-5 w-1/2 px-3">
                                        <label for="" className="px-1 text-xs font-semibold">Last name</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                                            <input type="text"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="Maitra" />
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-3 flex">
                                    <div className="mb-5 w-full px-3">
                                        <label for="" className="px-1 text-xs font-semibold">Phone Number</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-email-outline text-lg text-gray-400"></i></div>
                                            <input type="email"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="98765-4321" />
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-3 flex">
                                    <div className="mb-5 w-full px-3">
                                        <label for="" className="px-1 text-xs font-semibold">Email</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-email-outline text-lg text-gray-400"></i></div>
                                            <input type="email"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="ananyomaitroan@gmail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-3 flex">
                                    <div className="mb-5 w-full px-3">
                                        <label for="" className="px-1 text-xs font-semibold">Address</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-email-outline text-lg text-gray-400"></i></div>
                                            <input type="email"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-3 flex">
                                    <div className="mb-12 w-full px-3">
                                        <label for="" className="px-1 text-xs font-semibold">Password</label>
                                        <div className="flex">
                                            <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i
                                                className="mdi mdi-lock-outline text-lg text-gray-400"></i></div>
                                            <input type="password"
                                                className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-green-500"
                                                placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-3 flex">
                                    <div className="mb-5 w-full px-3">
                                        <button
                                            className="mx-auto block w-full max-w-xs rounded-lg bg-gradient-to-br from-purple-400 to-orange-400 px-3 py-3 font-semibold text-white hover:bg-green-600 focus:bg-green-700">REGISTER
                                            NOW</button>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-gray-400">Already have an account yet? <Link to="/LogIn" className="text-orange-400 focus:text-orange-500 focus:underline focus:outline-none dark:focus:border-orange-800">Log In</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
