
import React from 'react';
import './AssemblyLine.css';

const AutomobilePartsBanner = () => {
  const parts = [
    // Gear
    <svg key="1" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>,
    // Piston
    <svg key="2" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h-2a4 4 0 00-4-4H8a4 4 0 00-4 4H2" />
      <path d="M2 12h20" />
      <path d="M4 16h16" />
      <path d="M6 20h12" />
    </svg>,
    // Spark Plug
    <svg key="3" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16" />
      <path d="M8 8l8 8" />
      <path d="M8 16l8-8" />
    </svg>,
    // Tire
     <svg key="4" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>,
    // Car Battery
    <svg key="5" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
        <path d="M7 6V4h4v2"></path>
        <path d="M17 6V4h-4v2"></path>
        <line x1="12" y1="12" x2="12" y2="12"></line>
        <line x1="9" y1="12" x2="9" y2="12"></line>
        <line x1="15" y1="12" x2="15" y2="12"></line>
    </svg>,
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Meet our sponsors
      </h2>
      <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="inline-block animate-marquee">
          {[...parts, ...parts].map((part, index) => (
            <div key={index} className="inline-block mx-8">
              {part}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default AutomobilePartsBanner;
