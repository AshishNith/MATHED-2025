import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        {
          name: "Sh. Shashikant Thakur, Branch Head, Branch -B SBI Life Hamirpur (HP) Mob.98050-35500",
          logo: (
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/064230224725583.6810766ed08f6.png"
              alt="SBI Life Logo"
              className="max-h-32 max-w-full object-contain"
            />
          )
        },
        // { name: "Sponsor Name 1", logo: "Logo 1" },
        // { name: "Sponsor Name 2", logo: "Logo 2" }
      ]
    },
    // {
    //   tier: "Gold Sponsors",
    //   sponsors: [
    //     { name: "Sponsor Name 3", logo: "Logo 3" }
    //   ]
    // },
    // {
    //   tier: "Silver Sponsors",
    //   sponsors: [
    //     { name: "Sponsor Name 4", logo: "Logo 4" }
    //   ]
    // }
  ];

  return (
    <div className="relative min-h-screen py-16 bg-gray-50">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-600 mb-6">Our Sponsors</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIndex * 0.2 }}
              className="space-y-8"
            >
              {/* <h2 className="text-2xl font-semibold text-amber-600 text-center">{tier.tier}</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
                  >
                    <div className="h-48 bg-white rounded-lg mb-4 flex items-center justify-center text-gray-400">
                      {sponsor.logo}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{sponsor.name}</h3>
                    {/* <p className="text-amber-600 mt-2">{tier.tier.slice(0, -1)}</p> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 text-center"
        >
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">Become a Sponsor</h3>
          <p className="text-gray-600 mb-6">Join us in advancing the future of engineering and technology</p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-semibold shadow-lg shadow-amber-500/25 hover:from-amber-700 hover:to-amber-600 transition-all duration-300">
            Get Sponsorship Details
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
