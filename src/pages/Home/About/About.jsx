import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className='w-3/4 rounded-lg shadow-2xl' />
    <img src={parts} className='w-1/2 absolute right-14 top-1/2 border-8 border-white rounded-lg shadow-2xl' />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
      <h3 className="text-xl text-orange-600 font-bold">About Us</h3>
      <h1 className="text-5xl text-indigo-600 font-bold">We are qualified & of experience in this filed</h1>
      <p className="py-6">There Are Many Variations Of Passages Of Lorem ipsum Available,But The Majority Have Suffered Alteration In Some Form,By Injected Humour,Or Randomised Words Which Don't Look Even Slightly Believable.</p>
      <p className="py-6">There Are Many Variations Of Passages Of Lorem ipsum Available,But The Majority Have Suffered Alteration </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;