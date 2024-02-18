import React, { useEffect, useState } from 'react'

import Navigation from '../../Components/Navigation';
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Agent from '../../Components/Agent';

export default function CreateCategory() {
        const navigator=useNavigate()
    
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const [lineDone, setLineDone] = useState(false)
    const [botReady, setBotReady] = useState(false)
    const [currentOption, setCurrentOption] = useState("-1")

    return (
        <>
        <Navigation />
            <Navbar />
            {/**<Agent/>**/}
        <div className='flex flex-col items-center min-h-screen w-screen justify-center dark:bg-gray-900'>
            
          <h3 className="text-3xl mb-4 font-semibold dark:text-primary-500">
                                Choose your category
                            </h3>
            <div className='min-h-1/2 grid md:grid-cols-4 gap-6 md:mx-24 mb-24 md:mb-0 dark:bg-gray-900'>
                
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/52Z2rv09/6.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/52Z2rv09/6.png" style={{width:"100px"}}/>
                        Men's clothing
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/13gzMMyY/1.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/13gzMMyY/1.png" style={{width:"100px"}}/>
                        Women's clothing
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/QtqNVyqV/2.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/QtqNVyqV/2.png" style={{width:"100px"}}/>
                        Accessories
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-20 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/QN0x3vty/4.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/QN0x3vty/4.png" style={{width:"100px"}}/>
                        Pharmaceuticals
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/Hn7SBfPk/Bebsha-ai-3.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/Hn7SBfPk/Bebsha-ai-3.png" style={{width:"100px"}}/>
                        General Store
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/XvdY6JGf/3.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/XvdY6JGf/3.png" style={{width:"100px"}}/>
                        Leather Goods
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/kG1nvRzm/7.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/kG1nvRzm/7.png" style={{width:"100px"}}/>
                        Paper, Packaging and Printing
                </button>
                <button onClick={()=>navigator("/listing")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium bg-gray-100 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://i.postimg.cc/QCx87J6m/8.png" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://i.postimg.cc/QCx87J6m/8.png" style={{width:"100px"}}/>
                        Electrical and Electronic Products
                </button>
            </div>

        </div>
        </>
    )
}
/*WWrite me a product description in markdown of blue ripped jeans for men. Make sure the markdown is correct. The answer should be descriptive. Include the points : title, subtitle, price, benefits, size chart,usage, caution.*/