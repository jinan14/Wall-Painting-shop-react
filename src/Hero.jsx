import React from 'react';

function Hero() {
  return (
    <div className='hero-container flex flex-col md:flex-row h-[750px]'>
        <div className='flex flex-col w-full md:w-[40%] h-full gap-5 justify-center items-center p-7 bg-orange-100'>
            <p className='font-semibold text-center md:text-left'>Brushes, Colors, and a Touch of Magic!</p>
            <h1 className='font-bold text-4xl md:text-6xl text-center md:text-left'>Strokes of Style</h1>
        </div>
        <div className='w-full md:w-[60%] h-full'>
            <img className='w-full h-full object-cover' src="hero.jpeg" alt="Hero Image" />
        </div>
    </div>
  );
}

export default Hero;
