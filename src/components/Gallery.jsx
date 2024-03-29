import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/gallery/evehack01.jpeg';
import img2 from '../assets/gallery/evehack02.jpeg';
import img3 from '../assets/gallery/evehack03.jpeg';
import img4 from '../assets/gallery/evehack04.jpeg';


const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
  ];
  const intervalDuration = 3000; // 3 seconds interval

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, intervalDuration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="flex justify-center items-center mt-12 mx-4">
      <div className="w-4/5">
        <div className="relative bg-white rounded-lg overflow-hidden border border-[#01484C] px-8 mt-4 pb-8 mb-8">
          <motion.h1
            className="text-center text-4xl py-8 text-[#01484C]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.h1>
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="w-full relative overflow-hidden h-80 md:order-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full">
                <motion.img
                  src={images[currentSlide]}
                  alt="Slideshow Image"
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent font-bold text-4xl text-white"
                onClick={prevSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                &lt;
              </motion.button>
              <motion.button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent font-bold text-4xl text-white"
                onClick={nextSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                &gt;
              </motion.button>
              <motion.div
                className="flex justify-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {images.map((_, index) => (
                  <motion.span
                    key={index}
                    className={`h-2 w-2 mx-1 rounded-full ${
                      index === currentSlide ? 'bg-[#49A79D]' : 'bg-gray-300'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
