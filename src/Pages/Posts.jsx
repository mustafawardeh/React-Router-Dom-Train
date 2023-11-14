import React, { useEffect, useState } from 'react'
import Head from '../Components/Head'



const Posts = () => {
  const [Posts, SetPosts] = useState([])
  const [Loader, SetLoader] = useState(true)
  useEffect(() => {
    getPosts()

  }, [])
  const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => SetPosts(json))
      .then(SetLoader(false))
  }
  return (
    <div className='bg-white pb-10'>
      <Head title='posts' />
      <div className='xl:px-[150px] lg:px-[100px] md:px-[80px] px-[50px]  my-8'>
        {
          Loader ?
            (<div className='w-full h-[400px] flex flex-col space-y-2 justify-center items-center'>
              <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"/>
              <p>Loading</p>
            </div>)
            :
            (
              <div className='flex justify-center flex-wrap gap-6'>
                {

                  Posts.map((post) => (
                    <div key={post.id} className='flex flex-col gap-3  items-center p-4 shadow md:w-[47%] w-full'>
                      <h1 className='font-bold text-center capitalize'>{post.title}</h1>
                      <p className='text-neutral-500 text-[14px] text-center'>{post.body}</p>
                    </div>
                  ))

                }
              </div>

            )
        }
      </div>
    </div>
  )
}

export default Posts