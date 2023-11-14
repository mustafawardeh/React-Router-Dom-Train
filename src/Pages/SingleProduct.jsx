import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Head from '../Components/Head'

const SingleProduct = () => {
  const { state } = useLocation()
  const product = state?.item || {}

  return (
    <div >
      <Head title={product.title} />
      <div className='flex flex-wrap bg-white md:space-x-12 space-y-12 xl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px]  py-8'>
        <div className='bg-gray-100 shadow-md shadow-neutral-200 md:w-[40%] overflow-hidden md:h-[300px]  w-full h-[300px]  flex justify-center items-center'>
          <img src={product.image} className='object-contain w-full' />
        </div>
        <div className='flex flex-col md:w-[52%] w-full'>
          <h2 className='font-bold text-[24px] capitalize text-neutral-700'>{product.title}</h2>
          <div className='border-2 border-neutral-400 mt-1 w-[80px]' />
          <p className='text-neutral-400 mt-4'>Price: <span className='text-blue-800 font-bold '>${product.price}</span></p>
          <p className='text-neutral-400'>{product.details}</p>
          <div className='flex space-x-4 mt-6'>
            <Link to={-1} className='px-2 flex justify-center items-center py-[2px] bg-blue-700 text-white font-bold'>
              Back
            </Link>
            <Link to={'/'} className='px-2 flex justify-center items-center py-[2px] bg-blue-700 text-white font-bold'>
              Home
            </Link>
            <Link to={'/products'} className='px-2 flex justify-center items-center py-[2px] bg-blue-700 text-white font-bold'>
              Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct