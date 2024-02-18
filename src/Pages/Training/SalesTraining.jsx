import React from "react";
import { SALES_TOPICS } from "./SalesTrainingData";
import Navbar from "../../Components/Navbar";
import Navigation from "../../Components/Navigation";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
} from "@mui/material";
import { MdMore } from "react-icons/md";

import { BiDownArrow } from "react-icons/bi";
import axios from "axios";
import { BsArrowDown } from "react-icons/bs";
export default function SalesTraining() {
  const [open, setOpen] = React.useState(1);
  const [input,setInput]=React.useState()  
  const [loading,setLoading]=React.useState(false)  
  const [done,setDone]=React.useState(false)  
  const [response,setResponse]=React.useState()  
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleSubmit=async(idx,text)=>{
    setLoading(true)
    setDone(false)
    const res=await axios.post("http://127.0.0.1:5000/scenerio-score",{
      "index":idx,
      "response":text
    })
    console.log(res.data)
    setResponse(res.data)
    setDone(true)
    setLoading(false)
  }
  return (
    <>
      <Navbar />
      <Navigation />
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      
      <div className="w-2/3 mt-24 flex flex-col items-center justify-center">
        {SALES_TOPICS.map((a,idx) => (
          <Accordion className="w-full mt-2">
            <AccordionSummary
              expandIcon={<BsArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="bg-gray-100 flex flex-row"

            >
            <div>
              <p className="font-bold text-orange-500 text-md">Scenario : {idx+1}</p>
              <Typography>{a}</Typography>
            </div>
              
            </AccordionSummary>
            <AccordionDetails>
              <input value={input} onChange={(e) => setInput(e.target.value)} class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" />
              {!loading && <button type="submit" class="w-full my-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={()=>handleSubmit(idx,input)}>Score Response</button>}
              {loading && <div style={{display:"flex",alignItems:'center'}}><CircularProgress/><h2 sx={{marginLeft:"10px"}}>Scoring.....</h2></div>}
              {done && <p className="font-bold text-md">Your Score : {response.score} out of 10</p>}
              {done && <p>{response.review}</p>}
              </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
    </>
  );
}
