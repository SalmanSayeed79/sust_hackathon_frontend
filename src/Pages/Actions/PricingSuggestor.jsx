import React, { useState } from 'react'
import { SparkLineChart } from '@mui/x-charts';
export default function PricingSuggestor({ nextStep }) {
  const [type, setType] = useState("bar")
  const [prc, setPrc] = useState(2699)
  return (
    <>
      <div class="flex w-full flex-col items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex flex-col items-center">
          <h5 class="mb-2 text-md  tracking-tight text-gray-900 dark:text-white">The suggested price for your product is </h5>
          <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">💵 ৳2699 💵</h5>

        </div>


      </div>
      <div class="flex w-full flex-col items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <h5 class="mb-2 text-md  tracking-tight text-gray-900 dark:text-white">Avg price over the year</h5>
        <div class="inline-flex rounded-md shadow-sm my-2" role="group">
          <button type="button" onClick={() => setType("bar")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Bar Chart
          </button>
          <button type="button" onClick={() => setType("line")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Line Chart
          </button>

        </div>
        {type == "line" && <SparkLineChart
          data={[2799, 2799, 2849, 2249, 2149, 2399, 2799, 2876, 2211, 2999, 2987, 2152]}
          xAxis={{
            scaleType: 'time',
            data: [
              new Date(2023, 0, 1),
              new Date(2023, 0, 2),
              new Date(2023, 0, 3),
              new Date(2023, 0, 4),
              new Date(2023, 0, 5),
              new Date(2023, 0, 6),
              new Date(2023, 0, 7),
              new Date(2023, 0, 8),
              new Date(2023, 0, 9),
              new Date(2023, 0, 10),
              new Date(2023, 0, 11),
              new Date(2023, 0, 12),
            ],
            valueFormatter: (value) => value.toISOString().slice(0, 10),
          }}
          height={300}
          showTooltip
          showHighlight
        />}
        {type == "bar" &&
          <SparkLineChart
            plotType="bar"

            data={[2799, 2799, 2849, 2249, 2149, 2399, 2799, 2876, 2211, 2999, 2987, 2152]}

            height={300}
            showTooltip
            showHighlight

            xAxis={{
              scaleType: 'band',

              data: [
                new Date(2023, 0, 1),
                new Date(2023, 0, 2),
                new Date(2023, 0, 3),
                new Date(2023, 0, 4),
                new Date(2023, 0, 5),
                new Date(2023, 0, 6),
                new Date(2023, 0, 7),
                new Date(2023, 0, 8),
                new Date(2023, 0, 9),
                new Date(2023, 0, 10),
                new Date(2023, 0, 11),
                new Date(2023, 0, 12),
              ],
              valueFormatter: (value) => value.getFullYear(),
            }}
          />
        }

      </div>
      <div class="flex w-full flex-col items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex flex-col items-center">
          <h5 class="mb-2 text-md  tracking-tight text-gray-900 dark:text-white">Set Your Price</h5>
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

        </div>


      </div>
      <div class="flex w-full flex-col items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <button
          className="w-full bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={nextStep}
        >
          Next Step
        </button>

      </div>

    </>
  )
}
