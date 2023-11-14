import React from 'react'

const Head = ({title,pathlink}) => {
  return (
    <div className='bg-gray-200 flex justify-betweenxl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px]'>
      <h2 className='text-neutral-700 text-[24px] font-bold p-9 uppercase ml-4'>{title}</h2>
    {
      pathlink?
      ''
      :''
    }
    </div>
  )
}

export default Head