import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../AppContent/AppContentProvider'

const Navbar = () => {

  const { navigate } = useAppContext()

  return (
    <div className='flex fixed top-0 right-0 left-0 z-10 justify-between items-center px-6 max-sm:py-2 sm:py-4 bg-white rounded-b-2xl'>
      <img onClick={()=> navigate('/')} className='cursor-pointer w-25 sm:w-30 md:w-40' src={assets.logo} alt="" />
      <button className='bg-primary text-white px-8 max-sm:py-1 max-sm:px-6 py-2 rounded-full border border-primary/10 cursor-pointer hover:scale-x-105 duration-75 ease-in-out'>Login</button>
    </div>
  )
}

export default Navbar
