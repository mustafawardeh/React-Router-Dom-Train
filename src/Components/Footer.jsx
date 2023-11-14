import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const [active, Setactive] = useState('')
  const location = useLocation();

  useEffect(() => {
    // Extract the last part of the pathname to determine the active state
    const pathname = location.pathname;
    const parts = pathname.split('/').filter((part) => part !== '');
    const currentActive = parts.length > 0 ? parts[parts.length - 1] : '';

    // Update the active state
    Setactive(currentActive);
  }, [location.pathname]);

  const handleactive = (activstatus) => {
    Setactive(activstatus)
  }
  return (
    <div className=' w-screen flex flex-1 flex-col space-y-3 items-center bg-neutral-900 mt-6 pb-5'>
      <ul className='flex space-x-2 p-2 items-center'>
        <Link to='/'
          onClick={() => handleactive('')}
        >
          <a className={`${active===''?'border-b border-white/60 text-white/60':' text-white'}  p-1 text-[14px]  font-bold hover:text-white/60 `}>Home</a>
        </Link>

        <Link to='/about'
          onClick={() => handleactive('about')}
        >
          <a className={`${active==='about'?'border-b text-white/60':' text-white'} p-1 text-[14px]  font-bold hover:text-white/60 `}>About</a>
        </Link>

        <Link to='/products'
          onClick={() => handleactive('products')}
        >
          <a className={`${active==='products'?'border-b text-white/60':' text-white'}  p-1 text-[14px]  font-bold hover:text-white/60 `}>Products</a>
        </Link>

        <Link to='/posts'
          onClick={() => handleactive('posts')}
        >
          <a className={`${active==='posts'?'border-b text-white/60':' text-white'}  p-1 text-[14px] font-bold hover:text-white/60 `}>Posts</a>
        </Link>
      </ul>

      <div className='flex'>
        <p className='text-gray-500 mr-6'>© 2022. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer