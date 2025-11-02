import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Calendar, Zap } from 'lucide-react'; // Make sure to install lucide-react
import AutomobilePartsBanner from './AutomobilePartsBanner.jsx'; // Import the new component
import RevUpLogo from '../assets/RevUp_Clean.png';

// --- Countdown Timer Component ---
// This component calculates the time left and renders the boxes
const CountdownTimer = () => {
  // Set the target date: December 6, 2025
  const targetDate = new Date('2025-12-06T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update the timer every second
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  });

  // Helper component for each timer box
  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg w-20 h-20">
      <span className="text-4xl font-bold text-cyan-400">{String(value).padStart(2, '0')}</span>
      <span className="text-xs uppercase text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-center mb-6">Event Starts In</h3>
      <div className="flex justify-center gap-4">
        <TimerBox value={timeLeft.days} label="Days" />
        <TimerBox value={timeLeft.hours} label="Hours" />
        <TimerBox value={timeLeft.minutes} label="Minutes" />
        <TimerBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

// --- Hero Component ---
// This is the main component for your homepage
const Hero = () => {
  return (
    <div id="home" className="bg-gray-900 text-white py-20 px-4">
      
      {/* --- Top Hero Section --- */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* RevUp Logo */}
        <img src={RevUpLogo} alt="RevUp Logo" className="h-40 mb-4" />

        {/* Event Title */}
        <h1 className="text-6xl font-bold text-white mb-2">RevUp</h1>
        
        {/* Event Dates */}
        <div className="flex items-center justify-center space-x-2 text-lg text-gray-400 mb-6">
          <Calendar size={20} />
          <span>06 & 07 December 2025</span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Discover, learn, and connect at the flagship event of IEEE VTS SBC NSSCE. 
          Dive into the world of technology, innovation, and professional growth.
        </p>

        {/* Register Button */}
        <HashLink
          to="/revupp#register" smooth// Or whatever your registration path is
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          Register for RevUp
        </HashLink>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>

      {/* --- Main Content Sections --- */}
      <div className="max-w-5xl mx-auto mt-20 space-y-12">
        
        {/* Why Join? Section */}
        <div className="bg-gray-800 rounded-lg p-10 animate-card">
          <div className="flex items-center justify-center mb-4">
            <Zap className="text-yellow-400 h-6 w-6 mr-2" />
            <h2 className="text-2xl font-semibold">Why Join?</h2>
          </div>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Our events are designed to foster learning and networking among tech enthusiasts. Gain
            insights from industry leaders, participate in hands-on workshops, and expand your
            professional network.
          </p>
        </div>
        {/* About IEEE SB NSSCE Section */}
        <div className="bg-gray-800 rounded-lg p-10 animate-card">
          <h2 className="text-2xl font-semibold text-center mb-4">
            About IEEE SB NSSCE
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            IEEE is the world's largest professional organization of engineers, formed in 1963. The
            IEEE SB NSSCE was formed in 1987 with an aim of dedicating to advancing technology for
            the benefit of humanity. Since its establishment, IEEE SB NSSCE has been actively
            organizing events at regional, national and international levels. Our family has members
            from all departments and consists of 10 societies, including the Computer Society (CS),
            Robotics Automation Society (RAS), and Vehicular Technology Society (VTS), as well as
            affinity groups like Women in Engineering (WIE). Our student branch has hosted various
            technical events, hands-on workshops, and talk sessions, and has been recognized with
            many awards at regional, national, and global levels.
          </p>
        </div>
        {/* About VTS Section */}
        <div id="about" className="bg-gray-800 rounded-lg p-10 animate-card">
          <h2 className="text-2xl font-semibold text-center mb-4">
            About IEEE VTS SBC NSSCE
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            The IEEE Vehicular Technology Society Student Branch Chapter (VTS SBC) of NSS
            College of Engineering, Palakkad, is a dynamic platform dedicated to fostering innovation,
            research, and knowledge-sharing in the fields of vehicular technology, electric mobility,
            wireless communication, and intelligent transportation systems. Formed under the IEEE
            Student Branch NSSCE, the chapter aims to bridge the gap between academic learning
            and real-world applications by providing students with hands-on exposure to cutting-
            edge technologies. Through workshops, expert talks, and collaborative projects, we
            empower students to explore autonomous vehicles, electric and hybrid systems, and
            sustainable transport solutions. Our vision is "Engineering Smarter Mobility for a
            Connected Future," aligning with IEEE's global mission of advancing technology for
            humanity.
          </p>
        </div>

        {/* Organizing Committee Section */}
        {/* <div>
          <h2 className="text-3xl font-semibold text-center">
            Meet the Organizing Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"> */}
            
            {/* Member 1 */}
            {/* <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center animate-card"> */}
              {/* Replace this div with an <img /> tag when ready */}
              {/* <div className="bg-gray-700 h-24 w-24 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">Jane Doe</h3>
              <p className="text-gray-400">Chapter Chair</p>
            </div> */}
            
            {/* Member 2 */}
            {/* <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center animate-card"> */}
              {/* Replace this div with an <img /> tag when ready */}
              {/* <div className="bg-gray-700 h-24 w-24 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">John Smith</h3>
              <p className="text-gray-400">Event Lead</p>
            </div> */}
            
            {/* Member 3 */}
            {/* <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center animate-card"> */}
              {/* Replace this div with an <img /> tag when ready */}
              {/* <div className="bg-gray-700 h-24 w-24 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">Priya Patel</h3>
              <p className="text-gray-400">Sponsorship Head</p>
            </div> */}
            
          {/* </div> */}
        {/* </div> */}

        {/* --- Scrolling Automobile Parts Banner --- */}
        <AutomobilePartsBanner />

      </div>
    </div>
  );
};

export default Hero;
