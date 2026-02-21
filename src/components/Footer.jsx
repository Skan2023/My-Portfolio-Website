// src/components/Footer.js
'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaFigma } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Get in Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Get in touch
          </span>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What's next? Feel free to reach out to me if you're looking for a developer, 
            have a query, or simply want to connect.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center justify-center space-x-4">
            <HiMail className="text-3xl text-gray-700" />
            <a 
              href="mailto:limrosskan1122@gmail.com" 
              className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-600 hover:text-gray-600 transition"
            >
              limrosskan1122@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <HiPhone className="text-3xl text-gray-700" />
            <a 
              href="tel:+918980500565" 
              className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-600 hover:text-gray-600 transition"
            >
              +855 95 317 021
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 mb-4">You may also find me on these platforms!</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
              aria-label="Figma"
            >
              <FaFigma size={28} />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <BiCopyright className="mr-1" />
            2026 | Designed and coded with Lim Rosskan
          </p>
        </motion.div>
      </div>
    </footer>
  )
}