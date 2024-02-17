import React,{useState,useEffect} from 'react'
import Speech from "speak-tts";
import { SpriteAnimator } from 'react-sprite-animator'
import heart from './2.png'
import { useLocation, useParams } from 'react-router-dom';
export default function Agent() {
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const [lineDone, setLineDone] = useState(false)
    const [botReady, setBotReady] = useState(false)
    const [currentOption, setCurrentOption] = useState(1)

    const [hide,setHide]=useState(false)
    const [width,setWidth]=useState(null)
    const speech = new Speech();
    const param=useLocation()
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
                setHide(true)
                //console.log("Success !");
            })
            .catch((e) => {
                setStart(false)
                console.error("An error occurred :", e);
            });

    };
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

        ],
        "5": [
            "Hello there, I'm your agent. Let me know if you need any help. Just click on my face",
            "This page shows you all the things that you can do on this platform",
            "Click on any option and its pretty intuitive",
        ],
    
        "6": [
            "This is the registration page",
            "Just fill out the basic information and we'll open accounts for you in all platforms",
            "Details would be sent to your phone number",

        ],
        "7": [
            "This is the market analyzer page",
            "Here you can see the category wise market trends",
            "You can even get suggestions on what product you should invest in next",
        ],
        "8": [
            "You can place your orders in this page",
            "Just follow the steps and you can place your product listings upto 50 times faster",
   
        ],
        "9": [
            "Choose the category of product you want to list",
            "We will support more categories in the future",
        ],
        "10": [
            "You can track all your products here",
            "Have a look at how they're performing",
        ],
    }
    const questions = {
        "1": "What can you do?",
        "2": "How are you useful?",
        "3": "I don't like your appearence.",
        "4": "Tell me something about yourself"
    }
    const opts = ["1", "2", "3", "4"]
    const incCount = (idx) => {
        setHide(false)
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

    useEffect(() => {
        setWidth(window.innerWidth)
        const pathname=(param.pathname)
        if(pathname=="/listing"){setCurrentOption(8)}
        if(pathname=="/category"){setCurrentOption(9)}
        if(pathname=="/options"){setCurrentOption(5)}
        if(pathname=="/register"){setCurrentOption(6)}
        if(pathname=="/analyze"){setCurrentOption(7)}
        if(pathname=="/track"){setCurrentOption(10)}
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
            setCount(-1)
            //sayLine(0)
        }

    }, [currentOption])

  return (
    <>
    {(width>600) && <div  className="fixed bottom-0 right-0 flex  flex-col items-end ">
        {!hide && <div className="flex items-center" >
            {currentOption != "-1" && <p className='px-5 py-1 rounded-xl text-center md:rounded-full bg-orange-500 text-white text-xs' style={{maxWidth:"200px"}}>{texts[currentOption][count]}</p>}
        </div>}
        <div onClick={()=>incCount(currentOption)} className="">
        <SpriteAnimator
            width={200}
            height={200}
            sprite={heart}
            shouldAnimate={start}
            fps={8}
            startFrame={0}
            scale={1}
            
        /></div>
      
    </div>}
    </>
  )
}
