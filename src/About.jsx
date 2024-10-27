import React from 'react';

function About() {
  return (
    <div className='about-container flex flex-col md:flex-row bg-orange-100'>
        <div className='w-full md:w-1/2'>
            <img className='w-full h-full object-cover' src="about.jpeg" alt="About Us" />
        </div>
        <div className='w-full md:w-1/2 flex flex-col p-5 gap-11 justify-center items-center'>
            <h1 className='font-bold text-3xl md:text-4xl'>What Makes Us Special</h1>
            <p className='font-semibold text-lg md:text-xl text-center md:text-left'>
                At Strokes of Style, we believe your walls should reflect your unique personality. What makes us special? Our customizable color palettes! You can design your own colors, and our skilled artisans will bring your vision to life with precision and artistry.
                <br /><br />
                From calming pastels to bold statements, we work closely with you to ensure every stroke resonates with your style. Transform your space into a true work of art—where every wall tells your story. Your imagination is our canvas!
            </p>
        </div>
    </div>
  );
}

export default About;
