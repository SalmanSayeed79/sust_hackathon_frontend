import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
export default function UploadImages({nextStep}) {
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [img3, setImg3] = useState(null)
    const [generating, setGenerating] = useState(false)
    const [doneGeneration, setDoneGeneration] = useState(false)
    const generatedImages = [
    "https://i.postimg.cc/LsC5cHRD/5ab1ffdf-53a0-4873-ad44-67fb8e355543.jpg",
    "https://i.postimg.cc/sxS2G7WH/6aa25d82-1675-436e-bbf1-2d94e7378aa9.jpg",
    "https://i.postimg.cc/kMtGH3HN/f9d33942-1898-4918-8ea8-e0136aed8895.jpg"

    ]
    const generateImages = () => {
        setGenerating(true);
        const timer = setTimeout(() => {
            setGenerating(false)
            setDoneGeneration(true)
        }, 1000);
        console.log("Timer done")
        return () => clearTimeout(timer)
    }
    return (
        <>
            { <div className='w-full max-w-7xl md:px-24 flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700 '>

                <input type="file" id="imgUpload1" className="hidden" onChange={e => setImg1(URL.createObjectURL(e.target.files[0]))} />
                {img1 == null && <label for="imgUpload1" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/k4B4hm38/1.png" style={{ width: "200px" }} />
                    <img className='flex md:hidden' src="https://i.postimg.cc/k4B4hm38/1.png" style={{ width: "100px" }} />
                    Click Front View
                </label>}
                {img1 != null && <label for="imgUpload1" class="block max-w-sm  mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src={img1} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={img1} style={{ width: "200px" }} />
                </label>}
                <input type="file" id="imgUpload2" className="hidden" onChange={e => setImg2(URL.createObjectURL(e.target.files[0]))} />
                {img2 == null && <label for="imgUpload2" class="block max-w-smmr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/Jnvhf2MF/2.png" style={{ width: "200px" }} />
                    <img className='flex md:hidden' src="https://i.postimg.cc/Jnvhf2MF/2.png" style={{ width: "100px" }} />
                    Click Top View
                </label>}
                {img2 != null && <label for="imgUpload2" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src={img2} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={img2} style={{ width: "200px" }} />
                </label>}
                <input type="file" id="imgUpload3" className="hidden" onChange={e => setImg3(URL.createObjectURL(e.target.files[0]))} />
                {img3 == null && <label for="imgUpload3" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/D0GznPzw/3.png" style={{ width: "200px" }} />
                    <img className='flex md:hidden' src="https://i.postimg.cc/D0GznPzw/3.png" style={{ width: "100px" }} />
                    Click Right View
                </label>}
                {img3 != null && <label for="imgUpload3" class="block max-w-sm  mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src={img3} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={img3} style={{ width: "200px" }} />

                </label>}
            </div>}
            {!generating && !doneGeneration &&<div className='w-full max-w-7xl mt-4 md:px-24 flex flex-col md:flex-row items-center justify-center'>
                <button
                    className="w-full bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={generateImages}
                >
                    Generate Images
                </button>
            </div>}
            {generating && <div className='flex items-center'>
                <CircularProgress />
                <span className='dark:text-white'>Generating Images...</span>
            </div>}
            {doneGeneration && <div class="flex w-full flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex items-center">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your Images have been generated</h5>
                    <FaCheck size={32} color='green' className='text-bold ml-2' />
                </div>
                <div className="flex w-full mt-4 items-center justify-between">
                {generatedImages.map(a=>(<div className="">
                    <img className='hidden md:flex' src={a} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={a} style={{ width: "100px" }} />
                </div>
                ))}
                
                </div>
                {doneGeneration && <button
                    className="w-full mt-2 bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={nextStep}
                >
                    Next Step
                </button>}
            </div>}
            {doneGeneration && <div className='w-full max-w-7xl mb-4 mt-4 md:px-24 flex flex-col md:flex-row items-center justify-center'>
                
            </div>}
        </>
    )
}
