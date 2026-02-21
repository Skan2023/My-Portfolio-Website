// src/components/About.js
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Curious about me? Here you have it:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about-image.jpeg"
              alt="About me"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-600"
          >
            <p>
              I'm a passionate designer who finds beauty in simplifying complexity. 
              My journey into design started with a deep curiosity about how things work 
              and a desire to make them work better for everyone.
            </p>
            <p>
              I began my design career right after graduating from university. Today, 
              I work on intuitive interfaces and meaningful user experiences that help people 
              accomplish their goals effortlessly. My approach is human-first, focusing on 
              empathy, clarity, and joy in every interaction.
            </p>
            <p>
              I am an avid learner and always stay updated with the latest in design trends, 
              technology, and user behavior. Design is not just what I do—it's how I see the 
              world: as an endless opportunity to shape experiences that matter.
            </p>
            <p>
              One last thing, I'm available for freelance work, so feel free to reach out 
              and say hello! I promise I don't bite 😉
            </p>

            <div className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Finally, some quick bits about me:
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>B.E. in Computer Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full time freelancer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Avid learner</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aspiring indie hacker</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}