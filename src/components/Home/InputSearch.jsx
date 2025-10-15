import React from 'react'

const InputSearch = () => {
  return (
    <div className='flex justify-start mx-auto bg-white px-2 rounded-sm py-1.5 border border-gray-300'>
      <input className='text-sm outline-0 lg:min-w-sm'  type="text" placeholder='Search blogs' />
      <button className='bg-primary cursor-pointer rounded-sm text-white px-4 sm:px-6 text-sm py-1.5'>Search</button>
    </div>
  )
}

export default InputSearch
