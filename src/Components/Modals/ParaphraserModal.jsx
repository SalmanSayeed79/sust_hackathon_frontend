import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { CgClose, CgCopy } from 'react-icons/cg';
import { GrChat } from 'react-icons/gr';
import { FaCheck } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import PredictedProducts from '../Product/PredictedProducts';
export default function ParaphraserModal({ terminator }) {
    const ollama_host = "http://localhost:11434"
    const prevPrompt=`
    You are a product description writer. You write product descriptions that are getting placed in different e-commerce platforms.
    When someone asks you to write a product listing, you write the points; title, description, size chart, how to use, caution. Always write your answers in markdown and have the following format. Try to write the size chart in a table
    
    # Title
    =========

    ### Description

    ### Size Chart

    ### How to use

    ### Caution

    `
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")
    const [placingOrder,setPlacingOrder]=useState(false)
    
    const [orderDone,setOrderDone]=useState(false)
    const [predictingProducts,setPredictingProducts]=useState(false)
    const [predictionDone,setPredictionDone]=useState(false)
    const [type,setType]=useState("des")
    const sendRequest = async () => {
        setLoading(true)
        const bdy = {
            "model": "llama2-uncensored",
            "prompt": prevPrompt+input,
            "stream": false

        }
        const URL = `${ollama_host}/api/generate`;
        //console.log(URL)
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bdy),

        }).then(res => {

            return res.json()
        }).then(data => {
            console.log(data.response)
            setResponse(data.response)
            setLoading(false)
        }).catch(e => {
            //console.log(e)
        });
    }
    const placeOrders=()=>{
        setPlacingOrder(true);
        const timer = setTimeout(() => {
            setPlacingOrder(false)
            setOrderDone(true)
        }, 3000);
        console.log("Timer done")
        return () =>  clearTimeout(timer)
;
      }
    const predictProducts=()=>{
        setPredictingProducts(true);
        const timer = setTimeout(() => {
            setPredictingProducts(false)
            setPredictionDone(true)
        }, 3000);
        console.log("Timer done")
        return () =>  clearTimeout(timer)
;
      }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto  max-h-screen overflow-y-scroll my-6 mx-auto max-w-7xl" style={{minWidth:"70vw"}}>
                    
                    {/*content*/}
                    <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-slate-900 ">
                        {/*header*/}
                        <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 dark:border-gray-800 rounded-t ">
                            <h3 className="text-3xl font-semibold dark:text-primary-500">
                                Product Generator
                            </h3>
                            
                            <button
                                className="ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={terminator}
                            >
                                <CgClose className='dark:text-white'/>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto dark:text-white flex flex-col items-center" >
                        <div class="inline-flex rounded-md shadow-sm my-2" role="group">
                            <button type="button" onClick={() => setType("img")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Upload Image
                            </button>
                            <button type="button" onClick={() => setType("des")} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Write Description
                            </button>
                          
                        </div>
                            {/**DESCRIPTION */}
                            {type=="des" && <div className="flex w-full  mt-4 items-center ">
                                <div class="relative w-full ">
                                    <input onChange={(e) => setInput(e.target.value)} type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Chat with me" />
                                    <button onClick={sendRequest} type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                        <GrChat size={18} />
                                    </button>
                                </div>

                                {loading && <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>}

                            </div>}
                            {/**IMAGE */}
                            {type=="img" && <div className="flex w-full mt-4 items-center ">
                                <div class="relative w-full ">
                                    <input onChange={(e) => setInput(e.target.value)} type="file" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Chat with me" />
                                    <button onClick={predictProducts} type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                        <BiSearch size={18} />
                                    </button>
                                </div>
                                {predictingProducts && <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>}

                            </div>}
                            {predictionDone && <div role="status w-full">
                                <PredictedProducts/>
                                <PredictedProducts/>
                                </div>}
                            {!loading && response != "" && <div className="max-w-7xl">
                                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg shadow-lg my-4">
                                    <button type="button" onClick={() => { navigator.clipboard.writeText(response) }} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><CgCopy size={18} /></button>

                                    <MDEditor.Markdown source={response} style={{ padding: "2rem", background: "transparent" }} />
                                </div>
                            </div>}
                        {!placingOrder && response!="" && !orderDone && <div className="bg-slate-900 p-4 dark:bg-slate-800 rounded-lg shadow-lg my-4">
                            <h3 className="text-2xl font-semibold dark:text-primary-500">
                                Here are some order suggestions
                            </h3>
                            
                            <div className="flex flex-wrap justify-start">
                                <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                    <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px",objectFit:"cover" }} src='data:image/png;base64,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' />
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Daraz</h5>
                                        </div>
                                        <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳100</span> per item</p>
                                        <ul className='w-full mt-2'>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 20 products</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                                        </ul>
                                    </div>

                                </div>
                                <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                    <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px",objectFit:"cover" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6DzkJkKzcnmTF_VO2Pht8nhYvvj7bsKuVA&usqp=CAU' />
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Facebook Marketplace</h5>
                                        </div>
                                        <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳100</span> per item</p>
                                        <ul className='w-full mt-2'>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 20 products</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                                        </ul>
                                    </div>

                                </div>
                                <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                    <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px",objectFit:"cover" }} src='data:image/png;base64,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' />
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bikroy.com</h5>
                                        </div>
                                        <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳100</span> per item</p>
                                        <ul className='w-full mt-2'>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 20 products</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                                        </ul>
                                    </div>

                                </div>
                                <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                    <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px",objectFit:"cover" }} src='https://www.designboom.com/wp-content/uploads/2016/05/new-instagram-logo-new-look-designboom-01.jpg' />
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Instagram Marketplace</h5>
                                        </div>
                                        <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳100</span> per item</p>
                                        <ul className='w-full mt-2'>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 20 products</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                                        </ul>
                                    </div>

                                </div>
                                <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                    <input type="checkbox" onChange={(e) => { }} class="w-8 h-8 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <img className='rounded-lg mx-2' style={{ width: "50px", height: "50px",objectFit:"cover" }} src='data:image/png;base64,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' />
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sindabad.com</h5>
                                        </div>
                                        <p class="flex items-center font-normal text-gray-700 dark:text-gray-400"><span className='font-bold mr-2 text-xl'>৳100</span> per item</p>
                                        <ul className='w-full mt-2'>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 20 products</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Placing 5 differnt sizes</span></li>
                                            <li className='flex items-center '><FaCheck size={24} color='green' className='text-bold mr-2' /><span class="text-md rounded-lg text-black dark:text-white">Automated customer replies</span></li>
                                        </ul>
                                    </div>

                                </div>

                                </div>
                                <button
                                className="bg-primary-500 text-white my-2 active:bg-primary-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                                type="button"
                                onClick={placeOrders}
                            >
                                Place Orders
                            </button>
                            </div>}
                           {placingOrder && <div className="flex my-2 items-center dark:text-white"><svg class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg><span>Placing Orders...</span></div>}
                           {orderDone && <div href="#" class="flex items-center mx-4 mt-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                                        <div className="flex items-center"> 
                                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your orders have been placed</h5>
                                            <FaCheck size={32} color='green' className='text-bold ml-2' />  
                                        </div>
                                </div>}



                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 dark:border-gray-800 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                //onClick={() => setShowModal(false)}
                                onClick={terminator}
                            >
                                Close
                            </button>
                           
                        </div>
                    </div>
                </div>

            </div>
            <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
