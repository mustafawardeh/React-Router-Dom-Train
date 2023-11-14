import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [active, Setactive] = useState('')

  // to edit the active link using back ground
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
    <nav className='flex justify-between items-center p-4  xl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px] bg-neutral-900'>
      <div >
        <h1 className='text-[35px] font-bold text-white'>Logo</h1>
      </div>
      <ul className='flex space-x-4 p-2 items-center'>
        <Link to='/'
          onClick={() => handleactive('')}
        >
          <button className={`${active === '' ? 'bg-blue-700' : 'bg-blue-900'}  text-white py-1 px-4 flex justify-center items-center text-[14px] rounded-md font-bold transition-all hover:bg-blue-700`}>
            Home
          </button>
        </Link>

        <Link to='/about'
          onClick={() => handleactive('about')}
          className='flex'
        >
          <button className={`${active === 'about' ? 'bg-blue-700' : 'bg-blue-900'}  text-white py-1 px-4 flex justify-center items-center text-[14px] rounded-md font-bold transition-all hover:bg-blue-700`}>About</button>
        </Link>

        <Link to='/products'
          onClick={() => handleactive('products')}
        >
          <button className={`${active === 'products' ? 'bg-blue-700' : 'bg-blue-900'}  text-white py-1 px-4 flex justify-center items-center text-[14px] rounded-md font-bold transition-all hover:bg-blue-700`}>Products</button>
        </Link>

        <Link to='/posts'
          onClick={() => handleactive('posts')}
        >
          <button className={`${active === 'posts' ? 'bg-blue-700' : 'bg-blue-900'}  text-white py-1 px-4 flex justify-center items-center text-[14px] rounded-md font-bold transition-all hover:bg-blue-700`}>Posts</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Header