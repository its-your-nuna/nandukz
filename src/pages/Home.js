import React from 'react';
import LeaderBoard from '../components/home/LeaderBoard';
import AboutSection from '../components/home/AboutSection';
import Newsmenu from '../components/home/Newsmenu';
import Testimonialsection from '../components/home/Testimonialsection';

export default function Home() {
  return (
    <div>
      <LeaderBoard />
     
      <Newsmenu/>
     
      <Testimonialsection />
      <AboutSection />
    </div>
  );
}
