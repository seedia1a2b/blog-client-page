import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../AppContent/AppContentProvider'

const Navbar = () => {

  const { navigate } = useAppContext()

  return (
    <div className='flex fixed top-0 right-0 left-0 z-10 justify-start items-center px-6 max-sm:py-2 sm:py-4 bg-white rounded-b-2xl'>
      <img onClick={()=> navigate('/')} className='cursor-pointer w-25 sm:w-30 md:w-40' src={assets.logo} alt="" />
    </div>
  )
}

export default Navbar
