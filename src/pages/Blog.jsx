import React, { useEffect, useState } from 'react'
import BlogHeader from '../components/Blog/BlogHeader'
import BlogContent from '../components/Blog/BlogContent'
import Comment from '../components/Blog/Comment'
import AddComment from '../components/Blog/AddComment'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../AppContent/AppContentProvider'
import Loader from '@/components/Blog/Loader'

const Blog = () => {
  const [blog, setBlog] = useState([])

  const {id} = useParams()

  const { blogs } = useAppContext()


  useEffect(()=> {
    const filter = blogs.filter(item => item._id === id);
    setBlog(filter[0])
  },[id, blogs])



  return (
    <div className='flex flex-col items-center'>
      {
        blog ? (
          <>
          <BlogHeader blog={blog}/>
          <BlogContent blog={blog}/>
          <Comment />
          <AddComment />
          </>
        ): (
          <Loader />
        )
      }
    </div>
  )
}

export default Blog
