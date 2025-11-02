import React from 'react';
import './AssemblyLine.css';

const AssemblyLine = () => {
  return (
    <div className="assembly-line-container">
      <div className="road animate-scroll"></div>
      <div className="car-wrapper">
        <img src="/car.png" alt="Car" className="car-body" />
        <div className="wheel wheel-rear"></div>
        <div className="wheel wheel-front"></div>
      </div>
    </div>
  );
};

export default AssemblyLine;
