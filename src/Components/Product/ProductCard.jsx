import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { Chart } from 'react-google-charts'
import { PieChart, BarChart,LineChart } from '@mui/x-charts'
export default function ProductCard({ name, image, price, sites }) {
    const [analytics, setAnalytics] = useState(false)
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
    return (
        <div href="#" class="flex my-2 mx-2 flex-col items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <button type="button" onClick={() => { setAnalytics(!analytics) }} class="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Flip</button>
            {!analytics && <div className="w-md">
                <div className="flex flex-col items-center">

                    <img src={image} className='w-full' style={{width:"300px"}}/>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳{price}</span>avg price</p>

                </div>
                <div className="flex flex-wrap justify-center">
                    {sites.map(a => <div href="#" class="flex flex-col items-center mx-4 mt-2 max-w-md py-2 px-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-primary-500">৳{price * 50}</h5>
                        <h5 class="mb-2 text-xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{a}</h5>
                    </div>)}
                </div>
            </div>}
            {analytics && <div className="flex-col">
                <div class="inline-flex rounded-md shadow-sm my-2" role="group">
                    <button type="button" onClick={() => setType("pie")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Sales
                    </button>
                    <button type="button" onClick={() => setType("bar")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Revenue
                    </button>
                    <button type="button" onClick={() => setType("line")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Growth
                    </button>
                </div>
                {type == "pie" && <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 500, label: 'Daraz' },
                                { id: 1, value: 75, label: 'Bikroy.com' },
                                { id: 2, value: 50, label: 'Facebook' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />}
                {type == "bar" &&
                    <div className="dark:text-white">
                        <BarChart
                            dataset={dataset}
                            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[{ dataKey: 'seoul', label: 'Revenue' }]}
                            layout="horizontal"
                            {...chartSetting}
                        /></div>}
                {type == "line" &&
                    <div >
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                            series={[
                                {
                                    data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                                    showMark: ({ index }) => index % 2 === 0,
                                },
                            ]}
                            width={400}
                            height={300}
                            className="dark:text-white"
                        /></div>}
            </div>}



        </div>
    )
}
