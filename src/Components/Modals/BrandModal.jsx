import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { CgClose, CgCopy } from 'react-icons/cg';
import { GrChat } from 'react-icons/gr';
import { FaCheck } from 'react-icons/fa';
export default function BrandModal({ terminator }) {
    const ollama_host = "http://localhost:11434"
    const prevPrompt=`
    You are an agent that creates brands for individuals. When someone tells you a product description, you take that to create a brand for that person. Create 3 different brand names and their taglines.
    List them in markdown with the brandname as header and the tagline as normal text.
    
   

    
    `
   
    
   
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")
    const [placingOrder,setPlacingOrder]=useState(false)
    const [orderDone,setOrderDone]=useState(false)
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
                                Create your brand
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
                        
                            <div className="flex w-full  mt-4 items-center ">
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

                            </div>
                            {!loading && response != "" && <div className="max-w-7xl">
                                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg shadow-lg my-4">
                                    <button type="button" onClick={() => { navigator.clipboard.writeText(response) }} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><CgCopy size={18} /></button>

                                    <MDEditor.Markdown source={response} style={{ padding: "2rem", background: "transparent" }} />
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
