import React from 'react'
import { motion } from 'framer-motion';


const Gallery = () => {
  return (
    <div>
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
    </div>
  )
}

export default Gallery