import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import axios from 'axios'
export default function UploadImages({nextStep,setProduct,setProductImg}) {
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [img3, setImg3] = useState(null)

    const [img1Open,setImg1Open]=useState(false)
    const [img2Open,setImg2Open]=useState(false)
    const [img3Open,setImg3Open]=useState(false)

    const [response1,setResponse1]=useState(null)
    const [response2,setResponse2]=useState(null)
    const [response3,setResponse3]=useState(null)
    const [generating, setGenerating] = useState(false)
    const [doneGeneration, setDoneGeneration] = useState(false)

    
    const generatedImages = [
    "https://i.postimg.cc/LsC5cHRD/5ab1ffdf-53a0-4873-ad44-67fb8e355543.jpg",
    "https://i.postimg.cc/sxS2G7WH/6aa25d82-1675-436e-bbf1-2d94e7378aa9.jpg",
    "https://i.postimg.cc/kMtGH3HN/f9d33942-1898-4918-8ea8-e0136aed8895.jpg"

    ]
    const generateImages = async() => {
        setGenerating(true);
        setDoneGeneration(false)
        // const timer = setTimeout(() => {
        //     setGenerating(false)
        //     setDoneGeneration(true)
        // }, 1000);
        // console.log("Timer done")
        // return () => clearTimeout(timer)
        
        const res1=await axios.post("http://127.0.0.1:5000/bg-changer",{
            "image_url":img1
        })
        setResponse1(res1.data.image_url)
        const res2=await axios.post("http://127.0.0.1:5000/bg-changer",{
            "image_url":img2
        })
        
        setResponse2(res2.data.image_url)

        const res3=await axios.post("http://127.0.0.1:5000/bg-changer",{
            "image_url":img3
        })
        setResponse3(res3.data.image_url)

        console.log(res1.data,res2.data,res3.data)

        setProductImg([res1.data,res2.data,res3.data])
        setGenerating(false)
        setDoneGeneration(true)
    }
    const generateProductType=async()=>{
        const res=await axios.post("http://127.0.0.1:5000/detect-objects",{
            "image_url":img1
        })
        console.log(res.data)
        await setProduct(res.data)
        nextStep()
    }
    return (
        <>
            { <div className='w-full max-w-7xl md:px-24 flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700 '>

                {/*<input type="file" id="imgUpload1" className="hidden" onChange={e => setImg1(URL.createObjectURL(e.target.files[0]))} />*/}
                {img1 == null && <label for="imgUpload1" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/k4B4hm38/1.png" style={{ width: "200px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg1(val)
                    }}/>
                    <img className='flex md:hidden' src="https://i.postimg.cc/k4B4hm38/1.png" style={{ width: "100px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg1(val)
                    }}/>
                    Click Front View
                </label>}
                {img1 != null && <label for="imgUpload1" class="block max-w-sm  mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src={img1} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={img1} style={{ width: "200px" }} />
                </label>}


                {/*input type="file" id="imgUpload2" className="hidden" onChange={e => setImg2(URL.createObjectURL(e.target.files[0]))} />*/}
                {img2 == null && <label for="imgUpload2" class="block max-w-smmr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/Jnvhf2MF/2.png" style={{ width: "200px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg2(val)
                    }}/>
                    <img className='flex md:hidden' src="https://i.postimg.cc/Jnvhf2MF/2.png" style={{ width: "100px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg2(val)
                    }}/>
                    Click Top View
                </label>}
                {img2 != null && <label for="imgUpload2" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src={img2} style={{ width: "300px" }} />
                    <img className='flex md:hidden' src={img2} style={{ width: "200px" }} />
                </label>}

                {/*<input type="file" id="imgUpload3" className="hidden" onChange={e => setImg3(URL.createObjectURL(e.target.files[0]))} />*/}
                {img3 == null && <label for="imgUpload3" class="block max-w-sm mr-1 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img className='hidden md:flex' src="https://i.postimg.cc/D0GznPzw/3.png" style={{ width: "200px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg3(val)
                    }}/>
                    <img className='flex md:hidden' src="https://i.postimg.cc/D0GznPzw/3.png" style={{ width: "100px" }} onClick={()=>{
                        let val=prompt("Enter your image url: ")
                        setImg3(val)
                    }}/>
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
                {!generating && "Generate Images"}
                {generating && <div><CircularProgress/> Generating...</div>}
                </button>
            </div>}
            {generating && <div className='flex my-2 items-center'>
                <CircularProgress />
                <span className='dark:text-white ml-2'>Generating Images...</span>
            </div>}
            {doneGeneration && <div class="flex w-full flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex items-center">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your Images have been generated</h5>
                    <FaCheck size={32} color='green' className='text-bold ml-2' />
                </div>
                <div className="flex w-full mt-4 items-center justify-between">
         

                {doneGeneration && <img className='hidden md:flex' src={response1} style={{ width: "300px" }} />}
                {doneGeneration && <img className='flex md:hidden' src={response1} style={{ width: "100px" }} />}

                {doneGeneration && <img className='hidden md:flex' src={response2} style={{ width: "300px" }} />}
                {doneGeneration && <img className='flex md:hidden' src={response2} style={{ width: "100px" }} />}

                {doneGeneration && <img className='hidden md:flex' src={response3} style={{ width: "300px" }} />}
                {doneGeneration && <img className='flex md:hidden' src={response3} style={{ width: "100px" }} />}
                
                </div>
                {doneGeneration && <button
                    className="w-full mt-2 bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>{
                        generateProductType()
                        
                    }}
                >
                {!generating && "Next Step"}
                {generating && <div className='flex items-center justify-center'><CircularProgress/> Generating Type...</div>}
                </button>}
            </div>}
            {doneGeneration && <div className='w-full max-w-7xl mb-4 mt-4 md:px-24 flex flex-col md:flex-row items-center justify-center'>
                
            </div>}
        </>
    )
}
