import React, { useEffect, useState } from 'react'
import Speech from "speak-tts";
import { SpriteAnimator } from 'react-sprite-animator'
import heart from './1.png'
import { GrChat, GrMicrophone, GrNext, GrPause, GrPlay, GrPrevious, GrSettingsOption } from "react-icons/gr";
import Navigation from '../Components/Navigation';
import Navbar from '../Components/Navbar';

import ParaphraserModal from '../Components/Modals/ParaphraserModal';
import ProductsModal from '../Components/Modals/ProductsModal';
import BrandModal from '../Components/Modals/BrandModal';
export default function ProductionPage() {
    //const ollama_host = "http://localhost:11434"
    
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const [lineDone, setLineDone] = useState(false)
    const [botReady, setBotReady] = useState(false)
    const [currentOption, setCurrentOption] = useState("-1")
    
    const [showProductsModal, setShowProductsModal] = React.useState(false);
    const [showAnalyticsModal, setShowAnalyticsModal] = React.useState(false);
    const [showParaphraserModal, setShowParaphraserModal] = React.useState(false);
    const [showBrandModal, setShowBrandModal]=useState(false)
    const closeParaphraserModal=()=>{
        setShowParaphraserModal(false)
    }
    const closeProductsModal=()=>{
        setShowProductsModal(false)
    }
    const closeBrandsModal=()=>{
        setShowBrandModal(false)
    }
    const texts = {
        "1": [
            "I can help you generate product images using AI models",
            "I can help you create product listings and upload them all to several platforms all at once",
            "I will predict future market trends to make your decision making process easier",
        ],
        "2": [
            "I can help you generate product images using AI models",
            "I can help you create product listings and upload them all to several platforms all at once",
            "I will predict future market trends to make your decision making process easier",
        ],
        "3": [
            "Change me!",
            "I am fully customizable! Meaning, you can modify my appearence, location, voice; everything!",
            "Just go to the settings and change me as you want!"
        ],
        "4": [
            "Something about myself",
            "I am your business assistant who can help you boost your sales in the digital market",

        ]
    }
    const questions = {
        "1": "What can you do?",
        "2": "How are you useful?",
        "3": "I don't like your appearence.",
        "4": "Tell me something about yourself"
    }
    const opts = ["1", "2", "3", "4"]
    const incCount = (idx) => {
        if (count >= texts[idx].length - 1) {
            setCount(0)
            sayLine(0)
        }
        else {
            const a = count + 1
            setCount(a)
            sayLine(a)
        }

    }
    const decCount = (idx) => {
        if (count <= 0) {
            setCount(texts[idx].length - 1)
            sayLine(texts[idx].length - 1)
        }
        else {
            const a = count - 1
            setCount(a)
            sayLine(a)
        }


    }
    const speech = new Speech();

    const sayLine = (num) => {
        try {
            speech.setLanguage("en-US")
            speech.setVoice("Samantha")
        } catch (e) {

        }
        setStart(true)
        setLineDone(false)
        console.log("CUr option", currentOption)
        speech
            .speak({
                text: texts[currentOption][num],
                queue: false, // current speech will be interrupted,
                listeners: {
                    onstart: () => {
                        console.log("Start utterance")
                    },
                    onend: () => {
                        console.log("End utterance")
                    },
                    onpause: () => {
                        setStart(false)
                    },
                    onresume: () => {
                        setStart(true)
                        console.log("Resume utterance")
                    },
                    onboundary: (event) => {
                        console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')

                    }
                }
            })
            .then((res) => {
                setStart(false)
                setLineDone(true)
                //console.log("Success !");
            })
            .catch((e) => {
                setStart(false)
                console.error("An error occurred :", e);
            });

    };
    

    useEffect(() => {
        speech
            .init({
                language: "en-US"
            })
            .then((data) => {
                //speech.setVoice("kathy")
                console.log("Speech is ready, voices are available", data);
                try {
                    speech.setLanguage("en-US")
                    speech.setVoice("Samantha")
                } catch (e) {

                }

            }).then(data => {
                //speech.setLanguage("en-US")
                //speech.setVoice("Samantha")
                setBotReady(true)
            })
            .catch((e) => {
                //alert("An error occured while initializing ");
                console.error("An error occured while initializing : ", e);
            });


    }, [])
    useEffect(() => {
        if (currentOption != -1) {
            setCount(0)
            sayLine(0)
        }

    }, [currentOption])
    //https://i.postimg.cc/y6vFkSK2/Portfolio-3.png
    return (
        <div>
            <Navigation />
            <Navbar />
            <div className='w-screen min-h-screen flex mb-24 md:mb-0 flex-col items-center justify-center dark:bg-gray-900'>
                {/* <h1 className='text-3xl md:mt-24 mb-20 dark:text-white' onClick={() => setStart(false)}>Ennovators 7.0 Chat agent</h1> */}
                <button type="button" onClick={() => incCount(currentOption)} class="hidden md:fixed md:bottom-10 right-10 text-white shadow-lg bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><GrSettingsOption size={32} /></button>
                <div className="flex md:flex-row flex-col max-w-4xl w-2/3 items-start bg-[url(https://i.postimg.cc/C5gS0KPN/Portfolio-4.png)] bg-cover md:bg-contain bg-no-repeat rounded-3xl p-4 border border-gray-300 dark:border-gray-600 shadow-md mr-5">
                    <div className="w-full md:w-2/3 flex items-center">
                        {currentOption != "-1" && <p className='px-5 py-2 rounded-xl md:rounded-full bg-orange-500 text-white '>{texts[currentOption][count]}</p>}
                    </div>

                    <SpriteAnimator
                        width={300}
                        height={560}
                        sprite={heart}
                        shouldAnimate={start}
                        fps={8}
                        startFrame={0}
                        //stopLastFrame={true}
                        scale={1}
                    //reset={!start}
                    />
                </div>
                <div className="flex flex-col max-w-3xl w-full ">
                    <div className="flex w-full  items-center justify-center my-2">
                        <button type="button" onClick={() => decCount(currentOption)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrPrevious size={18} /></button>
                        {speech.speaking() && !speech.paused() && <button type="button" onClick={() => speech.pause()} class="hover:text-white shadow-lg bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><GrPause size={18} /></button>}
                        {speech.paused() && !lineDone && <button type="button" onClick={() => speech.resume()} class="hover:text-white shadow-lg bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><GrPlay size={18} /></button>}
                        {!lineDone && <button type="button" disabled onClick={() => incCount(currentOption)} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrNext size={18} /></button>}
                        {lineDone && <button type="button" onClick={() => incCount(currentOption)} class="hover:text-white shadow-lg bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><GrNext size={18} /></button>}
                    </div>
                    <div className="flex md:flex-row flex-col w-full max-w-3xl items-center ">
                        {/* <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Chat with me"/> */}
                        {botReady && opts.map(a => (
                            <button type="button" onClick={() => {
                                setCurrentOption(a)
                                console.log(currentOption)
                            }} class="mt-2 hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{questions[a]}</button>
                        ))}
                        {/* <button type="button" onClick={() => setShowBrandModal(true)} class="mt-2 hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Create a brand for me</button>
                        <button type="button" onClick={() => setShowParaphraserModal(true)} class="mt-2 hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Create me a product listing</button>
                        <button type="button" onClick={() => setShowProductsModal(true)} class="mt-2 hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Tell me about my products</button> */}

                    </div>
                </div>
                
                



            </div>
            {showParaphraserModal && <ParaphraserModal terminator={closeParaphraserModal}/>}
            {showProductsModal && <ProductsModal terminator={closeProductsModal}/>}
            {showBrandModal && <BrandModal terminator={closeBrandsModal}/>}
        </div>
    )
}
/*WWrite me a product description in markdown of blue ripped jeans for men. Make sure the markdown is correct. The answer should be descriptive. Include the points : title, subtitle, price, benefits, size chart,usage, caution.*/