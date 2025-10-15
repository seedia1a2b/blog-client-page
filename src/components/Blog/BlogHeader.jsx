import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets.js'
import { useParams } from 'react-router-dom'
import { useAppContext } from '@/AppContent/AppContentProvider.jsx'
import moment from 'moment'

const BlogHeader = () => {
  const [blog, setBlog] = useState([])
  
  const {id} = useParams()
  const {blogs} =  useAppContext()

  useEffect(()=> {
    const filter = blogs.filter(item => item._id === id);
    setBlog(filter[0])
  },[id,blogs])

  return blog && (
      <div className='text-center relative'>
        <p className='text-xs text-blue-800'>Published {moment(blog.createdAt).fromNow()}</p>
        <h1 className='text-xl sm:text-2xl xl:text-5xl font-bold text-slate-700 max-w-sm lg:max-w-lg xl:max-w-xl mt-2'>{blog.title}</h1>
        <p className='text-xs sm:text-sm text-gray-600 mb-4 mt-2'>{blog.subTitle}</p>
        <p className='text-blue-800 bg-blue-400/20 px-4  rounded-full border border-blue-600 inline-flex '>Seedia Nyassi</p>
        <img className='absolute -top-0 right-0 -z-1 left-0' src={assets.gradientBackground} alt="" />
      </div>
  )
}

export default BlogHeader
