import React, { useEffect, useState } from 'react'
import colors from 'tailwindcss/colors'

export default function Navbar() {
    const [theme,setTheme]=useState('')
    const [lan, setLan] = useState('english')
    useEffect(()=>{
        if(localStorage.getItem('color-theme')==='dark'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        if(localStorage.getItem('language')==='bangla'){
            setLan('bangla')
        }else{
            setLan('english')
        }
    },[])
    const changeTheme=()=>{
        console.log("change")
        if(localStorage.getItem('color-theme')==='light'){
            localStorage.setItem('color-theme','dark')
            setTheme("dark")
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem('color-theme','light')
            setTheme('light')
            document.documentElement.classList.remove('dark');
        }
    }
    const changeLanguage = () => {
        console.log("change")
        if (localStorage.getItem('language') === 'english') {
          localStorage.setItem('language', 'bangla')
          setLan("bangla")
          document.documentElement.classList.add('bangla');
        } else {
          localStorage.setItem('language', 'english')
          setLan('english')
          document.documentElement.classList.remove('bangla');
        }
        window.location.reload()
      }
  return (
    <div className='hidden shadow-md z-40 md:flex w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0' style={{alignItems:"center",justifyContent:"space-between"}}>
        <h2 className='text-xl font-bold ml-24 text-black font-title dark:text-gray-100'>Bebsha.AI</h2>
        <div className="flex flex-row mr-10">
            {/* <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /> */}
            <button  onClick={changeTheme} type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                {theme==='light' && <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
                {theme==='dark' && <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
            </button>
            <button onClick={changeLanguage} type="button" class="flex w-20 h-20 text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" style={{ alignItems: "center", justifyContent: "center" }}>
                {lan === 'bangla' && <img src="https://i.postimg.cc/63QDL1YV/england-4854979.png" width="20px"/>}
                {lan === 'english' && <img src="https://i.postimg.cc/gkRkZnwz/bangladesh-9993444.png" width="20px"/>}
            </button>
            {/* <button className="btn btn-primary font-primary">Get Started</button> */}
        </div>
    </div>
  )
}
