import React from 'react';

// import services data
import { services } from '../data';

const Skills = () => {
  return (
    <section id='skills' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h3 className='section-title before:content-services before:opacity-0 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My Technical Skills
          </h3>
          <p className='subtitle'>
          Specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real world.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((Skills, index) => {
            const { icon, name, description } = Skills;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
