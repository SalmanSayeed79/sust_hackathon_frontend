import React, { useEffect, useState } from 'react'

import Navigation from '../../Components/Navigation';
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Agent from '../../Components/Agent';

export default function Tasks() {
    const navigator=useNavigate()


    return (
        <>
        <Navigation />
            <Navbar />
            <Agent/>
        <div className='flex items-center min-h-screen w-screen justify-center dark:bg-gray-900'>
            <div className='min-h-1/2 mt-4 grid md:grid-cols-2 gap-4 md:gap-20 md:mx-24 mb-24 md:mb-0 dark:bg-gray-900'>
                <button onClick={()=>navigator("/train")} class="flex flex-col items-center justify-center px-20 py-2 md:py-10 text-lg font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/R0sdQsFb/1.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/R0sdQsFb/1.png" style={{width:"100px"}}/>
                        Train Employees
                </button>
                <button onClick={()=>navigator("/analyze")} class="flex flex-col items-center justify-center px-2.5  py-2 md:py-10  text-lg font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none  dark:text-white focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/fW0CmvhB/4.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/fW0CmvhB/4.png" style={{width:"100px"}}/>
                        Analyze Data                
                </button>
                <button onClick={()=>navigator("/category")} class="flex flex-col items-center justify-center px-2.5 py-2 md:py-10  text-lg font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none  dark:text-white focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/131jfjnG/Bebsha-ai-2.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/131jfjnG/Bebsha-ai-2.png" style={{width:"100px"}}/>
                        List Products
                </button>
                <button onClick={()=>navigator("/track")} class="flex flex-col items-center justify-center px-2.5  py-2 md:py-10  text-lg font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none  dark:text-white focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/DZRcRS1r/2.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/DZRcRS1r/2.png" style={{width:"100px"}}/>
                        Manage Orders
                </button>
            </div>

        </div>
        </>
    )
}
/*WWrite me a product description in markdown of blue ripped jeans for men. Make sure the markdown is correct. The answer should be descriptive. Include the points : title, subtitle, price, benefits, size chart,usage, caution.*/