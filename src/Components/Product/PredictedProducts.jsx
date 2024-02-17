import React, { useState } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { Chart } from 'react-google-charts'
import { PieChart, BarChart,LineChart } from '@mui/x-charts'
export default function PredictedProducts({image,cat,name,price,platform}) {
    const [details,setDetails]=useState(false)
    const [type, setType] = useState("pie")

    const chartSetting = {
        xAxis: [
            {
                label: 'Revenue(in BDT)',
            },
        ],
        width: 400,
        height: 400,
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Fev',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: 'Apr',
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: 'May',
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: 'June',
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: 'July',
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: 'Aug',
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: 'Sept',
        },
        {
            london: 60,
            paris: 65,
            newYork: 97,
            seoul: 55,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            newYork: 76,
            seoul: 48,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            newYork: 103,
            seoul: 25,
            month: 'Dec',
        },
    ];
  return (<div className="flex w-full flex-col max-w-7xl mt-2">
        <div href="#" class="flex relative flex-col md:flex-row items-start md:items-center justify-between mx-4 max-w-7xl px-6 bg-white border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <input class="w-6 h-6 mr-2 text-green-600 bg-gray-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox"/>
            <img src={image} style={{width:"200px"}} />
            <h5 class="mb-2 mx-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white" style={{maxWidth:"300px"}}>{name}</h5>
            <p class="flex mx-2 items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>{cat}</span></p>
            <img src={platform} style={{width:"50px"}} />
            
            <p class="flex md:flex-col items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳{price}</span>avg price</p>
        </div>
        
    </div>
  )
}
