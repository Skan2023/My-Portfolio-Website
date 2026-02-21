// src/components/Experience.js
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Upwork',
    logo: '/images/upwork-logo.png',
    position: 'Sr. Frontend Developer',
    period: 'Nov 2021 - Present',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Ut pretium arcu et massa semper, id fringilla leo semper.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  },
  {
    company: 'Upwork',
    logo: '/images/upwork-logo.png',
    position: 'Team Lead',
    period: 'Jul 2017 - Oct 2021',
    responsibilities: [
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  },
  {
    company: 'Upwork',
    logo: '/images/upwork-logo.png',
    position: 'Full Stack Developer',
    period: 'Dec 2015 - May 2017',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Ut pretium arcu et massa semper, id fringilla leo semper.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Here is a quick summary of my most recent experiences:
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="grid md:grid-cols-12 gap-6">
                {/* Company Logo */}
                <div className="md:col-span-2 flex items-start">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Job Details */}
                <div className="md:col-span-7">
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <ul className="space-y-2 mt-4 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Period */}
                <div className="md:col-span-3 text-gray-500">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}