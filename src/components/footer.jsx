import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

// Use the RevUp logo (as text for now)
const Logo = () => (
  <Link to="/" className="text-2xl font-bold">
    <span className="text-white">Rev</span>
    <span className="text-cyan-400">Up</span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Logo and About */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="text-gray-400 text-sm max-w-xs">
              A flagship initiative by the IEEE Vehicular Technology Society
              Student Branch Chapter of NSS College of Engineering, Palakkad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              {/* <li><FooterLink to="/schedule">Schedule</FooterLink></li> */}
              <li><FooterLink to="/sponsors">Sponsors</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>NSS College of Engineering, Palakkad, Kerala</li>
              <li>
                <a href="mailto:contact@ieee-revup.com" className="hover:text-cyan-400 transition-colors">
                  ieeesbnssce@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-cyan-400 transition-colors">
                  +918281114492
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* <SocialIcon href="#" icon={<Twitter size={20} />} /> */}
              <SocialIcon href="https://www.linkedin.com/company/ieeesbnssce/" icon={<Linkedin size={20} />} />
              <SocialIcon href="https://www.instagram.com/ieeesbnssce?igsh=MWIxdzY1aXIxeHo0dA==" icon={<Instagram size={20} />} />
              <SocialIcon href="https://www.facebook.com/ieeenssce?mibextid=rS40aB7S9Ucbxw6v" icon={<Facebook size={20} />} />
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} IEEE SB NSSCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components ---

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
      <span className="sr-only">Social Media</span>
      {icon}
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
      {children}
    </Link>
  );
}
