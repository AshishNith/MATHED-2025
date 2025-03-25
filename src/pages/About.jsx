import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaUniversity, FaCogs, FaImages, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered) {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 15; // Increased from 1 to 2 for faster scroll
          }
        }
      }, 20); // Decreased from 30 to 20 for more frequent updates
    };

    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <div id='About' className="relative min-h-screen bg-gray-50 py-16">
      {/* Background with dual gradients */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
            backgroundSize: '24px 24px'
          }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-amber-600 mb-6">About Us</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto"></div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">

        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
              <FaCalendarAlt className="text-amber-600 mr-3" />
              MATHED 2025
            </h2>
            <div className="prose text-gray-600 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
              <p className="text-lg leading-relaxed">
                The Department proudly presents MATHED 2025: The 3rd International Conference on Manufacturing, Thermal, and Design Engineering. Building on the success of previous editions, this year's conference offers both online and offline participation.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Conference Highlights:</h3>
                <ul className="grid grid-cols-2 gap-6">
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Cutting-edge Innovations</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Global Collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Industry-Academia Partnership</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Sustainable Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
              <FaUniversity className="text-amber-600 mr-3" />
              NIT Hamirpur
            </h2>
            <div className="prose text-gray-600 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
              <p className="text-lg leading-relaxed">
                National Institute of Technology (NIT) Hamirpur is one of the 31 NITs in India, established in 1986 as Regional Engineering College through a joint initiative of the Government of India and the Government of Himachal Pradesh.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                It was granted Deemed University status and upgraded to NIT on 26th June 2002. The goals of the institute as embodied in the logo are truly remarkable in their scope of vision.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Educational Programs:</h3>
                <ul className="grid grid-cols-2 gap-6">
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Engineering Programs</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Sciences & Mathematics</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Humanities & Social Sciences</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Research Programs</span>
                  </li>
                </ul>
              </div>
            </div>
              {/* Image Gallery Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            // className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            {/* <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaImages className="text-amber-400 mr-3" />
              Gallery
            </h2> */}
            <div className="relative mt-10">
              <div 
                ref={scrollRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="overflow-x-scroll no-scrollbar" 
                style={{ 
                  scrollBehavior: 'smooth',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                }}
              >
                <div className="flex space-x-6 pb-4 w-max">
                  {[
                    {
                      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGWllkqzstEq_D631lrZ8wX3eu_GslWEvww&s",
                      alt: "NIT Hamirpur Campus",
                      title: "Campus View"
                    },
                    {
                      src: "https://nith.ac.in/international/image/admin_block.jpg",
                      alt: "Conference Hall",
                      title: "Conference Venue"
                    },
                    {
                      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTewL5BfZz2Pl6605OvXUuLPZvzgyfljQw9UmNkoXUs4XqJq6D8x_rjE4&s",
                      alt: "Department",
                      title: "Department Building"
                    },
                    // {
                    //   src: "https://www.nith.ac.in/uploads/topics/16964175015520.jpg",
                    //   alt: "Library Building",
                    //   title: "Central Library"
                    // },
                    {
                      src: "https://mind2023.nith.ac.in/pictures/night-sp.jpg",
                      alt: "Campus Life",
                      title: "Student Life"
                    },
                    {
                      src: "https://nith.ac.in/uploads/topics/hostelphoto16442124065939.jpg",
                      alt: "Labs",
                      title: "Research Labs"
                    },
                    // Duplicate images for infinite scroll
                    {
                      src: "https://nith.ac.in/international/image/nith25.jpg",
                      alt: "NIT Hamirpur Campus",
                      title: "Campus View"
                    },
                    {
                      src: "https://nith.ac.in/international/image/admin_block.jpg",
                      alt: "Conference Hall",
                      title: "Conference Venue"
                    },
                    {
                      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTewL5BfZz2Pl6605OvXUuLPZvzgyfljQw9UmNkoXUs4XqJq6D8x_rjE4&s",
                      alt: "Department",
                      title: "Department Building"
                    },
                    // {
                    //   src: "https://www.collegebatch.com/static/clg-gallery/national-institute-of-technology-hamirpur-239446.jpg",
                    //   alt: "Library Building",
                    //   title: "Central Library"
                    // },
                    {
                      src: "https://images.static-collegedunia.com/public/college_data/images/appImage/15024991071444996760NITHamirpurNewImage.jpg",
                      alt: "Campus Life",
                      title: "Student Life"
                    },
                    {
                      src: "https://www.collegebatch.com/static/clg-gallery/national-institute-of-technology-hamirpur-239448.jpg",
                      alt: "Labs",
                      title: "Research Labs"
                    }
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="relative flex-none w-80 h-60 overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-amber-600/70 via-amber-600/30 to-transparent"
                      >
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-4 left-4 text-white font-semibold text-lg"
                        >
                          {image.title}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Remove scroll buttons as we now have auto-scroll */}
            </div>
          </motion.section>
          </motion.section>

        
          

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
              <FaCogs className="text-amber-600 mr-3" />
              Department
            </h2>
            <div className="prose text-gray-600 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
              <p className="text-lg leading-relaxed">
                The Department of Mechanical Engineering at NIT Hamirpur, established in 1986 alongside the then Regional Engineering College Hamirpur, initially served as a supporting department for other disciplines.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The Department launched its B.Tech program in Mechanical Engineering in 1994 and has since grown into a center of excellence, offering M.Tech and Ph.D. programs in Design, Thermal, and Manufacturing.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Academic Programs:</h3>
                <ul className="grid grid-cols-2 gap-6">
                <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>Ph.D. Program</span>
                  </li>
               
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>M.Tech in Design Engineering</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>M.Tech in Thermal Engineering</span>
                  </li>
                  
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>M.Tech in manufacturing and Automation</span>
                  </li>
                  <li className="flex items-center space-x-2 bg-amber-100 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    <span>B.Tech in Mechanical Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-amber-600 mr-3" />
              About Hamirpur
            </h2>
            <div className="prose text-gray-600 prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
              <p className="text-lg leading-relaxed">
                Hamirpur, nestled in the scenic hills of Himachal Pradesh, is known for its pleasant weather, lush greenery, and rich cultural heritage. The town offers breathtaking views of the Shivalik range and serves as a gateway to several natural attractions.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The historic Sujanpur Tira Fort provides stunning views of the Beas River, while Palampur's lush tea gardens sit against the majestic Dhauladhar range. Dharamshala and McLeodganj, known for their Tibetan culture, offer vibrant markets, monasteries, and trekking trails.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-amber-600 mb-6">Key Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src="https://s7ap1.scene7.com/is/image/incredibleindia/sujanpura-tira-dharamshala-himachal-pradesh-5-attr-hero?qlt=82&ts=1726731069695" 
                      alt="Sujanpur Tira Fort"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">Sujanpur Tira Fort</h3>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVNB9kaV4DvbvDatdJD1ltFhUKDhH__1UIA&s" 
                      alt="Palampur Tea Gardens"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">Palampur Tea Gardens</h3>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src="https://lh4.googleusercontent.com/Ff7tINstNTH5-N4xqjYAXWKZvBZwmJ2gXWvnFjK8XwRAOBAuMm9gxUmoXVj-0m1PrVD5BIWOoBlRToHnIOfady1guqr5Lkv-3tK7oSMzNSwL6FwlQqmgzhKAGCAxIKaqa4eeQCfe=w640-h394" 
                      alt="Dharamshala & McLeodganj"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">Dharamshala & McLeodganj</h3>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-lg">
                    <img 
                      src="https://tripxl.com/blog/wp-content/uploads/2024/08/A-temple-amidst-lush-meadows.jpg" 
                      alt="Ancient Temples"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">Ancient Temples</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>


        
        </div>
      </div>
    </div>
  );
};

export default About;
