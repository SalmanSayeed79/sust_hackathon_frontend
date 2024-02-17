import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Navigation from '../Components/Navigation'
import { FaCheck, FaMixer } from "react-icons/fa";
export default function Pricing() {
    const [lan, setLan] = useState('english')
    const [student, setStudent] = useState(false)
    const [intermediateSelected, setintermediateSelected] = useState(false)
    const [proSelected, setProSelected] = useState(false)
    const [basicSelected, setBasicSelected] = useState(false)
    const [whSelected, setWhSelected] = useState(false)
    const [analyzerSelected, setAnalyzerSelected] = useState(false)
    const [intermediateCount, setintermediateCount] = useState(0)
    const [proCount, setProCount] = useState(0)
    const [basicCount, setBasicCount] = useState(0)
    const [anaylzerCount, setAnalyzerCount] = useState(0)
    const [whCount, setWCount] = useState(0)
    const navigator = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('language') === 'bangla') {
            setLan('bangla')
        } else {
            setLan('english')
        }
    }, [])

    let basicCost = 4.99;
    let proCost = 19.99;
    let intermediateCost = 9.99;
    let analyzerPrice=85;
    let whPrice=65;


    return (
        <div className='w-screen min-h-screen'>
            <Navigation />
            <Navbar />
            <div class="bg-white w-full h-full  bg-white flex flex-col items-center dark:bg-gray-900">
                <div className="flex flex-col mt-24 md:mt-0 w-full max-w-3xl  md:mt-24 items-center justify-center">
                    {lan === 'english' && <h2 class="mb-4 text-center  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Our <span class="text-amber-600 dark:text-amber-500">Pricing </span> </h2>}
                    {lan === 'bangla' && <h2 class="mb-4 text-center  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">লক্ষাধিক  <span class="text-amber-600 dark:text-amber-500"> বাংলাদেশি ইঞ্জিনিয়রদের জন্য </span> একটি প্লাটফর্ম  </h2>}
                    {lan == "english" && <p class="mb-6 text-center  font-light text-gray-500 md:text-lg dark:text-gray-400">Have a look at our pricing for both personal and enterprise use</p>}
                    {lan == "bangla" && <p class="mb-6 text-center   font-light text-gray-500 md:text-lg dark:text-gray-400">বিল্ডার হল সারা দেশে ইঞ্জিনিয়ারিং ছাত্র ও প্রফেশনালদের একটি প্ল্যাটফর্ম। আমরা ইঞ্জিনিয়ারদের নিয়ে কাজ করি যাতে তারা প্রশিক্ষণের এবং প্রজেক্ট শোকেসএর মাধ্যমে কাজ করার জন্য প্রস্তুত করা হয় এবং তাদের দেশব্যাপী কোম্পানিতে নিয়োগ নিশিত করা হয়  </p>}
                </div>

                {/* <div class="inline-flex rounded-md shadow-sm mb-4" role="group">
                    {student && <button onClick={() => setStudent(true)} type="button" class="inline-flex gap-1 bg-primary-500 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                        <span className='flex'>Personal</span>
                    </button>}
                    {!student && <button onClick={() => setStudent(true)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                        <span className='flex'>Personal</span>
                    </button>}
                    {student && <button onClick={() => setStudent(false)} type="button" class="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                        <span className='flex'>Institution</span>
                    </button>}
                    {!student && <button onClick={() => setStudent(false)} type="button" class="inline-flex gap-1 bg-primary-500 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white">
                        <span className='flex'>Institution</span>
                    </button>}

                </div> */}

                {/* {student && <div class="gap-4 items-center px-4 mx-auto max-w-screen-3xl xl:gap-16 md:grid grid-cols-1 md:grid-cols-3 sm:py-16 lg:px-6">

                    <article class="p-6 bg-white flex flex-col items-center max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="mb-2 w-full text-2xl text-center font-bold bg-green-500 px-10 py-2 rounded-md shadow-lg text-white tracking-tight text-gray-900 dark:text-white"><a href="#">Subjectwise SSC Course</a></h2>
                        <div class="flex flex-col justify-between items-center mt-5 mb-5 text-gray-500">
                            <span class="text-5xl text-black dark:text-white">৳100</span>
                            <span class="text-md shadow-lg px-4 py-1 mt-3 rounded-lg text-black dark:text-white">6 Month Access</span>
                        </div>
                        <ul className=''>
                            <li className='flex items-center justify-left'><FaCheck size={24} color='green' /><span class="text-md ml-2 rounded-lg text-black dark:text-white">Dynamic Single course with customizable chat agent</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md ml-2 rounded-lg text-black dark:text-white">Custom exam module</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md ml-2 rounded-lg text-black dark:text-white">Blockchain based certification at completion</span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md ml-2 rounded-lg text-black dark:text-white">Dynamic full courses course with customizable chat agent</span></li>
                        </ul>

                        <a href="#" class="inline-flex mt-8 text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" >
                            Choose Course
                        </a>


                        <div class="flex flex-col justify-center items-start">


                        </div>
                    </article>
                    <article class="p-6 relative bg-white mt-10 mb-12 flex flex-col items-center max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="mb-2 w-full text-2xl text-center font-bold bg-green-500 px-10 py-2 rounded-md shadow-lg text-white tracking-tight text-gray-900 dark:text-white"><a href="#">Full SSC Course</a></h2>
                        <h2 class="mb-2 absolute -top-10 -right-10 text-2xl text-center font-bold bg-red-500 px-10 py-2 rounded-md shadow-lg text-white tracking-tight text-gray-900 dark:text-white"><a href="#">Best Deal</a></h2>
                        <div class="flex flex-col justify-between items-center mt-5 mb-5 text-gray-500">
                            <span class="text-5xl text-black dark:text-white">৳400</span>
                            <span class="text-md shadow-lg px-4 py-1 mt-3 rounded-lg text-black dark:text-white">1 Year Access</span>
                        </div>
                        <ul>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Physics course with customizable chat agent</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Chemistry course with customizable chat agent</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Biology course with customizable chat agent</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Mathematics course with customizable chat agent</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Custom exam module</span></li>
                            <li className='flex items-center'><FaCheck size={24} color='green' /><span class="text-md rounded-lg text-black dark:text-white">Blockchain based certification at completion</span></li>
                        </ul>

                        <a href="#" class="inline-flex mt-8 text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Choose Course
                        </a>


                        <div class="flex flex-col justify-center items-start">


                        </div>
                    </article>
                    <article class="p-6 bg-white flex flex-col items-center max-w-xl mx-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="mb-2 w-full text-2xl text-center font-bold bg-green-500 px-10 py-2 rounded-md shadow-lg text-white tracking-tight text-gray-900 dark:text-white"><a href="#">SSC Chatbot Only</a></h2>
                        <div class="flex flex-col justify-between items-center mt-5 mb-5 text-gray-500">
                            <span class="text-5xl text-black dark:text-white">৳30</span>
                            <span class="text-md shadow-lg px-4 py-1 mt-3 rounded-lg text-black dark:text-white">1 Month Access</span>
                        </div>
                        <ul className='w-full'>
                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Custom Chatbot for all subjects</span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Physics course</span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Chemistry course </span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Biology course  </span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Dynamic Mathematics course </span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Custom exam module</span></li>
                            <li className='flex items-center'><FaMixer size={24} color='red' /><span class="text-md rounded-lg text-black dark:text-white">Blockchain based certification at completion</span></li>
                        </ul>

                        <a href="#" class="inline-flex mt-8 text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" >
                            Choose Course
                        </a>


                        
                    </article>
                    <div class="flex flex-col justify-center mb-32 md:mb-0 items-start">

                    </div>

                </div>} */}
                {!student && <div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 max-w-5xl items-center justify-between">

                        <div href="#" class="flex items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input type="checkbox" onChange={(e)=>{
                                if(e.target.checked==false){
                                    //console.log("Help")
                                    setBasicCount(0)
                                    setBasicSelected(false)
                                }
                                setBasicSelected(e.target.checked)
                            }} value={basicSelected} class="w-12 h-12 mr-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Basic Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${basicCost}</span> per month</p>
                                <ul className='w-full mt-2'>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Support upto 20 products</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Support upto 2 sites</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">AI analyzer and recommender </span></li>
                                </ul>
                            </div>

                        </div>
                        <div href="#" class="flex items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input type="checkbox" onChange={(e)=>{
                                if(e.target.checked==false){
                                    console.log("Help")
                                    setProCount(0)
                                }
                                setProSelected(e.target.checked)
                            }} value={proSelected} class="w-12 h-12 mr-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pro Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${proCost}</span> per month</p>
                                <ul className='w-full mt-2'>
                                <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Unlimited products</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">All supported sites</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">AI analyzer and recommender </span></li>
                                </ul>
                            </div>

                        </div>
                       
                        <div href="#" class="flex items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input type="checkbox"  onChange={(e)=>{
                                if(e.target.checked==false){
                                    console.log("Help")
                                    setintermediateCount(0)
                                }
                                setintermediateSelected(e.target.checked)
                            }} value={intermediateSelected} class="w-12 h-12 mr-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Intermediate Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${intermediateCost}</span> per month</p>
                                <ul className='w-full mt-2'>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Support upto 30 products</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Support upto 4 sites</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">AI analyzer and recommender </span></li>
                                </ul>
                            </div>

                        </div>
                        {/* <div href="#" class="flex items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input type="checkbox"  onChange={(e)=>{
                                if(e.target.checked==false){
                                    console.log("Help")
                                    setWCount(0)
                                }
                                setWhSelected(e.target.checked)
                            }} value={whSelected} class="w-12 h-12 mr-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory Manager</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳65</span> per month</p>
                                <ul className='w-full mt-2'>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Manages products in different sites</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Moves products from one site to another</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Recommends product count on sites for future products</span></li>
                                    
                                </ul>
                            </div>

                        </div>
                        <div href="#" class="flex items-center mx-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input type="checkbox"  onChange={(e)=>{
                                if(e.target.checked==false){
                                    console.log("Help")
                                    setAnalyzerCount(0)
                                }
                                setAnalyzerSelected(e.target.checked)
                            }} value={analyzerSelected} class="w-12 h-12 mr-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Market Analyzer</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳85</span> per month</p>
                                <ul className='w-full mt-2'>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Category based market analysis</span></li>
                                    <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold' /><span class="text-md rounded-lg text-black dark:text-white">Future product recommendation</span></li>
                                </ul>
                            </div>

                        </div> */}
                    </div>
                    <div className="my-4 w-full">
                        {lan === 'english' && <h2 class="mb-4 text-left  text-2xl tracking-tight font-bold text-gray-900 dark:text-white"> Price Calculator </h2>}
                        {lan === 'bangla' && <h2 class="mb-4 text-left  text-2xl tracking-tight font-bold text-gray-900 dark:text-white">লক্ষাধিক  <span class="text-amber-600 dark:text-amber-500"> বাংলাদেশি ইঞ্জিনিয়রদের জন্য </span> একটি প্লাটফর্ম  </h2>}


                        {basicSelected && <div href="#" class="w-full  my-2 flex flex-col md:flex-row md:items-center items-start justify-between mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Basic Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${basicCost}</span> per month</p>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex mx-4">
                                    <button type="button" onClick={()=>{
                                        if(basicCount>0){
                                            setBasicCount(basicCount => basicCount -= 1)
                                        }
                                    }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                                    <input type="text" onChange={(e) => setBasicCount(parseInt(e.target.value))} value={basicCount} class="min-w-12 h-12 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <button onClick={() => {
                                        setBasicCount(basicCount => basicCount += 1)
                                    }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>
                                </div>
                                <span className='font-bold text-center mx-2 text-xl'>months</span>
                            </div>
                            <div className="flex">
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400">Total Price : <span className='font-bold mx-2 text-xl'>${basicCost * basicCount}</span> </p>
                            </div>


                        </div>}
                        {proSelected && <div href="#" class="w-full flex my-2 flex-col md:flex-row md:items-center items-start justify-between mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pro Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${proCost}</span> per month</p>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex mx-4">
                                    <button type="button" onClick={()=>{
                                        if(proCount>0){
                                            setProCount(proCount => proCount -= 1)
                                        }
                                    }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                                    <input type="text" onChange={(e) => setProCount(parseInt(e.target.value))} value={proCount} class="min-w-12 h-12 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <button onClick={() => {
                                        setProCount(proCount => proCount += 1)
                                    }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>
                                </div>
                                <span className='font-bold text-center mx-2 text-xl'>months</span>
                            </div>
                            <div className="flex">
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400">Total Price : <span className='font-bold mx-2 text-xl'>${proCost * proCount}</span> </p>
                            </div>


                        </div>}
                        {intermediateSelected && <div href="#" class="w-full my-2 flex flex-col md:flex-row md:items-center items-start justify-between mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Intermediate Package</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>${intermediateCost}</span> per month</p>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex mx-4">
                                    <button type="button" onClick={()=>{
                                        if(intermediateCount>0){
                                            setintermediateCount(intermediateCount => intermediateCount -= 1)
                                        }
                                    }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                                    <input type="text" onChange={(e) => setintermediateCount(parseInt(e.target.value))} value={intermediateCount} class="min-w-12 h-12 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <button onClick={() => {
                                        setintermediateCount(intermediateCount => intermediateCount += 1)
                                    }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>
                                </div>
                                <span className='font-bold text-center mx-2 text-xl'>months</span>
                            </div>
                            <div className="flex">
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400">Total Price : <span className='font-bold mx-2 text-xl'>${intermediateCost * intermediateCount}</span> </p>
                            </div>


                        </div>}
                        
                       
                        {whSelected && <div href="#" class="w-full flex my-2 flex-col md:flex-row md:items-center items-start justify-between mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory Manager</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳65</span> per month</p>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex mx-4">
                                    <button type="button" onClick={()=>{
                                        if(intermediateCount>0){
                                            setWCount(whCount => whCount -= 1)
                                        }
                                    }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                                    <input type="text" onChange={(e) => setWCount(parseInt(e.target.value))} value={whCount} class="min-w-12 h-12 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <button onClick={() => {
                                        setWCount(whCount => whCount += 1)
                                    }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>
                                </div>
                                <span className='font-bold text-center mx-2 text-xl'>months</span>
                            </div>
                            <div className="flex">
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400">Total Price : <span className='font-bold mx-2 text-xl'>৳{whPrice * whCount}</span> </p>
                            </div>


                        </div>}
                        {analyzerSelected && <div href="#" class="w-full flex my-2 flex-col md:flex-row md:items-center items-start justify-between mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex flex-col">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Market Analyzer</h5>
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳85</span> per month</p>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex mx-4">
                                    <button type="button" onClick={()=>{
                                        if(intermediateCount>0){
                                            setAnalyzerCount(anaylzerCount => anaylzerCount -= 1)
                                        }
                                    }} class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</button>
                                    <input type="text" onChange={(e) => setAnalyzerCount(parseInt(e.target.value))} value={anaylzerCount} class="min-w-12 h-12 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <button onClick={() => {
                                        setAnalyzerCount(anaylzerCount => anaylzerCount += 1)
                                    }} type="button" class="px-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+</button>
                                </div>
                                <span className='font-bold text-center mx-2 text-xl'>months</span>
                            </div>
                            <div className="flex">
                                <p class="flex items-center font-normal text-gray-700 dark:text-gray-400">Total Price : <span className='font-bold mx-2 text-xl'>৳{analyzerPrice * anaylzerCount}</span> </p>
                            </div>


                        </div>}
                    </div>
                    {(proSelected || basicSelected || intermediateSelected || analyzerSelected || whSelected) && <div className="mb-24 md:mb-0">
                    <hr/>
                    <div href="#" class="w-full flex items-center justify-end mx-4 p-6 bg-white  dark:bg-gray-800 dark:border-gray-700 ">
                        <p class="flex items-center text-xl font-bold text-gray-700 dark:text-gray-400">Grand Total : <span className='font-bold mx-2 text-3xl'>৳{(intermediateCost * intermediateCount)+(proCost*proCount)+(basicCost*basicCount)+(anaylzerCount*analyzerPrice)+(whCount*whPrice)}</span> </p>  
                    </div>
                    </div>     }              
                </div>}
            </div>
        </div>

    )
}
