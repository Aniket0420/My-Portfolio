import React from 'react';

// import components
import Projects from './Projects';

const Project2 = () => {
  return (
    <section id='projects' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-0 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest Projects
          </h2>
          <p className='subtitle'>
          I feel like every project I work on is a dream project, so long as <br /> I am learning.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Project2;
