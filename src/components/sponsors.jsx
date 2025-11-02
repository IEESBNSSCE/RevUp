import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users, Zap, ShieldCheck, Star, Check } from 'lucide-react';
import AutomobilePartsBanner from './AutomobilePartsBanner';

// --- Reusable Animated Component ---
const AnimatedCard = ({ children, delay }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the item is visible
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Data for Partnership Table ---
const partnershipData = [
  { deliverable: 'Logo on posters', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on Banners', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on Event Merchandise', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on event emails', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Survey from participants', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Special mention in inaugural and closing ceremonies', platinum: true, gold: true, silver: true, bronze: false },
  { deliverable: 'Logo on Delegate Certificates', platinum: true, gold: true, silver: true, bronze: false },
  { deliverable: 'Exclusive talk/Interaction with participants', platinum: true, gold: true, silver: false, bronze: false },
  { deliverable: 'Exclusive stall space for brand promotion', platinum: true, gold: false, silver: false, bronze: false },
];

// --- Data for Benefits Section ---
const benefits = [
  {
    icon: <Zap className="h-10 w-10 text-cyan-400 mb-4" />,
    title: "Enhance Brand Visibility",
    description: "Gain wide exposure among hundreds of students, faculty, professionals, and industry leaders through event branding, digital promotions, and media coverage."
  },
  {
    icon: <Users className="h-10 w-10 text-cyan-400 mb-4" />,
    title: "Engage Future Talent",
    description: "Interact directly with aspiring engineers and innovators who represent the next generation of technical leaders."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-cyan-400 mb-4" />,
    title: "Strengthen Industry-Academia Collaboration",
    description: "Support initiatives that encourage practical learning, research, and innovation in emerging technologies like electric vehicles, automation, and sustainable transport."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-cyan-400 mb-4" />,
    title: "Showcase Corporate Social Responsibility",
    description: "Align your brand with a student-led initiative that promotes education, technology, and sustainability - values that shape the future of mobility."
  },
];


// --- Main Sponsors Page Component ---
const SponsorsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* --- Why Partner with RevUp? Section --- */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Why Partner with RevUp?
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Partnering with RevUp, the flagship event of IEEE VTS SBC NSSCE, offers your
            organization a unique opportunity to connect with some of the brightest young minds in
            engineering and innovation. Your partnership with RevUp is not just a sponsorship—it's an
            investment in empowering innovation, nurturing talent, and driving a smarter, sustainable
            tomorrow.
          </p>
        </div>

        {/* --- Benefits Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedCard key={benefit.title} delay={index * 150}> {/* Staggered delay */}
              <div className="bg-gray-800 rounded-lg p-8 h-full"> {/* Added h-full for consistent height */}
                {benefit.icon}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* --- Partnership Tiers Table --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            Our Partnership Tiers
          </h2>
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
            <table className="w-full min-w-max text-left">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="p-4 py-5 text-lg font-semibold">Deliverables</th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Platinum</span>
                    <span className="text-sm text-gray-400">₹20,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Gold</span>
                    <span className="text-sm text-gray-400">₹15,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Silver</span>
                    <span className="text-sm text-gray-400">₹10,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Bronze</span>
                    <span className="text-sm text-gray-400">₹5,000</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {partnershipData.map((item) => (
                  <tr key={item.deliverable} className="hover:bg-gray-700/50">
                    <td className="p-4 font-medium">{item.deliverable}</td>
                    <td className="p-4 text-center">
                      {item.platinum && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.gold && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.silver && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.bronze && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Scrolling Automobile Parts Banner --- */}
        <AutomobilePartsBanner />

        {/* --- Final CTA --- */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join us in driving the future of vehicular technology. Contact us today to
            discuss sponsorship opportunities.
          </p>
          <Link
            to="/contact" // Or your contact/sponsorship page
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Become a Sponsor
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SponsorsPage;
