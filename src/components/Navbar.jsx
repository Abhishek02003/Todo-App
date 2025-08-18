import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-2xl mx-8 my-15'>TaskNest</span>
        </div>
        <ul className="flex gap-8 mx-9 items-center ">
            <li>Home</li>
            <li>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
