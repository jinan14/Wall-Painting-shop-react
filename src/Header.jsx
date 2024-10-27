

import React from 'react'

function Header() {
  return (
    <div className='flex w-full h-20 p-6 bg-gray-800 items-center justify-center'>
        <nav >
            <ul className='flex gap-8 items-center justify-between'>
                <a className='font-bold text-lg text-yellow-100' href="/">Home</a>
                <a className='font-bold text-lg text-yellow-100' href="/about">About</a>
                <a className='font-bold text-lg text-yellow-100' href="/contact">Contact</a>
            </ul>
        </nav>
    </div>
  )
}

export default Header