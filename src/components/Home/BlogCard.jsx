import React from 'react'
import { useAppContext } from '../../AppContent/AppContentProvider'

const BlogCard = ({image, category, title, description, id}) => {
  const { navigate } = useAppContext()

  return (
    <div className='flex flex-col items-start gap-y-4 rounded-xl shadow-lg overflow-hidden'>
      <div className=''>
       <img onClick={()=> navigate(`/blog/${id}`)} className='w-full object-contain cursor-pointer' src={image} alt="" />
      </div>
      <div className='flex flex-col gap-2 px-4 py-2'>
        <div>
          <p className='bg-blue-200 inline-flex px-4 rounded-full text-primary'>{category}</p>
        </div>
        <p className='font-semibold text-slate-700'>{title}</p>
        <p className='text-gray-600' dangerouslySetInnerHTML={{__html: (description).slice(0,80) + '...'}}></p>
      </div>
    </div>
  )
}

export default BlogCard
