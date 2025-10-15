import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/AppContent/AppContentProvider'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const BlogContent = () => {
  const [blog, setBlog] = useState([])
  
  const {id} = useParams()

  console.log(id)
  const {blogs} =  useAppContext()
  console.log(blogs)

  useEffect(()=> {
    const filter = blogs.filter(item => item._id === id);
    console.log(filter)
    setBlog(filter[0])
  },[id, blog])
  
  return blog && (
    
      <div className='mt-10'>
        <img className='rounded-3xl max-sm:rounded-xl max-sm:h-[200px] object-cover max-w-full sm:max-w-[80%] mx-auto' src={blog.image} alt="" />
        <div className='max-w-sm sm:max-w-[70%] mx-auto'>
          <h1 className='mt-8 max-sm:text-lg text-2xl font-semibold text-slate-700'>{blog.title}</h1>
          <div className='mt-8'>
            <p className='rich-text max-sm:text-sm' dangerouslySetInnerHTML={{__html:blog.description}}></p>
          </div>
        </div>
      </div>
  
  )
}

export default BlogContent
