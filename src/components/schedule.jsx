import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, ArrowLeftCircle, ArrowRightCircle, CheckCircle } from 'lucide-react';

// --- Event Data ---
// We define the "parts" and "stations" for each day's assembly line
const day1Events = [
  { time: "09:00 AM", title: "Registration", part: "Chassis" },
  { time: "10:00 AM", title: "Inaugural Ceremony & Keynote", part: "Engine" },
  { time: "11:30 AM", title: "Technical Workshop 1", part: "Wheels" },
  { time: "01:00 PM", title: "Lunch Break", part: "Fuel" },
  { time: "02:00 PM", title: "Industrial Visit", part: "Doors" },
  { time: "06:00 PM", title: "Cultural Night & Networking", part: "Paint Job" }
];
const day1Parts = ["Chassis", "Engine", "Wheels", "Fuel", "Doors", "Paint Job"];

const day2Events = [
  { time: "10:00 AM", title: "Expert Talk Session", part: "EV Chassis" },
  { time: "11:30 AM", title: "Technical Workshop 2", part: "Battery Pack" },
  { time: "01:00 PM", title: "Lunch Break", part: "Charge" },
  { time: "03:00 PM", title: "Project Competition", part: "Sensors" },
  { time: "04:00 PM", title: "Valedictory Ceremony", part: "Final Polish" }
];
const day2Parts = ["EV Chassis", "Battery Pack", "Charge", "Sensors", "Final Polish"];
// --- End Event Data ---


// --- Main Schedule Component ---
export default function Schedule() {
  const [day, setDay] = useState(1);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const events = day === 1 ? day1Events : day2Events;
  const parts = day === 1 ? day1Parts : day2Parts;
  const currentEvent = events[currentStationIndex];

  const handleNext = () => {
    setCurrentStationIndex((prevIndex) => 
      Math.min(prevIndex + 1, events.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentStationIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const setDayAndReset = (dayNum) => {
    setDay(dayNum);
    setCurrentStationIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Section Headline */}
        <div className="animate-card">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            The RevUp <span className="text-cyan-400">Assembly Line</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Click through the event schedule to assemble this year's vehicle.
          </p>
        </div>

        {/* 2. Day Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12 animate-card">
          <button
            onClick={() => setDayAndReset(1)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              day === 1 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {day === 1 ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
            <span>Day 1: Classic Build</span>
          </button>
          <button
            onClick={() => setDayAndReset(2)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              day === 2 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {day === 2 ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
            <span>Day 2: Future EV</span>
          </button>
        </div>

        {/* 3. The Assembly Line Visual */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 mb-12 animate-card">
          {/* Car Visual Area */}
          <div className="h-64 flex items-center justify-center text-gray-500 text-2xl font-bold relative overflow-hidden">
            {/* We will use simple text to represent the car parts for now */}
            {/* This can be replaced with SVGs or images */}
            <div className="relative w-full h-full flex items-center justify-center">
              <CarVisual currentDay={day} partsCompleted={currentStationIndex + 1} />
            </div>
          </div>
          
          {/* Parts List / Progress Bar */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-8">
            {parts.map((part, index) => (
              <div 
                key={part}
                className={`text-center p-3 rounded-lg border-2 ${
                  index <= currentStationIndex
                    ? 'bg-cyan-600 border-cyan-400 text-white'
                    : 'bg-gray-700 border-gray-600 text-gray-400'
                } transition-all duration-500`}
              >
                <span className="text-xs font-semibold">{part}</span>
                {index <= currentStationIndex && (
                  <CheckCircle className="w-4 h-4 inline-block ml-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Controls and Display Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-card">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentStationIndex === 0}
            className="p-4 bg-gray-700 rounded-full text-white hover:bg-cyan-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed order-2 md:order-1"
          >
            <ArrowLeftCircle size={32} />
          </button>
          
          {/* Event Display */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-inner border border-gray-700 w-full max-w-md order-1 md:order-2">
            <div className="text-cyan-400 font-bold text-lg mb-1">{currentEvent.time}</div>
            <div className="text-white font-bold text-2xl">{currentEvent.title}</div>
            <div className="text-gray-400 text-sm mt-2">
              Part Unlocked: <span className="font-semibold text-white">{currentEvent.part}</span>
            </div>
          </div>
          
          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentStationIndex === events.length - 1}
            className="p-4 bg-gray-700 rounded-full text-white hover:bg-cyan-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed order-3 md:order-3"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
        
      </div>
    </div>
  );
}


// --- CarVisual Component ---
// This is a helper component to show the car being built.
// We are keeping it in the same file for simplicity.
function CarVisual({ currentDay, partsCompleted }) {
  // Simple emoji/text representation for now
  // This can be swapped for complex SVGs later

  if (currentDay === 1) { // Day 1: Classic Car
    return (
      <div className="text-6xl md:text-8xl" style={{ transform: `translateX(-${100 - (partsCompleted * 15)}%)` }}>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 2 ? 1 : 0.2 }}>🔥</span>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 1 ? 1 : 0.2 }}>🏎️</span>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 6 ? 1 : 0.2 }}>✨</span>
      </div>
    );
  } else { // Day 2: Future EV
    return (
      <div className="text-6xl md:text-8xl" style={{ transform: `translateX(-${100 - (partsCompleted * 18)}%)` }}>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 3 ? 1 : 0.2 }}>⚡</span>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 1 ? 1 : 0.2 }}>🚙</span>
        <span className="transition-all duration-500" style={{ opacity: partsCompleted >= 5 ? 1 : 0.2 }}>🛰️</span>
      </div>
    );
  }
}
