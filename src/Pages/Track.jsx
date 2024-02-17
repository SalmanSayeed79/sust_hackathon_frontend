import React from 'react'
import Agent from '../Components/Agent'
import ProductCard from '../Components/Product/ProductCard'
import Navbar from '../Components/Navbar'
import Navigation from '../Components/Navigation'
export default function Track() {
    return (
        <>
            <Navigation />
            <Navbar />
            <Agent />
            <div className="flex items-center  justify-center dark:bg-gray-900">
                <div className='flex flex-col max-w-7xl md:mt-24 mb-24 md:mb-0 items-center min-h-screen w-screen justify-center dark:bg-gray-900'>
                    <div className="flex flex-col px-2 md:flex-row">
                        <ProductCard name="Navy Jeans" price={750} image="https://i.postimg.cc/FKrJpWFG/00001-1387096179.png" sites={["Facebook Marketplace"]} />
                        <ProductCard name="Blue Jeans" price={1199} image="https://i.postimg.cc/yN2SFFx8/00000-927594550.png" sites={["Daraz", "Bikroy.com", "Facebook Marketplace"]} />

                    </div>

                </div>
            </div>
        </>
    )
}
