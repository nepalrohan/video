import React from "react";
import { useState } from "react";
import {   useNavigate } from "react-router-dom";
const Home = () => {
  const [codevalue, setValue] = useState("");
  const navigate= useNavigate();

  const handlejoin =(e)=>{
e.preventDefault();
navigate(`/room/${codevalue}`)
  }

 

  return (
    <div className="flex flex-col items-center  gap-5 justify-center h-screen w-screen">
    <span className="text-lg text-blue-700">Note:Made only for pc (Test mode...)</span>
      <span className="  text-2xl text-blue-600 font-semibold ">
        Welcome to{" "}
        <span className="text-purple-600 animate-pulse text-3xl">
          Hamro-Chat 
        </span>
       
      </span>
      <div className="flex flex-col gap-3 font-semibold bg-gray-200 shadow-md rounded-lg h-[24vh]  md:h-[30vh] sm:h-[24vh] p-4">
        <label className='mx-auto font-semibold text-blue-700'>Verify Chat Code</label>
        <input
          className="outline-none bg-white p-1 rounded-lg text-center border-b-2"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Enter chat code here"
          value={codevalue}
        />
        <button
          type="submit"
          onClick={handlejoin}
          className="text-lg font-semibold rounded-lg  hover:bg-blue-400 text-white bg-blue-500 w-[70%] text-center mx-auto"
        >
          Join Chat
        </button>
      </div>
    </div>
  );
};

export default Home;
