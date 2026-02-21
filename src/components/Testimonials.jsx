'use client'

import {motion} from "framer-motion"
import Image from "next/image";

const testimonials = [
  {
    name: 'John Doe',
    position: "CEO, Company",
    image: "/images/testimonial1.png",
    quote: "Job well done! I am really impressed. He is very very good at what he does. I would recommend Sagar and will rehire in the future for Frontend development."
  },
  {
    name: 'Lim Rosskan',
    position: "CEO, Company",
    image: "/images/testimonial1.png",
    quote: "Job well done! I am really impressed. He is very very good at what he does. I would recommend Sagar and will rehire in the future for Frontend development."
  },
  {
    name: 'ane Smith',
    position: "CTO, StartupXYZ",
    image: "/images/testimonial1.png",
    quote: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Nice things people have said about me:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Image
                  src={testimonial.image}
                  alt="Testimonial1"
                  width={50}
                  height={50}
                  className="object-cover rounded-2xl"
                  priority
                />
                </div>
              </div>

              {/* Quote */}
              <div className="text-gray-600 text-center mb-6 leading-relaxed">
                {testimonial.quote}
              </div>

              {/* Name and Position */}
              <div className="text-center">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}