import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineHome,HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbSocial } from 'react-icons/tb'
import { MdCreate, MdDashboard } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import { BsChatLeftQuoteFill } from 'react-icons/bs'
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineFeaturedPlayList,MdOutlineInfo } from "react-icons/md"
import { usePlugin } from '../Hooks/PluginContextProvider'
import { GrDashboard } from 'react-icons/gr';

export default function NavigationWide() {
  const [theme, setTheme] = useState('')
  const [lan, setLan] = useState('english')
  const navigator = useNavigate()
  const installedPlugins = usePlugin()

  const changeTheme = () => {
    console.log("change")
    if (localStorage.getItem('color-theme') === 'light') {
      console.log("dark")
      localStorage.setItem('color-theme', 'dark')
      setTheme("dark")
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('color-theme', 'light')
      setTheme('light')
      document.documentElement.classList.remove('dark');
      console.log("light")
    }
  }
  const changeLanguage = () => {
    console.log("change")
    if (localStorage.getItem('language') === 'english') {
      console.log("bangla")
      localStorage.setItem('language', 'bangla')
      setLan("bangla")
      document.documentElement.classList.add('bangla');
    } else {
      localStorage.setItem('language', 'english')
      setLan('english')
      document.documentElement.classList.remove('bangla');
      console.log("english")
    }
    window.location.reload()
  }
  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [])

  const switchPath = (pathname) => {
    navigator(pathname)
  }
  return (
    <div>


      <aside id="default-sidebar" class="flex flex-row  w-screen z-50 h-20 md:flex-col md:w-20 md:h-screen bg-gray-100 fixed bottom-0 md:top-0 dark:bg-slate-800" style={{alignItems:"center",justifyContent:"space-between"}} aria-label="Sidenav">

        <div class="flex xs:flex-row md:flex-col items-center xs:justify-center overflow-x-scroll overflow-y-hidden md:overflow-y-auto md:overflow-x-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
           
          <img className="w-15 h-15 mb-20 hidden md:flex" src='https://i.postimg.cc/FzB1TScv/image.png' onClick={() => switchPath("/")}/>
            
       
          <ul class="md:space-y-10 flex xs:flex-row md:flex-col items-center justify-center">
            <li>
              
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/options")}>
                <MdDashboard size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Dashboard</span>
              </a>
             
            </li>
            <li>
           
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/features")}>
                <MdOutlineFeaturedPlayList size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Features</span>
              </a>
       
            </li>
            <li>
 
              <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/pricing")}>
                <HiOutlineCurrencyDollar size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">Pricing</span>
              </a>
             
            </li>
            <li>
                <a href="#" class="flex flex-col md:flex-row items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => switchPath("/about")}>
                <MdOutlineInfo size={24} color={theme === "dark" ? "white" : "grey"} />
                <span class="ml-3 text-xs flex md:hidden">About</span>
              </a>
            </li>
            <li onClick={()=>navigator("/chatbot")} className='md:hidden'>
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsChatLeftQuoteFill size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">ChatBot</span>
              </a>
            </li>       
          </ul>
          <ul class="pt-5 mt-5 hidden md:flex items-center justify-center space-y-10 border-t border-gray-200 dark:border-gray-700">
            <li onClick={()=>navigator("/chatbot")}> 
              <a class="flex flex-col items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsChatLeftQuoteFill size={24} color={theme === "dark" ? "white" : "grey"}/>
                <span class="ml-3 text-xs flex md:hidden">Chatbot</span>
              </a>
            </li>
          </ul>
        
        </div>
      </aside>
    </div>
  )
}
