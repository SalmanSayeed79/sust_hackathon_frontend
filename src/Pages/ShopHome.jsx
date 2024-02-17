import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import LoaderPage from '../Components/LoaderPage'
import axios from "axios"
import NavigationWide from '../Components/Navigation'
import ItemCard from '../Components/Shop/ItemCard'
import { BiCart } from 'react-icons/bi'
export default function ShopHome() {
    const params=useParams()
    const [shopId,setShopId]=useState(params.id)

    const [shopData,setShopData]=useState(null)
    const [itemData,setItemData]=useState(null)
    const [loading ,setLoading]=useState(true)

    const getData=async()=>{
        const res = await axios.get("http://localhost:8000/shop/"+shopId)
        console.log(res.data)
        setShopData(res.data)

        const itemRes= await axios.get("http://localhost:8000/listing/shop/"+res.data.shop_id)
        setItemData(itemRes.data)
        console.log(itemRes.data)
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])
    if(loading) return <LoaderPage/>
  return (
   <div className='w-screen min-h-screen  items-center justify-center'>
        <Navbar title={shopData.shop_name}/>
        <h2 className='font-bold text-center mb-10 bg-amber-500 text-gray-100 md:mt-20 text-2xl'>Welcome to our shop</h2>
        <div className='w-full h-screen  flex flex-wrap items-center justify-center'>
            {itemData.map(a=><ItemCard data={a}/>)}
            {itemData.map(a=><ItemCard data={a}/>)}
            {itemData.map(a=><ItemCard data={a}/>)}
            {itemData.map(a=><ItemCard data={a}/>)}
            {itemData.map(a=><ItemCard data={a}/>)}
            {itemData.map(a=><ItemCard data={a}/>)}
        </div>
        <button className='fixed bottom-8 rounded-full p-3 bg-amber-500 right-8'>
            <BiCart size={48} />
        </button>
    </div>
  )
}
