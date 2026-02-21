// src/components/Projects.js
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/images/project1.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwind', 'Figma', 'Cypress', 'Storybook', 'Git'],
    link: '#'
  },
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/images/project2.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwind', 'Figma', 'Cypress', 'Storybook', 'Git'],
    link: '#'
  },
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    image: '/images/project3.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwind', 'Figma', 'Cypress', 'Storybook', 'Git'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Work
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Some of the noteworthy projects I have built:
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div className={`relative h-80 md:h-96 bg-gray-100 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-full h-full p-8 flex items-center justify-center">
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition"
                  >
                    <FiExternalLink className="mr-2" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}