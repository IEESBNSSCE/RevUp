import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Building2, 
  Star, 
  Wrench, 
  Building, 
  UsersRound, 
  Crown, 
  HelpCircle,
  ChevronDown 
} from 'lucide-react';
import AssemblyLine from '../components/AssemblyLine';
import RevUpLogo from '../assets/RevUp_White_Logo.png';

// --- Reusable Animated Number Component ---
const AnimatedNumber = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (inView) {
      let start = null;
      const duration = 2000; // Animation duration in ms

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const nextValue = Math.floor(progress * value);
        setCurrentValue(nextValue);

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(step);
        } else {
          setCurrentValue(value); // Ensure it ends on the exact value
        }
      };

      animationFrameId.current = requestAnimationFrame(step);
    } 

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [inView, value]);

  return <span ref={ref} className="text-5xl font-bold text-white">{currentValue}+</span>;
};


// --- Reusable Animated Component for Highlights ---
const AnimatedHighlightCard = ({ children, delay }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


// --- FAQ Item Component ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-100">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-5 pr-10 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

// --- Data Definitions ---
const faqData = [
  {
    question: 'Who is eligible to participate in RevUp?',
    answer: 'RevUp is open to all university students, young professionals, and tech enthusiasts interested in vehicular technology, regardless of their branch or field of study.'
  },
  {
    question: 'What is the registration fee for the event?',
    answer: 'Please refer to the registration section for detailed information on fees for IEEE members and non-members.'
  },
  {
    question: 'Will accommodation be provided for out-station participants?',
    answer: 'Yes, accommodation options will be available for participants from outside Palakkad. More details will be provided upon registration.'
  },
  {
    question: 'Will food be provided during the event?',
    answer: 'Yes, registration includes access to all sessions, event kits, and food (lunch and refreshments) for both days of the event.'
  }
];

const highlights = [
    {
        icon: <Wrench className="h-8 w-8 text-cyan-400 mb-3" />,
        title: "Technical Workshops",
        description: "A blend of technical workshops to provide hands-on exposure to cutting-edge technologies shaping the future of mobility."
    },
    {
        icon: <UsersRound className="h-8 w-8 text-cyan-400 mb-3" />,
        title: "Expert Talk Sessions",
        description: "Engage directly with industry experts and explore advancements in electric vehicles and intelligent transport systems."
    },
    {
        icon: <Building className="h-8 w-8 text-cyan-400 mb-3" />,
        title: "Industrial Visits",
        description: "Gain practical exposure through field visits to leading organizations in the vehicular domain."
    },
    {
        icon: <Users className="h-8 w-8 text-cyan-400 mb-3" />,
        title: "Cultural Evenings & Networking",
        description: "Connect, share ideas, and build lasting relationships in an evening of creativity and collaboration."
    }
];

const registrationTiers = [
  {
    title: 'IEEE VTS Member',
    price: '₹299',
    type: 'Early Bird',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSflVyXrjJZWd6d6CToGcEkXA2vNvyZ9APyzuPN0EgF64wSygA/viewform?usp=dialog'
  },
  {
    title: 'IEEE Member',
    price: '₹399',
    type: 'Early Bird',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeeUAczLHcWFl9a8jK4KjebA7v5mcUEBCGzTLo39UJULZiyIw/viewform?usp=dialog'
  },
  {
    title: 'NoN-IEEE Member',
    price: '₹499',
    type: 'All Participants',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSflVyXrjJZWd6d6CToGcEkXA2vNvyZ9APyzuPN0EgF64wSygA/viewform?usp=dialog'
  }
];

// --- Main RevUp Page Component ---
const RevUpPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* --- Hero Section --- */}
      <div className="text-center py-20">
        <img src={RevUpLogo} alt="RevUp Logo" className="mx-auto mb-6 h-40" />
        <h1 className="text-5xl font-bold mb-4">Accelerating the Future of Mobility</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join us for a two-day technical symposium on vehicular technology.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-20 px-4 pb-20">
        
        {/* --- About RevUp Section --- */}
        <div className="bg-gray-800 rounded-lg p-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            About RevUp
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
            RevUp is a flagship initiative of the IEEE Vehicular Technology Society Student Branch Chapter (VTS SBC) of NSS College of Engineering, Palakkad... an investment in empowering young engineers to drive technological progress.
          </p>
        </div>

        {/* --- Our Audience Section --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Audience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-yellow-400 mb-4" />
              <AnimatedNumber value={70} />
              <span className="text-lg uppercase text-gray-400 mt-2">Students</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-yellow-400 mb-4" />
              <AnimatedNumber value={25} />
              <span className="text-lg uppercase text-gray-400 mt-2">Colleges</span>
            </div>
          </div>
        </div>

        {/* --- RevUp Event Highlights --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            RevUp Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <AnimatedHighlightCard key={highlight.title} delay={index * 150}>
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  {highlight.icon}
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </div>
              </AnimatedHighlightCard>
            ))}
          </div>
        </div>

        {/* --- The RevUp Assembly Line --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Crown className="h-8 w-8 text-yellow-400 mr-3" />
            The RevUp Assembly Line
          </h2>
          <AssemblyLine />
        </div>

        {/* --- Registration Section --- */}
        <div id="register">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Register for RevUp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {registrationTiers.map((tier) => (
              <div key={tier.title} className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{tier.title}</h3>
                <p className="text-gray-400 mb-4">{tier.type}</p>
                <p className="text-5xl font-bold text-white mb-6">{tier.price}</p>
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* --- Frequently Asked Questions --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-yellow-400 mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RevUpPage;
