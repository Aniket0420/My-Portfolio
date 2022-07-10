import React from 'react';
import pic from '../assets/img/pic.jpeg';

const Home = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hello, I'm Aniket! 👋
            </p>
            <h1 className='text-4xl leading-[24px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Computer Science Engineer <br /> 
            </h1>
            <p className='pt-8 pb-16 md:pt-10 md:pb-20 max-w-[480px] text-lg text-center lg:text-left'>
              <h4>Lovely Professional University.</h4>
            </p>
            
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={pic} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
