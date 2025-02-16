import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <>
    <div>
        <div className='' >
          <nav className='h-26 border-1 border-gray-700 flex justify-between items-center bg-#01132e text-white pl-8 pr-8'>
            <div>
              <img src="asset 71.svg" alt="react" />
            </div>
            <div className='flex justify-between items-center'>
              <ul className='flex gap-20 font-sans mr-8 font-semibold'>
                <li>Services</li>
                <li>About Us</li>
                <li>Career</li>
                <li>Portfolio</li>
                <li>Blog</li>
              </ul>
              <div className='flex gap-4.5'>
              <button className='border-1 py-2.5 px-6 rounded-3xl hover:bg-orange-500 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600'>Hire Developers</button>
              <button className='py-2.5 px-6 rounded-3xl bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 hover:bg-gradient-to-l'>Get a quote</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar