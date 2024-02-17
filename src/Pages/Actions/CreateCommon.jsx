import React, { useState } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import Navigation from '../../Components/Navigation';
import Navbar from '../../Components/Navbar';
import UploadImages from './UploadImages';
import ProductDetails from './ProductDetails';
import PricingSuggestor from './PricingSuggestor';
import ChoosePlatforms from './ChoosePlatforms';
import Agent from '../../Components/Agent';
export default function CreateCommon() {
    const steps = [
        {
            title:'Click Pictures',
            subtitle:"Click Pictures and generate images"
        },
        {
            title:'Product Details',
            subtitle:"Edit and generate product details"
        },
        // {
        //     title:'Price Suggestion',
        //     subtitle:"Pricing and platform suggestion"
        // }

    ];
    const [active, setActive] = useState(0)
    const nextStep=()=>{
        setActive(active=>active+1)
    }
    return (
        <>
            <Navigation />
            <Navbar />
            <Agent/>
            <div className="flex items-center  justify-center dark:bg-gray-900">
            <div className='flex flex-col max-w-7xl md:mt-24 mb-24 md:mb-0 items-center min-h-screen w-screen justify-center dark:bg-gray-900'>


    <ol class="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {steps.map((a, idx)=>(<>
        {active==idx && <li onClick={()=>setActive(idx)} class="flex cursor-pointer items-center text-blue-600 dark:text-blue-500">
            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {idx+1}
            </span>
            {a.title}
            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
        </li>}
        {active!=idx &&  <li onClick={()=>setActive(idx)} class="flex cursor-pointer items-center">
            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                {idx+1}
            </span>
            {a.title}
            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
        </li>}
        </>
        ))}
       {/*active!=3 && <li onClick={()=>setActive(3)} class="flex cursor-pointer items-center">
            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                {4}
            </span>
            Choose Platforms
        </li>*/}
       {/*active==3 && <li onClick={()=>setActive(3)} class="flex cursor-pointer items-center text-blue-600 dark:text-blue-500">
            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {4}
            </span>
            Choose Platforms
        </li>*/}
    </ol>
                {active==0 && <UploadImages nextStep={nextStep}/>}
                {active==1 && <ProductDetails nextStep={nextStep}/>}
                {/*active==2 && <PricingSuggestor nextStep={nextStep}/>}
        {active==3 && <ChoosePlatforms nextStep={nextStep}/>*/}
            </div>
            </div>
        </>
    )
}
