// src/components/Hero.js
'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaDribbble, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm Lim Rosskan 👋
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a product designer with a focus on creating extraordinary digital 
              experiences that are intuitive, purposeful, and human-centered. When not 
              designing, you can find me cycling through nature, reading an 
              autobiographical novel, or planning my next trip.
            </p>
            
            {/* Location and Availability */}
            <div className="flex flex-col space-y-2 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <span>📍 Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available for new projects</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/Skan2023" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lim-rosskan-3046022a1/" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/bro.skan.5245" target="_blank" className="text-gray-600 hover:text-gray-900 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <FaDribbble size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}