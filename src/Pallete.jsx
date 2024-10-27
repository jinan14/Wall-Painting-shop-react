

import React from 'react'
import { ImArrowRight } from "react-icons/im";


function Pallete() {
    return (
        <div className='flex flex-col items-center justify-center gap-5 p-7 bg-orange-100'>
            <h1 className='m-12 text-4xl font-bold'>Customize Your Color </h1>
            <div className='flex h-[70%] w-full gap-9 items-center justify-center'>
                <div>
                    <img className='w-full h-full object-cover' src="public/png.png" alt="" />
                </div>
                <p className='text-3xl'><ImArrowRight /></p>
                <div>
                    <img className='w-full h-full object-cover' src="/product.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Pallete