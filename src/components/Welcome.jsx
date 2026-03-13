import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Heart } from 'lucide-react';

const stats = [
  { icon: <Users className="w-7 h-7" />, value: '600+', label: 'Students' },
  { icon: <BookOpen className="w-7 h-7" />, value: '40+', label: 'Teachers' },
  { icon: <Award className="w-7 h-7" />, value: '15+', label: 'Awards' },
  { icon: <Heart className="w-7 h-7" />, value: '30+', label: 'Years of Care' },
];

const Welcome = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12" style={{ background: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative accent box */}
            <div
              className="absolute top-4 left-4 w-full h-full rounded-2xl z-0"
              style={{ backgroundColor: '#fbb03b', opacity: 0.25 }}
            />
            <img
              src="/students.png"
              alt="William Austin school students in uniforms"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover"
              style={{ maxHeight: '450px' }}
            />
            {/* Badge */}
            <div
              className="absolute bottom-6 right-0 translate-x-4 z-20 rounded-xl px-5 py-3 text-white shadow-xl flex flex-col items-center"
              style={{ backgroundColor: '#004b87' }}
            >
              <span className="text-3xl font-black" style={{ color: '#fbb03b' }}>Ofsted</span>
              <span className="text-xs font-semibold tracking-wide">OUTSTANDING</span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#fbb03b' }}>
                Welcome
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: '#004b87' }}>
                Welcome To<br />Our School
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#fbb03b' }} />
            </div>

            <p className="text-gray-700 leading-relaxed text-base italic font-medium">
              "We are a highly motivated, hardworking school, totally committed to providing an excellent platform for learning."
            </p>

            <p className="text-gray-600 leading-relaxed">
              The warm and happy atmosphere which pervades our school is key to our success, alongside the quality of relationships and the high levels of care which exist between all members of the school community.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The life of our school is driven by enthusiasm and a desire to achieve. We want to give our children a thirst for learning that continues with them throughout their future school experiences and lives.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wider text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#004b87' }}
            >
              READ MORE ABOUT US →
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center rounded-2xl py-8 px-4 shadow-md hover:shadow-xl transition-shadow"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <div className="mb-3" style={{ color: '#004b87' }}>{s.icon}</div>
              <div className="text-3xl font-black" style={{ color: '#004b87' }}>{s.value}</div>
              <div className="text-sm text-gray-500 font-medium mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
