import React from 'react';
import Header from './header';
import { Link } from "react-router-dom";

function LogIn() {
    return (
        <div id='login'>
<Header/>
            <div className="flex min-h-screen items-center bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="mx-auto my-10 max-w-md">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                            <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                        </div>
                        <div className="m-7">
                            <form action="">
                                <div className="mb-6">
                                    <label for="email" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 flex justify-between">
                                        <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                        <a href="#!" className="text-sm text-gray-400 hover:text-green-500 focus:text-green-500 focus:outline-none dark:hover:text-green-300">Forgot password?</a>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" />
                                </div>
                                <div className="mb-6">
                                    <button type="button" className="w-full rounded-md bg-gradient-to-br from-purple-400 to-orange-400 px-3 py-4 text-white hover:bg-green-600 focus:outline-none">Sign in</button>
                                </div>
                                <p className="text-center text-sm text-gray-400">Don't have an account yet? <Link to="/Registration" className="text-orange-400 focus:text-orange-500 focus:underline focus:outline-none dark:focus:border-orange-800">Sign up</Link>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
