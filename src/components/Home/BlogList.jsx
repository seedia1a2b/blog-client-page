import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { useAppContext } from '../../AppContent/AppContentProvider'

const BlogList = () => {
  const [select, setSelect] = useState('All')

  const [filtered, setFiltered] = useState('')

  const {blogs} = useAppContext()
  
  const filterBlogs = async () => {
    const filter = blogs.filter(item => select === 'All' ? true : item.category.toLowerCase() === select.toLowerCase())
    setFiltered(filter)
  }

  useEffect(()=> {
    filterBlogs()
  },[select,blogs])

  return (
    <div className='pt-8'>
      <div className='flex justify-center items-center gap-4 text-sm max-sm:text-xs max-sm:gap-2 lg:text-lg flex-wrap'>
        <p onClick={()=> setSelect('All')} className={`${select === 'All' ? 'bg-primary text-white px-4 rounded-full': ' bg-gray-200 px-2 rounded-full border-gray-400 border'} cursor-pointer`}>All</p>
        <p onClick={()=> setSelect('Technology')} className={`${select === 'Technology' ? 'bg-primary text-white px-4 rounded-full': ' bg-gray-200 px-1.5 rounded-full border-gray-400 border'} cursor-pointer`}>Technology</p>
        <p onClick={()=> setSelect('Startup')} className={`${select === 'Startup' ? 'bg-primary text-white px-4 rounded-full': ' bg-gray-200 px-2 rounded-full border-gray-400 border'} cursor-pointer`}>Startup</p>
        <p onClick={()=> setSelect('Lifestyle')} className={`${select === 'Lifestyle' ? 'bg-primary text-white px-4 rounded-full': ' bg-gray-200 px-2 rounded-full border-gray-400 border'} cursor-pointer`}>Lifestyle</p>
        <p onClick={()=> setSelect('Finance')} className={`${select === 'Finance' ? 'bg-primary text-white px-4 rounded-full': ' bg-gray-200 px-2 rounded-full border-gray-400 border'} cursor-pointer`}>Finance</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 py-8'>
        {
          filtered.length > 0 &&
          filtered.map((item, index) => (
            <BlogCard key={index} image={item.image} category={item.category} title={item.title} description={item.description} id={item._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default BlogList
