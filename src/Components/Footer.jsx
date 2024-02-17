import React from 'react'

export default function Footer() {
  return (
    
      <footer class="bg-white max-w-7xl items-center hidden md:flex shadow dark:bg-slate-900">
          <div class="w-screen p-4 md:py-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                  <a href="" class="flex items-center mb-4 sm:mb-0 " >
                  <div className="icon flex-1  md:flex ">
                    <img src='https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png' className='w-16 h-16'/>
                    </div>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Buldr Bangladesh</span>
                  </a>
                  <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                      </li>
                      <li>
                          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Buldr Bangladesh</a>. All Rights Reserved.</span>
          </div>
      </footer>


  )
}
