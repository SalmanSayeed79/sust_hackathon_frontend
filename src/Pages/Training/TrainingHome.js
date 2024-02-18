import React, { useEffect, useState } from 'react'

import Navigation from '../../Components/Navigation';
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Agent from '../../Components/Agent';

export default function TrainingHome() {
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
                
                <button onClick={()=>navigator("/train-sales")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium  rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?w=996&t=st=1708195612~exp=1708196212~hmac=a3ec4c3be3dfdfd19b8ac28b13bfb5123df78d13123d35d99f3ae5d72ff38d41" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?w=996&t=st=1708195612~exp=1708196212~hmac=a3ec4c3be3dfdfd19b8ac28b13bfb5123df78d13123d35d99f3ae5d72ff38d41" style={{width:"100px"}}/>
                        Sales Training
                </button>
                
                
                <button onClick={()=>navigator("/train-pos")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://img.freepik.com/free-vector/cashier-supermarket-isolated-person-smiling-woman-employee-uniform-standing-cash-desk-store-employee-working-grocery-shop-market-retail-commerce_575670-1280.jpg?w=996&t=st=1708195648~exp=1708196248~hmac=fc2a6f98ee871aa5f504a7e72dfc306266df0d24823a3ce758dce3d52229c72f" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://img.freepik.com/free-vector/cashier-supermarket-isolated-person-smiling-woman-employee-uniform-standing-cash-desk-store-employee-working-grocery-shop-market-retail-commerce_575670-1280.jpg?w=996&t=st=1708195648~exp=1708196248~hmac=fc2a6f98ee871aa5f504a7e72dfc306266df0d24823a3ce758dce3d52229c72f" style={{width:"100px"}}/>
                        POS Training
                </button>
                <button onClick={()=>navigator("/train-cr")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium  rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://img.freepik.com/free-vector/young-people-standing-near-cashier-grocery-store-counter-payment-buyer-flat-vector-illustration-food-meal-products_74855-8742.jpg?w=996&t=st=1708195705~exp=1708196305~hmac=a1f79e9c031a13ef87bab29236c7ab86138dd8e08af8805a867bcc0b21a3ea29" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://img.freepik.com/free-vector/young-people-standing-near-cashier-grocery-store-counter-payment-buyer-flat-vector-illustration-food-meal-products_74855-8742.jpg?w=996&t=st=1708195705~exp=1708196305~hmac=a1f79e9c031a13ef87bab29236c7ab86138dd8e08af8805a867bcc0b21a3ea29" style={{width:"100px"}}/>
                        Customer Relations
                </button>
                <button onClick={()=>navigator("/train-cashier")} class="flex flex-col items-center justify-center px-2.5 py-10 text-sm font-medium rounded-lg shadow-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <img className='hidden md:flex' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-sales-representative-illustration_23-2149347412.jpg?w=1380&t=st=1708195574~exp=1708196174~hmac=2d02fdbfb2f1661276ece7238be77af07466eccf23cbb798c143f3a9a22a47b7" style={{width:"200px"}}/>
                        <img className='flex md:hidden' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-sales-representative-illustration_23-2149347412.jpg?w=1380&t=st=1708195574~exp=1708196174~hmac=2d02fdbfb2f1661276ece7238be77af07466eccf23cbb798c143f3a9a22a47b7" style={{width:"100px"}}/>
                        Cashier Training
                </button>
            </div>

        </div>
        </>
    )
}
/*WWrite me a product description in markdown of blue ripped jeans for men. Make sure the markdown is correct. The answer should be descriptive. Include the points : title, subtitle, price, benefits, size chart,usage, caution.*/