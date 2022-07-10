import React from 'react';

// import img
import Image from '../assets/img/about.jpeg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-0 before:-top-[2rem] before:hidden before:lg:block'>
                Aniket Singh Rathore
              </h2>
              <p className='mb-4 text-accent'>
                Computer Science Engineer.
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Hey there, I am Aniket Singh Rathore, Computer Science engineer student. When I'm free, I usually build new projects and learn new technologies. The one thing I can’t leave home without is my laptop. Because I like to learn new technology whenever I get time. <br />
                <br />
                I believe my strength is my attitude, and I like to take up challenges and think to accept both success and failure in a balanced way to move forward. I want to say that I don't leave any questions altogether as I believe in myself and my work.<br />
                <br />
                My short-term goal is to achieve excellence in the skills I'm mastering, take up a challenge in some good organizations, and climb the ladder of success. However, my long-term goal is to be a renowned Software Development engineer in an organization and reach the highest level of success. My moral is never to intend to harm anyone on purpose.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
