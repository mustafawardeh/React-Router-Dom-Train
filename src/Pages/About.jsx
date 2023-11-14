import React from 'react'
import Head from '../Components/Head'

const About = () => {
  return (
    <div className='flex flex-col ' >
      <Head title='About ' />
      <div className='flex justify-center space-x-3 py-6 bg-white xl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px]'>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-neutral-600 font-bold uppercase '> why choose us</h2>
          <div className='border-neutral-500 border-2 w-[15%]' />
          <p className='text-gray-500 text-[12px]'>
            Aliquam non justo sit amet ex convallis congue eget in lacus. Morbi placerat ligula at magna tincidunt, vel efficitur justo ultrices. Nunc faucibus consequat metus, id consequat eros mattis at. Vestibulum semper commodo accumsan. Fusce pretium diam eu orci accumsan, pellentesque malesuada augue vehicula. Praesent vel fermentum nisl, in consequat ligula. Cras efficitur vestibulum elit, eu porttitor velit posuere ac. Sed eros risus, ultricies nec dolor nec, rutrum fermentum dui.
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-neutral-600 font-bold uppercase '> our missions</h2>
          <div className='border-neutral-500 border-2 w-[15%]' />
          <p className='text-gray-500 text-[12px]'>
            Aliquam non justo sit amet ex convallis congue eget in lacus. Morbi placerat ligula at magna tincidunt, vel efficitur justo ultrices. Nunc faucibus consequat metus, id consequat eros mattis at. Vestibulum semper commodo accumsan. Fusce pretium diam eu orci accumsan, pellentesque malesuada augue vehicula. Praesent vel fermentum nisl, in consequat ligula. Cras efficitur vestibulum elit, eu porttitor velit posuere ac. Sed eros risus, ultricies nec dolor nec, rutrum fermentum dui.
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-neutral-600 font-bold uppercase  '> what we do</h2>
          <div className='border-neutral-500 border-2 w-[15%]' />
          <p className='text-gray-500 text-[12px]'>
            Aliquam non justo sit amet ex convallis congue eget in lacus. Morbi placerat ligula at magna tincidunt, vel efficitur justo ultrices. Nunc faucibus consequat metus, id consequat eros mattis at. Vestibulum semper commodo accumsan. Fusce pretium diam eu orci accumsan, pellentesque malesuada augue vehicula. Praesent vel fermentum nisl, in consequat ligula. Cras efficitur vestibulum elit, eu porttitor velit posuere ac. Sed eros risus, ultricies nec dolor nec, rutrum fermentum dui.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About