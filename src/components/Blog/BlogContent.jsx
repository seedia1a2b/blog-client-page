import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/AppContent/AppContentProvider'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const BlogContent = () => {
  const [blog, setBlog] = useState([])
  
  const {id} = useParams()

  const {blogs} =  useAppContext()

  useEffect(()=> {
    const filter = blogs.filter(item => item._id === id);
    setBlog(filter[0])
  },[id, blog])
  
  return blog && (
    
      <div className='mt-10 w-full'>
        <img className='rounded-3xl max-sm:rounded-xl md:max-w-[70%] max-sm:h-[200px] sm:h-[500px] mx-auto w-full object-center' src={blog.image} alt="" />
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
