import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
// import { UserIDContext, UserIDUpdateContext, UserTypeContext, UserTypeUpdateContext } from '../Context/UserContext'
import axios from "axios"
import { UserAuth } from '../Hooks/AuthContext'
import { BASE_URL } from '../Data/apiData'
import { useUserIDUpdate } from '../Hooks/userContext'
import { CircularProgress } from '@mui/material'

// import info from '../data/MainText'
export default function Login() {
    const updateBuldrID=useUserIDUpdate()
    //const {buldruser}=useUser()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loggingIn,setLogggingIn]=useState(false)
    // const userTypeChange=useContext(UserTypeUpdateContext)
    // const userIDChange=useContext(UserIDUpdateContext)
    const navigator= useNavigate()

    const { signIn,user } = UserAuth()
    const handleSubmit =async () => {
        try{
          setLogggingIn(true)
          await signIn(email, password)
          
          const res=await axios.get(BASE_URL+'/shop/email/'+email)
          console.log(res.data.userID)
          updateBuldrID(res.data.userID)
          navigator('/options')
        }
        catch(e){
          console.log(e)
          setLogggingIn(false)
        }
        finally{
          setLogggingIn(false)
          
        } 
    }
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className='flex h-20 items-center justify-center' style={{alignItems:"center"}}>
      <img className="w-12 h-12  hidden md:flex" src='https://i.postimg.cc/FzB1TScv/image.png' />
        <h2 className='text-2xl font-bold text-black font-title dark:text-gray-100'><span className='text-primary-500'>Bebsha.</span>AI</h2>
        
      </div>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={e=>setEmail(e.target.value)}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={e=>setPassword(e.target.value)}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                 {!loggingIn && <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Sign in</button>}
                 {loggingIn && <div style={{display:"flex",alignItems:'center'}}><CircularProgress/><h2 sx={{marginLeft:"10px"}}>Signing In</h2></div>}
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a onClick={()=>navigator('/create-account')} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}