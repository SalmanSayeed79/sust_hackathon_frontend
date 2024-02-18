import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaCheck, FaEdit, FaFile } from 'react-icons/fa'
import PredictedProducts from '../../Components/Product/PredictedProducts'
import { BiEdit, BiImage } from 'react-icons/bi'
import MDEditor from '@uiw/react-md-editor'
import axios from 'axios'
import { BASE_URL } from '../../Data/apiData'
import { MdDone, MdLocationOn, MdModeEdit } from 'react-icons/md'
import { useUserID } from '../../Hooks/userContext'
import LoaderPage from '../../Components/LoaderPage'
import { useNavigate } from 'react-router-dom'
export default function ProductDetails({ nextStep,productName,productImages }) {
    const ollama_host = "http://localhost:11434"
    const navigator=useNavigate()
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
    
    const shopId=useUserID()
    const [title, setTitle] = useState("Weinberner Suede Shoes for MEN")
    const [brand, setBrand] = useState("SELF")
    const [material, setMaterial] = useState("Suede, Leather, Wool")
    const [description, setDescription] = useState("## Title\nnavy suede shoes for men\n\n## Description\n\nThese navy suede shoes are the perfect choice for a classic and timeless look. Made from high-quality suede material, these shoes are soft and comfortable to wear all day long. The slip-on style makes them easy to put on and take off, while the elasticated tongue ensures a secure fit. The contrasting white stitching adds a touch of elegance to the design, while the leather lining provides extra comfort. These shoes are also suitable for both formal and casual occasions, making them a versatile addition to any wardrobe.\n\n## Size Chart\n|Size|Inches|CM|\n|---:|-----:|:--:|\nSmall |5-7 |23-28 |\nMedium |8-9 |26-28 |\nLarge |10-12 |29-31 |\nExtra Large |12+ |31+ |\n## How to use\nTo take care of these shoes, wipe them with a clean cloth after each wear and avoid rubbing the suede surface with rough objects. For stains or dirt marks, gently use a brush to loosen the area and then wash with water using a gentle soap. Let the shoes dry in a cool, shaded place before re-wearing them. It's also recommended to use non-abrasive materials when cleaning or polishing these shoes as they can damage the suede material.\n## Caution\nAlthough this product is designed to be comfortable and long-lasting, we still recommend that you take care of it properly. To avoid any problems with the leather lining or other components of the shoe, please follow the instructions given above for cleaning and maintaining your shoes. If you notice any issues while using this product, please contact us immediately so that we can address them as soon as possible.")
    const [generating, setGenerating] = useState(false)
    const [doneGeneration, setDoneGeneration] = useState(false)

    const [editTitle, setEditTitle] = useState(false)
    const [editBrand, setEditBrand] = useState(false) 
    const [editMaterial, setEditMaterial] = useState(false)
    const [editDescription, setEditDescription] = useState(false)

    const [input, setInput] = useState(title)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")

    const [price,setPrice]=useState(null)

    const [selectedImage,setSelectedImage]=useState()

    const [productTitle,setProductTitle]=useState()
    const [productBody,setProductBody]=useState()

    const items = [
        {
            image: "https://www.batabd.com/cdn/shop/products/1_ae0b6181-8a57-4a5f-b606-b0f220da6c13_1024x1024.jpg?v=1618518185",
            name: "Weinbrenner FORREST GUMP Casual Shoe For Men",
            cat: "Leather Products",
            price: "2799",
            platform: "https://www.batabd.com/cdn/shop/files/logo-2_d42c63ce-1f56-4af2-a68f-a4cc3a91bd07.png?v=1614332440"
        },
        {
            image: "https://www.batabd.com/cdn/shop/products/3_5cb92513-ffdd-4ffa-9a20-4b850c21bfc8_1024x1024.jpg?v=1612941646",
            name: "WEINBRENNER SHARJAH Boots",
            cat: "Leather Products",
            price: "2599",
            platform: "https://bbf.digital/wp-content/uploads/2022/01/Daraz-Logo-1080x1080.jpg"
        },

    ]
    const images=[
        {
            url:"https://www.batabd.com/cdn/shop/products/3_5cb92513-ffdd-4ffa-9a20-4b850c21bfc8_1024x1024.jpg?v=1612941646",
            selected:true
        },
        {
            url:"https://www.batabd.com/cdn/shop/products/1_ae0b6181-8a57-4a5f-b606-b0f220da6c13_1024x1024.jpg?v=1618518185",
            selected:true
        },
        {
            url:"https://i.postimg.cc/LsC5cHRD/5ab1ffdf-53a0-4873-ad44-67fb8e355543.jpg",
            selected:true
        },
        {
            url:"https://i.postimg.cc/sxS2G7WH/6aa25d82-1675-436e-bbf1-2d94e7378aa9.jpg",
            selected:true
        },
        {
            url:"https://i.postimg.cc/kMtGH3HN/f9d33942-1898-4918-8ea8-e0136aed8895.jpg",
            selected:true
        }
    ]
    const sendRequest = () => {
        console.log("Starting")
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
            setDescription(data.response)
            setLoading(false)
        }).catch(e => {
            //console.log(e)
        });
    }
    const generateDetails = async() => {
        console.log("Generating")
        setDoneGeneration(false)
        setGenerating(true);
        // const timer = setTimeout(() => {
        //     setGenerating(false)
        //     setDoneGeneration(true)
        // }, 1000);
        // console.log("Timer done")
        // return () => clearTimeout(timer)
        let items=productName.split(",")
        console.log(items)
        const res=await axios.post("http://127.0.0.1:5000/generate-product-details",{
            "product_name":[items[0]]
        })
        console.log(res.data)
        console.log("Generated")
        setProductTitle(res.data[0].title)
        setProductBody(res.data[0].body)
        setGenerating(false)
        setDoneGeneration(true)
    }
    const createListing=async()=>{
        setLoading(true)
        console.log({
            "shop_id": shopId,
            "title": productTitle,
            "brand": brand,
            "type": "clothing",
            "price": parseInt(price),
            "description": productBody,
            "images": productImages[0].image_url
          })
        await axios.post(`${BASE_URL}/listing`,{
            "shop_id": shopId,
            "title": productTitle,
            "brand": brand,
            "type": "clothing",
            "price": parseInt(price),
            "description": productBody,
            "images": productImages[0].image_url
          })
        setLoading(false)
        alert("Product successfully added!")
        navigator("/options")
    } 
    useEffect(()=>{
        console.log(productImages)
    },[])
    if(loading) <LoaderPage/>
    return (
        <>


            <div class="flex w-full flex-col items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex flex-col items-center">
                    <h5 class="mb-2 text-md  tracking-tight text-gray-900 dark:text-white">Your Image Seems to be </h5>
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">✨ {productName} ✨</h5>

                </div>


            </div>
            <div class="flex w-full flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex items-center">
                    <h5 class="mb-2 text-xl font-normal tracking-tight text-center text-gray-900 dark:text-white">I have found some products that match with your listing</h5>
                </div>
                <div className="flex flex-col w-full mt-4 items-center justify-between">
                    {items.map(a => (<div className="flex  w-full">
                        <PredictedProducts image={a.image} cat={a.cat} name={a.name} price={a.price} platform={a.platform} />
                    </div>
                    ))}
                    <div className="flex w-full flex-col max-w-7xl mt-2">
                        <div href="#" class="flex relative flex-col md:flex-row items-start md:items-center justify-start mx-4 max-w-7xl p-6 bg-white border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700 ">
                            <input class="w-6 h-6 mr-2 text-green-600 bg-gray-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                            <h5 class="mb-2 mx-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white" style={{ maxWidth: "300px" }}>New Product Listing</h5>

                        </div>

                    </div>
                    <button
                        className="w-full max-w-7xl mt-4 bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={generateDetails}
                    >
                        {!generating && "Generate Details"}
                        {generating && <div><CircularProgress/> Generating...</div>}
                    </button>
                </div>
            </div>
            {doneGeneration && <div className="flex w-full flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">

                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Product Listing Details 🌁</h5>

            </div>}
            {doneGeneration && <div className='flex w-full flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 '>
                <form className='w-full'>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Product Images</label>
                    <div className="flex items-center overflow-x-scroll no-scrollbar">
                        {productImages.map(a=>(
                            <div class="flex max-w-sm p-2 mx-2 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={()=>setSelectedImage(a)}>
                            <input type="checkbox" className='mr-2'/>
                            <img className='hidden md:flex' src={a.image_url} style={{ width: "200px" }} />
                            <img className='flex md:hidden' src={a.image_url} style={{ width: "100px" }} />
                           
                        </div>
                        ))}
                    </div>

                    <div class="mb-6">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Product Title</label>
                        {!editTitle && <div className=" flex items-center ">
                            <h4 for="title" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2">{productTitle}</h4>
                            <button type="button" onClick={() => setEditTitle(true)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><MdModeEdit size={18} className='dark:text-white' /></button>
                        </div>}
                        {editTitle && <div class="relative w-full ">
                            <input onChange={(e) => setProductTitle(e.target.value)} value={productTitle} type="text" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
                            <button onClick={() => setEditTitle(false)} class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                <MdDone size={18} />
                            </button>
                        </div>}
                    </div>
                    <div class="mb-6">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Product Price</label>
                        
                        <div class="relative w-full ">
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
                           
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Brand</label>
                        {!editBrand && <div className=" flex items-center ">
                            <h4 for="title" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2">{brand}</h4>
                            <button type="button" onClick={() => setEditBrand(true)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><MdModeEdit size={18} className='dark:text-white' /></button>
                        </div>}
                        {editBrand && <div class="relative w-full ">
                            <input onChange={(e) => setBrand(e.target.value)} value={brand} type="text" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
                            <button onClick={() => setEditBrand(false)}  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                <MdDone size={18} />
                            </button>
                        </div>}
                    </div>
                    <div class="mb-6">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Main Material</label>
                        {!editMaterial && <div className=" flex items-center ">
                            <h4 for="title" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2">{material}</h4>
                            <button type="button" onClick={() => setEditMaterial(true)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><MdModeEdit size={18} className='dark:text-white' /></button>
                        </div>}
                        {editMaterial && <div class="relative w-full ">
                            <input onChange={(e) => setMaterial(e.target.value)} value={material} type="text" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
                            <button onClick={() => setEditMaterial(false)}  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                <MdDone size={18} />
                            </button>
                            
                        </div>}
                    </div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Sizes</label>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center dark:text-white my-2 font-bold text-lg"><input type="checkbox" className='mr-2' />S</div>
                        <div className="flex items-center dark:text-white my-2 font-bold text-lg"><input type="checkbox" className='mr-2' />M</div>
                        <div className="flex items-center dark:text-white my-2 font-bold text-lg"><input type="checkbox" className='mr-2' />L</div>
                        <div className="flex items-center dark:text-white my-2 font-bold text-lg"><input type="checkbox" className='mr-2' />XL</div>
                        <div className="flex items-center dark:text-white my-2 font-bold text-lg"><input type="checkbox" className='mr-2' />XXL</div>

                    </div>
                    <label for="comment" class="block mb-2 text-sm font-medium text-gray-900 text-primary-400">Product Description</label>
                    {!editDescription &&   <button type="button" onClick={() => setEditDescription(true)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><MdModeEdit size={18} className='dark:text-white' /></button>}
                    {!editDescription && <MDEditor.Markdown source={productBody} style={{ padding: "2rem", background: "transparent" }} />}
                    {editDescription && <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">

                            <textarea value={productBody} onChange={e=>setProductBody(e.target.value)} id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your post..." ></textarea>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                           
                            <div class="relative w-full ">
                                    <input value={input} onChange={(e) => setInput(e.target.value)} class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
                                    <button onClick={(e)=>{
                                        e.preventDefault()
                                        sendRequest()}} class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                        {!loading && "Generate"}
                                        {loading && "Generating..."}
                                    </button>
                                </div>
                            <button onClick={e=>{
                                e.preventDefault()
                                setEditDescription(false)
                                }} class="inline-flex ml-2 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                <MdDone size={16} className='font-bold'/>
                            </button>
                          
                            
                            
                            
                        </div>
                    </div>}


                   
                    <button
                        className="w-full max-w-7xl mt-4 bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={createListing}
                    >
                    {loading && <CircularProgress/>}
                        Create Listing
                    </button>
                </form>
            </div>}
        </>
    )
}

