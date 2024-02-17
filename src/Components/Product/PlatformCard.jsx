import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
export default function PlatformCard({ img, name, price, count }) {
    const [prc, setPrc] = useState(price)
    const [cnt, setCnt] = useState(count)
    return (
        <div href="#" class="flex w-full items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <div className="w-full flex items-center justify-between">
                <div className="flex w-1/3 items-center">
                    <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px", objectFit: "cover" }} src={img} />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </div>
                <div className='flex md:flex-col'>
                    <div className="flex mx-4">
                        <button type="button" onClick={() => {
                            if (prc > 0) {
                                setPrc(prc => prc -= 1)
                            }
                        }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                        <input type="text" onChange={(e) => setPrc(parseInt(e.target.value))} value={prc} class="min-w-6 h-12 text-center text-gray-600 font-bold bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <button onClick={() => {
                            setPrc(prc => prc += 1)
                        }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>

                    </div>
                    <span className='font-normal text-center text-gray-700 dark:text-gray-400'>per item</span>
                </div>
                <div className='flex md:flex-col'>
                    <div className="flex mx-4">
                        <button type="button" onClick={() => {
                            if (cnt > 0) {
                                setCnt(cnt => cnt -= 1)
                            }
                        }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                        <input type="text" onChange={(e) => setCnt(parseInt(e.target.value))} value={cnt} class="min-w-6 h-12 text-center text-gray-600 font-bold bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <button onClick={() => {
                            setCnt(cnt => cnt += 1)
                        }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>

                    </div>
                    <span className='font-normal text-center text-gray-700 dark:text-gray-400'>products</span>
                </div>

                
                <ul className='w-1/3'>
                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing {cnt} products</span></li>
                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                </ul>
            </div>

        </div>
    )
}
