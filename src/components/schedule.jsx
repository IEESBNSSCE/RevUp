import React, { useState, useMemo } from 'react';

// Data for the assembly line stations
const assemblyStations = {
  day1: [
    { time: "09:00 AM", title: "Registration", part: "Chassis", id: "chassis" },
    { time: "10:00 AM", title: "Inaugural Ceremony", part: "Engine", id: "engine" },
    { time: "11:30 AM", title: "Technical Workshop 1", part: "Wheels", id: "wheels" },
    { time: "01:00 PM", title: "Lunch Break", part: "Fuel", id: "fuel" },
    { time: "02:00 PM", title: "Industrial Visit", part: "Doors", id: "doors" },
    { time: "06:00 PM", title: "Cultural Night", part: "Paint Job", id: "paint" },
  ],
  day2: [
    { time: "10:00 AM", title: "Expert Talk Session", part: "EV Chassis", id: "chassis-ev" },
    { time: "11:30 AM", title: "Technical Workshop 2", part: "Battery Pack", id: "battery" },
    { time: "01:00 PM", title: "Lunch Break", part: "Charging Port", id: "charge-port" },
    { time: "02:30 PM", title: "Keynote: Future of EV", part: "AI Chip", id: "ai" },
    { time: "04:00 PM", title: "Auto-Pilot Sensors", part: "Sensors", id: "sensors" },
    { time: "05:00 PM", title: "Valedictory Ceremony", part: "Spoiler", id: "spoiler" },
  ],
};

// --- NEW SVG ICONS ---
// These components are designed to be stacked.
// They are based on the provided images.

// DAY 1 PARTS (Image 1)
const IconChassisDay1 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <path d="M 40 110 L 100 110 L 110 100 L 146 100 L 156 110 L 216 110" stroke="#00A9FF" strokeWidth="4" fill="none" />
  </svg>
);

const IconEngineDay1 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <rect x="100" y="80" width="56" height="20" fill="#32C850" opacity="0.7" />
    <rect x="110" y="70" width="36" height="10" fill="#32C850" opacity="0.7" />
  </svg>
);

const IconWheelsDay1 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <circle cx="70" cy="116" r="14" fill="#00E0E0" />
    <circle cx="186" cy="116" r="14" fill="#00E0E0" />
  </svg>
);

const IconDoorsDay1 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <path d="M 60 100 L 90 60 L 166 60 L 196 100 L 166 100 L 156 90 L 100 90 L 90 100 Z" fill="#FFD700" opacity="0.5" />
  </svg>
);

// DAY 2 PARTS (Image 2)
const IconChassisDay2 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <path d="M 40 120 C 60 100, 196 100, 216 120" stroke="#4A5568" strokeWidth="6" fill="none" />
    <path d="M 50 118 L 40 120 L 45 110 Z" fill="#00A9FF" />
    <path d="M 206 118 L 216 120 L 211 110 Z" fill="#FF4136" />
  </svg>
);

const IconBatteryDay2 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <rect x="70" y="105" width="116" height="18" fill="#007BFF" opacity="0.8" rx="4" />
  </svg>
);

const IconAiChipDay2 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <rect x="118" y="90" width="20" height="15" fill="#FFD700" opacity="0.9" />
    <path d="M 128 90 L 138 92 M 128 95 L 138 96 M 128 100 L 138 101" stroke="#FFD700" strokeWidth="2" />
  </svg>
);

const IconSensorsDay2 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    {/* Re-using the fins from ChassisDay2, but now as a separate "part" */}
    <path d="M 50 118 L 40 120 L 45 110 Z" fill="#00A9FF" />
    <path d="M 206 118 L 216 120 L 211 110 Z" fill="#FF4136" />
  </svg>
);

const IconSpoilerDay2 = () => (
  <svg viewBox="0 0 256 160" className="w-64 h-auto">
    <path d="M 180 90 L 200 80 L 205 90 Z" fill="#FFD700" opacity="0.9" />
  </svg>
);

// GENERIC PARTS
const IconFuel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-green-400">
    <path fillRule="evenodd" d="M8.25 3.75a.75.75 0 0 1 .75.75v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4.5a.75.75 0 0 1 .75-.75Zm7.5 0a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

const IconPaint = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-purple-400">
    <path d="M12 2.25a.75.75 0 0 1 .75.75v6.052a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75h7.5Z" />
    <path d="M12 12.75a.75.75 0 0 1 .75.75v6.052a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V13.5a.75.75 0 0 1 .75-.75h7.5Z" />
    <path d="M13.5 3a.75.75 0 0 0-.75-.75H12v7.5h1.5a.75.75 0 0 0 .75-.75V3Z" />
    <path d="M13.5 13.5a.75.75 0 0 0-.75-.75H12v7.5h1.5a.75.75 0 0 0 .75-.75V13.5Z" />
    <path d="M15 3.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v6.052a.75.75 0 0 1-.75.75H15.75a.75.75 0 0 1-.75-.75V3.75Z" />
    <path d="M15 14.25a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v6.052a.75.75 0 0 1-.75.75H15.75a.75.75 0 0 1-.75-.75V14.25Z" />
  </svg>
);

const IconChargePort = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-400">
    <path d="M12 2.25a.75.75 0 0 1 .75.75v10.94l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" />
    <path d="M3.75 12a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V12.75a.75.75 0 0 1 .75-.75Zm16.5 0a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V12.75a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

/**
 * Renders the correct icon based on the part.id
 * This is now a simple lookup.
 */
const RenderPartIcon = ({ partId }) => {
  switch (partId) {
    // Day 1
    case 'chassis': return <IconChassisDay1 />;
    case 'engine': return <IconEngineDay1 />;
    case 'wheels': return <IconWheelsDay1 />;
    case 'doors': return <IconDoorsDay1 />;
    case 'fuel': return <IconFuel />;
    case 'paint': return <IconPaint />;
    // Day 2
    case 'chassis-ev': return <IconChassisDay2 />;
    case 'battery': return <IconBatteryDay2 />;
    case 'ai': return <IconAiChipDay2 />;
    case 'sensors': return <IconSensorsDay2 />;
    case 'spoiler': return <IconSpoilerDay2 />;
    case 'charge-port': return <IconChargePort />;
    default:
      return null;
  }
};


// Represents a single part in the bin or on the car
const CarPart = ({ part, isInstalled, currentStationIndex }) => {
  const { id, part: partName, index } = part;

  // Base styles for all parts
  const baseStyle = "absolute transition-all duration-700 ease-in-out transform flex flex-col items-center text-center";

  let partStateStyle = "";
  const isGenericPart = ['fuel', 'paint', 'charge-port'].includes(id);

  if (isInstalled) {
    if (isGenericPart) {
      if (index === currentStationIndex) {
        // Just installed: flash in the middle
        partStateStyle = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-125 z-20";
      } else {
        // Installed on a previous step: fade out
        partStateStyle = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-125 z-20";
      }
    } else {
      // Stackable part, installed
      partStateStyle = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100 z-10";
    }
  } else { // Not installed
    // This is the fix: All non-installed parts are sent to the bin.
    // They will stack on top of each other, but this fulfills "several grayed-out parts".
    partStateStyle = "right-0 top-1/2 -translate-y-1/2 opacity-20 scale-50 translate-x-10";
  }


  return (
    <div className={`${baseStyle} ${partStateStyle}`}>
      {/* The container for the SVG part itself */}
      <div className={`w-64 h-40 flex items-center justify-center ${!isInstalled ? 'p-4 bg-gray-700 rounded-lg shadow-lg' : ''}`}>
        <RenderPartIcon partId={id} />
      </div>
      <span className={`mt-2 text-xs font-medium text-white ${isInstalled ? 'opacity-0' : 'opacity-100'}`}>{partName}</span>
    </div>
  );
};

// The main assembly line component
function RevUpAssemblyLine() {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const currentDayEvents = useMemo(
    () => assemblyStations[`day${currentDay}`],
    [currentDay]
  );
  const currentEvent = currentDayEvents[currentStationIndex];

  const handleNext = () => {
    setCurrentStationIndex((prev) => Math.min(prev + 1, currentDayEvents.length - 1));
  };

  const handlePrev = () => {
    setCurrentStationIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDayToggle = () => {
    setCurrentDay((prev) => (prev === 1 ? 2 : 1));
    setCurrentStationIndex(0);
  };
  
  // A simple representation of the car's base
  // REMOVED - This is now handled by the 'chassis' CarPart

  return (
    <section className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        The RevUp Assembly Line
      </h2>

      {/* Main Visual Area */}
      <div className="relative w-full h-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-inner mb-6 border border-gray-700">
        {/* Assembly line background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute bottom-1/4 w-full h-1/2 bg-black bg-opacity-20 blur-xl"></div>
        
        {/* Render the Chassis - REMOVED */}

        {/* Render all parts for the current day */}
        <div className="absolute inset-0">
          {currentDayEvents.map((part, index) => (
            <CarPart
              key={part.id}
              part={{...part, index}} // Pass index
              isInstalled={index <= currentStationIndex}
              currentStationIndex={currentStationIndex} // Pass current index
            />
          ))}
        </div>
      </div>

      {/* Control Area */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        {/* Day Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={handleDayToggle}
            className="relative w-40 h-10 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer"
          >
            <span className={`absolute left-1 w-1/2 h-8 rounded-full bg-blue-500 transition-transform duration-300 ${currentDay === 2 ? 'translate-x-full' : 'translate-x-0'}`}></span>
            <span className="relative z-10 w-1/2 text-center text-sm font-semibold">Day 1</span>
            <span className="relative z-10 w-1/2 text-center text-sm font-semibold">Day 2</span>
          </button>
        </div>

        {/* Event Display */}
        <div className="text-center mb-4 p-4 bg-gray-700 rounded-lg min-h-[6.5rem]">
          <span className="block text-sm font-semibold text-gray-400">
            Station {currentStationIndex + 1} / {currentDayEvents.length}
          </span>
          <span className="block text-2xl font-bold text-blue-300">{currentEvent.time}</span>
          <span className="block text-lg text-white">{currentEvent.title}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStationIndex === 0}
            className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-600 transition-all"
            aria-label="Previous Station"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-sm font-medium text-gray-300">
            Next Part: {currentDayEvents[currentStationIndex + 1]?.part || 'Finished!'}
          </span>

          <button
            onClick={handleNext}
            disabled={currentStationIndex === currentDayEvents.length - 1}
            className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 transition-all"
            aria-label="Next Station"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// Main App component to render the assembly line
export default function App() {
  return (
    <div className="font-inter bg-gray-950 flex items-center justify-center min-h-screen p-4">
      <RevUpAssemblyLine />
    </div>
  );
}

