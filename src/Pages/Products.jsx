import React from 'react'
import Head from '../Components/Head'
import { data } from '../Data/data'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Head title={'Products'} />
      <div className='bg-white flex flex-wrap gap-6 justify-center  py-6 xl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px]'>
        {
          data.map(item => (
            <div className='shadow-md rounded-lg overflow-hidden flex flex-col w-[300px] bg-gray-100 h-[400px]'>
              <div className=' h-[60%] w-full flex justify-center bg-gray-200 rounded-b-lg items-center'>
                <img src={item.image} className=' object-contain w-full h-full' />
              </div>

              <div className='relative flex flex-col items-center w-full bg-white h-[40%] p-2'>
                <h3 className='text-center font-bold'>{item.title}</h3>
                <p className='text-neutral-400 text-[12px] text-center'>{item.details}</p>
                <div className='absolute bottom-4 w-full px-3  flex justify-between text-[14px]'>
                  <p className=' text-neutral-500 font-semibold'>
                    Price : <span className='text-sky-500 font-bold'>${item.price}</span>
                  </p>
                  <button onClick={() => navigate(`/products/${item.id}`, { state: { item:item } })} className='px-1 py-[2px] flex items-center space-x-1 bg-blue-600 text-white font-bold text-[12px]'>
                    <p>Details</p>
                    <FaArrowRight />
                  </button>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Products