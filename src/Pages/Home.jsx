import React,{useState,useEffect} from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const [lan, setLan] = useState('english')
    const navigator=useNavigate()
    useEffect(() => {
        if (localStorage.getItem('language') === 'bangla') {
            setLan('bangla')
        } else {
            setLan('english')
        }
    }, [])
    return (
        <div className="row ">
        <Navigation />
        <Navbar />

        <div class="bg-white bg-white dark:bg-gray-900">
            <div class="gap-8 h-screen items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full" src="https://i.postimg.cc/yxbHXHQc/Untitled-design-13.png" alt="dashboard image" />
                <div class="mt-4 md:mt-0 flex flex-col items-center md:items-start">
                    {lan === 'english' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Bring your business to the <span class="text-amber-600 dark:text-amber-500"> Digital Space</span> with us</h2>}
                    {lan === 'bangla' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আপনার বাবসাকে  <span class="text-amber-600 dark:text-amber-500"> ডিজিটাল প্ল্যাটফর্মে </span> এ আনুন  </h2>}
                    {lan == "english" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">BebshaAI is a platform that will allow SME businesses to bring their products in the digital platforms to expose them to a broader audience</p>}
                    {lan == "bangla" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">ব্যবসাAI আপনার ক্ষুদ্র ও মাঝারি ব্যবসা কে ডিজিটাল প্লাটফর্মগুলোতে আনতে সাহায্য করে </p>}
                    {lan == "english" && <a href="#" class="inline-flex text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900" onClick={()=>navigator("/chatbot")}>
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>}
                    {lan == "bangla" && <a href="#" class="inline-flex text-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        শুরু করো
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>}
                </div>
            </div>
        </div>
        <div class="bg-gray-200 dark:bg-slate-700">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                
                <div class="mt-4 md:mt-0">
                    {lan == "english" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><span class="text-amber-600 dark:text-amber-500">Augmented Intelligence</span> to drive digital sales</h2>}
                    {lan == "english" && <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">A chat agent that is different from your day to day LLM agent. It does not give solid answers to your questions! Rather it drives you to learn that concept on your own giving hints and examples along the way</p>}
                    {lan == "bangla" && <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আমরা আপনাকে শিক্ষার মাধ্যমে কর্মসংস্থান গড়ে তুলতে সাহায্য করি</h2>}
                    {lan == "bangla" && <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">আপনি শেখা শুরু করতে এবং আমাদের সাথে সংযুক্ত সংস্থাগুলিতে চাকরি পেতে আমাদের ট্র্যাকগুলি অনুসরণ করতে পারেন</p>}
                    <div className='flex my-2'>
                        <span className={`bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800`}>
                            History based learning
                        </span>
                        <span className={`bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800`}>
                            Context Rememberence
                        </span>
                    </div>
                </div>
                <img class="w-full dark:hidden" src="https://i.postimg.cc/R016yGXW/Untitled-design-10.png" alt="dashboard image" />
                <img class="w-full hidden dark:block" src="https://i.postimg.cc/R016yGXW/Untitled-design-10.png" alt="dashboard image" />
            </div>
        </div>
        <div class="bg-white bg-white dark:bg-gray-900">
            <div class="gap-8 h-screen items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full " src="https://i.postimg.cc/wMbYv8T7/Untitled-design-11.png" alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    {lan === 'english' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Empowered SMEs with <span class="text-amber-600 dark:text-amber-500">Data Driven </span> Approach </h2>}
                    {lan === 'bangla' && <h2 class="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">লক্ষাধিক  <span class="text-amber-600 dark:text-amber-500"> বাংলাদেশি ইঞ্জিনিয়রদের জন্য </span> একটি প্লাটফর্ম  </h2>}
                    {lan == "english" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">The content that you find on StudyBuddy is dynamically generated for each user. It learns the user's preferences based on the content that users consumes on our platform and modifies the upcoming videos accordingly</p>}
                    {lan == "bangla" && <p class="mb-6 text-center md:text-left  font-light text-gray-500 md:text-lg dark:text-gray-400">বিল্ডার হল সারা দেশে ইঞ্জিনিয়ারিং ছাত্র ও প্রফেশনালদের একটি প্ল্যাটফর্ম। আমরা ইঞ্জিনিয়ারদের নিয়ে কাজ করি যাতে তারা প্রশিক্ষণের এবং প্রজেক্ট শোকেসএর মাধ্যমে কাজ করার জন্য প্রস্তুত করা হয় এবং তাদের দেশব্যাপী কোম্পানিতে নিয়োগ নিশিত করা হয়  </p>}
                    <div className='flex my-2 md:justify-start justify-center'>
                        <span className={`bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800`}>
                            Generated Content
                        </span>
                        <span className={`bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800`}>
                            Questions change the content
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-screen px-4 py-8 bg-amber-200  mx-auto text-center lg:py-16 lg:px-6 dark:bg-amber-700">
           {lan=="english" && <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">60k</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Targetted SMEs</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">6k</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Reached in year 1</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl md:text-4xl font-extrabold">7+</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Collaborations</dd>
                </div>
            </dl>}
         
        </div>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                {lan=="english" && <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Listen about us from our users themselves</p>
                </div>}
                {lan=="bangla" && <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">আমাদের সম্পর্কে মতামত </h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">আমাদের ব্যবহারকারীদের নিজেদের কাছ থেকে আমাদের সম্পর্কে শুনুন</p>
                </div>}
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        {lan == "english" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"As an SME proprietor in Bangladesh, I was struggling to find my brand's identity and purpose until I discovered Bebsha.AI. Their inclusive and supportive environment empowered me to embrace my brand's uniqueness and develop my lifestyle. Thanks to BebshaAI, I now feel confident and equipped to navigate life with newfound clarity."</p>
                        </blockquote>}
                        {lan == "bangla" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"বাংলাদেশের একটি ছোট ও মাধ্যমিক উদ্যোক্তা হিসেবে, আমি আমার ব্র্যান্ডের পরিচয় এবং উদ্দেশ্য খুঁজে পাচ্ছিলাম না। তবে আমি যখন Bebsha.AI খোজা পেলাম, তখন সব পরিবর্তন হয়ে গেলো।  Bebsha.AIকে ধন্যবাদ, এখন আমাকে আমার ব্র্যান্ড নিয়ে আত্মবিশ্বাস দেবার জন্য ।"</p>
                        </blockquote>}
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://i.postimg.cc/Jhzkj5cj/image.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                {lan == "english" && <div>Anonymous</div>}
                                {lan == "english" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> Bangladesh</div>}
                                {lan == "bangla" && <div>বেনামী</div>}
                                {lan == "bangla" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> বাংলাদেশ</div>}
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        {lan == "english" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"As an SME proprietor in Bangladesh, I was struggling to find my brand's identity and purpose until I discovered Bebsha.AI. Their inclusive and supportive environment empowered me to embrace my brand's uniqueness and develop my lifestyle. Thanks to BebshaAI, I now feel confident and equipped to navigate life with newfound clarity."</p>
                        </blockquote>}
                        {lan == "bangla" && <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <p class="my-4">"বাংলাদেশের একটি ছোট ও মাধ্যমিক উদ্যোক্তা হিসেবে, আমি আমার ব্র্যান্ডের পরিচয় এবং উদ্দেশ্য খুঁজে পাচ্ছিলাম না। তবে আমি যখন Bebsha.AI খোজা পেলাম, তখন সব পরিবর্তন হয়ে গেলো।  Bebsha.AIকে ধন্যবাদ, এখন আমাকে আমার ব্র্যান্ড নিয়ে আত্মবিশ্বাস দেবার জন্য ।"</p>
                        </blockquote>}
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://i.postimg.cc/Jhzkj5cj/image.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                {lan == "english" && <div>Anonymous</div>}
                                {lan == "english" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> Bangladesh</div>}
                                {lan == "bangla" && <div>বেনামী</div>}
                                {lan == "bangla" && <div class="text-sm font-light text-gray-500 dark:text-gray-400"> বাংলাদেশ</div>}
                            </div>
                        </figcaption>
                    </figure>
                   

                </div>
                <div class="text-center">
                    <a href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
                </div>
            </div>
        </section>

      

        
    </div>

    )
}
