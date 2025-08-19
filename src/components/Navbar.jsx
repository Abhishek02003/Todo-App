import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2 w-[100vw]'>
        <div className="logo">
            <span className='font-bold text-2xl mx-8 my-15'>TaskNest</span>
        </div>
        <ul className="flex gap-8 mx-9 items-center ">
           <a href="#"><li>Home</li></a> 
            <a href="#"><li className='text-nowrap'>Your Tasks</li></a>
        </ul>
    </nav>
  )
}

export default Navbar
