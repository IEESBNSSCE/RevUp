import React from 'react';

// Sample data for team members
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Chapter Chair',
    imageUrl: 'https://placehold.co/400x400/1e293b/94a3b8?text=JD',
  },
  {
    name: 'John Smith',
    role: 'Event Lead',
    imageUrl: 'https://placehold.co/400x400/1e293b/94a3b8?text=JS',
  },
  {
    name: 'Alice Johnson',
    role: 'Sponsorship Head',
    imageUrl: 'https://placehold.co/400x400/1e293b/94a3b8?text=AJ',
  },
];

const About = () => {
  return (
    <div className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Section 1: About IEEE VTS SBC NSSCE */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl animate-card">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            About IEEE VTS SBC NSSCE
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The IEEE Vehicular Technology Society Student Branch Chapter (VTS SBC) of NSS College of Engineering, Palakkad, is a dynamic platform dedicated to fostering innovation, research, and knowledge-sharing in the fields of vehicular technology, electric mobility, wireless communication, and intelligent transportation systems.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Formed under the IEEE Student Branch NSSCE, the chapter aims to bridge the gap between academic learning and real-world applications by providing students with hands-on exposure to cutting-edge technologies. Our vision is "Engineering Smarter Mobility for a Connected Future."
          </p>
        </div>

        {/* Section 2: About IEEE SB NSSCE */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl animate-card">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            About IEEE SB NSSCE
          </h2>
          <p className="text-gray-300 leading-relaxed">
            IEEE is the world's largest professional organization of engineers. The IEEE SB NSSCE was formed in 1987 to advance technology for the benefit of humanity. Our family has members from all departments and consists of 10 societies, including the Computer Society (CS), Robotics Automation Society (RAS), and Vehicular Technology Society (VTS), as well as affinity groups like Women in Engineering (WiE).
          </p>
        </div>
      </div>

      {/* Section 3: Meet the Team */}
      <div className="mt-20 md:mt-28 text-center">
        <h2 className="text-4xl font-bold text-white mb-12 animate-card">
          Meet the Organizing Committee
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 animate-card"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/1e293b/94a3b8?text=Error'; }}
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
