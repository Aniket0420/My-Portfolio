import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='academics' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-0 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            Academics
          </h2>
          <p className='subtitle'>
          Education is the most powerful weapon which you can use to change the world.
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
