import React, { useEffect, useState } from 'react'
import Speech from "speak-tts";
import { SpriteAnimator } from 'react-sprite-animator'
import heart from './1.png'
import { GrChat, GrMicrophone, GrNext, GrPause, GrPlay, GrPrevious, GrSettingsOption } from "react-icons/gr";
export default function Speaker() {
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    const texts = [
        "hello this is your new teacher",
        "I will be guiding you through this course",
        "With my help you'll be able to learn things more efficiently",
        
    ]
    const incCount = () => {
        if (count >= texts.length - 1) {
            setCount(0)
            sayLine(0)
        }
        else {
            const a = count + 1
            setCount(a)
            sayLine(a)
        }
        
    }
    const decCount = () => {
        if (count <= 0) {
            setCount(texts.length - 1)
            sayLine(texts.length - 1)
        }
        else {
            const a = count - 1
            setCount(a)
            sayLine(a)
        }
        

    }
    const speech = new Speech();

    const sayLine = (num) => {
        setStart(true)
        speech
            .speak({
                text: texts[num],
                queue: false, // current speech will be interrupted,
                listeners: {
                    onstart: () => {
                        console.log("Start utterance")
                    },
                    onend: () => {
                        console.log("End utterance")
                    },
                    onpause:()=>{
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
                console.log("Success !");
            })
            .catch((e) => {
                setStart(false)
                console.error("An error occurred :", e);
            });
        
    };
    useEffect(() => {
        speech
            .init({
                lang: "en-US"
            })
            .then((data) => {
                //speech.setVoice("kathy")
                console.log("Speech is ready, voices are available", data);
            })
            .catch((e) => {
                alert("An error occured while initializing : ");
                //console.error("An error occured while initializing : ", e);
            });
        

    }, [])
    return (
        <div className='w-screen min-h-screen flex  flex-col items-center justify-center'>
            <h1 className='text-3xl mt-20 mb-20' onClick={()=>setStart(false)}>Ennovators 7.0 Chat agent</h1>
            <button type="button" onClick={incCount} class="fixed top-10 left-10 text-white shadow-lg bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><GrSettingsOption size={32} /></button>
            <div className="flex max-w-4xl w-2/3 items-start bg-[url(https://i.postimg.cc/Nf72z4tF/Portfolio.png)] bg-contain bg-no-repeat rounded-3xl p-4 border border-gray-300 shadow-md mr-5">
                <div className="w-2/3 flex items-center">
                    <p className='px-5 py-2 rounded-full bg-orange-500 text-white '>{texts[count]}</p>
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
            <div className="flex flex-col max-w-xl w-full ">
                <div className="flex w-full  items-center justify-center my-2">
                    <button type="button" onClick={decCount} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrPrevious size={18} /></button>  
                    <button type="button" onClick={()=>speech.pause()} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrPause size={18} /></button>
                    <button type="button" onClick={()=>speech.resume()} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrPlay size={18} /></button>
                    <button type="button" onClick={incCount} class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2  mx-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><GrNext size={18} /></button>
                </div>
                <div className="flex w-full max-w-xl items-center ">
                    {/* <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Chat with me"/> */}
                    
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Chat with me" />
                        <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            <GrChat size={18} />
                        </button>
                    </div>

                </div>
            </div>




         

        </div>
    )
}
