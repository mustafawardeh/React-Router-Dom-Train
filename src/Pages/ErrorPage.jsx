import React from 'react'
import { TfiFaceSad } from "react-icons/tfi";

const ErrorPage = () => {
  return (
    <div className='w-screen h-[600px] bg-white text-white flex justify-center items-center'>
       <div className='flex flex-col items-center'>
        <TfiFaceSad size={170} className='text-neutral-500 mb-[20px]'/>
        <h1 className='text-neutral-500 font-bold text-center text-[70px]'>404</h1>
        <h1 className='text-neutral-300 font-bold text-center text-[20px] mb-[20px]'>Page not found</h1>
        <h1 className='text-neutral-500 font-bold text-center text-[14px]   '>The Page you are looking for doesn't exist or an other error occurred.</h1>
        <h1 className='text-neutral-500 font-bold text-center text-[14px]'>Go back, or click button in the navbar to go to your destination paage.</h1>
       </div>
    </div>
  )
}

export default ErrorPage