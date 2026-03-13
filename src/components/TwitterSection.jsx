import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Bell } from 'lucide-react';

const TwitterSection = () => {
  const tweets = [
    {
      text: "Congratulations to the 40 pupils who went to London to watch Charlie and the Chocolate Factory! 🎭",
      date: "2 days ago",
    },
    {
      text: "Our Year 6 students achieved outstanding results in the National Maths Challenge this year! 🏆",
      date: "1 week ago",
    },
    {
      text: "Sports Day is this Friday — parents are warmly welcome to join us on the field from 10am! ⚽",
      date: "2 weeks ago",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: '#004b87' }}>
      {/* Background decoration */}
      <div
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: '#ffffff' }}
      />
      <div
        className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full opacity-10"
        style={{ backgroundColor: '#fbb03b' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
            style={{ backgroundColor: '#1da1f2' }}
          >
            <Twitter className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Latest from Twitter
          </h2>
          <p className="text-blue-200 mt-2 text-sm">Stay connected with our school community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tweets.map((tweet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Twitter className="w-4 h-4" style={{ color: '#1da1f2' }} />
                <span className="text-white font-bold text-sm">@WilliamAustinJS</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">{tweet.text}</p>
              <span className="text-blue-300 text-xs">{tweet.date}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-bold text-sm tracking-wider border-2 border-white text-white transition-all hover:bg-white"
            style={{ '--hover-color': '#004b87' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#004b87'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#ffffff'; }}
          >
            FOLLOW US ON TWITTER
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwitterSection;
