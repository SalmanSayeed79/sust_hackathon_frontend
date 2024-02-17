import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { CgClose, CgCopy } from 'react-icons/cg';
import { GrChat } from 'react-icons/gr';
import { FaCheck } from 'react-icons/fa';
import ProductCard from '../Product/ProductCard';
export default function ProductsModal({terminator}) {
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
                        Your Products
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
                    <div className="flex">
                        <ProductCard name="Navy Jeans" price={750} image="https://i.postimg.cc/FKrJpWFG/00001-1387096179.png" sites={["Facebook Marketplace"]}/>
                        <ProductCard name="Blue Jeans" price={1199} image="https://i.postimg.cc/yN2SFFx8/00000-927594550.png" sites={["Daraz","Bikroy.com","Facebook Marketplace"]}/>
                   
                    </div>
                    
                   
           
                   


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
