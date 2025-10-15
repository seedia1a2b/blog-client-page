import React from 'react'
import { assets, footer_data } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='mt-60 bg-blue-50/60 px-4 '>
      <div className='flex max-sm:flex-col'>
        <div className='text-xs max-w-72'>
          <img className='max-sm:w-30 w-40' src={assets.logo} alt="" />
          <p className='pr-4 mt-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium vero earum culpa, in architecto. Aperiam, voluptatibus amet praesentium ullam omnis impedit reprehenderit dolorum magni laboriosam dolor, natus iste. Voluptas!</p>
        </div>
        <div className='flex max-[380px]:flex-col max-[380px]:gap-4 mt-4 w-full'>
          {
            footer_data.map((item)=> (
              <>
                <div className='flex justify-between flex-1 '>
                  {
                    <div className='grid grid-cols-1 [300px]:grid-cols-3 gap-2'>
                      <p className='text-sm font-semibold'>{item.title}</p>
                      {
                        item.links.map((link)=> (
                          <p className='text-xs text-gray-600'>{link}</p>
                        ))
                      }
                    </div>
                  
                  }
                </div>
              </>
            ))
          }

        </div>
      </div>
      <div className='text-center py-2'>
        <hr className='border-gray-300'/>
        <p className='text-xs mt-2'>Copyright 2025 © QuickBlog All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
