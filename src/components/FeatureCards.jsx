import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, CreditCard, ArrowRight } from 'lucide-react';

const FeatureCards = () => {
  const cards = [
    { 
      title: 'Upcoming Events', 
      image: '/card_events.png', 
      icon: <Calendar className="w-6 h-6" />,
      color: '#fbb03b',
      desc: 'Check out our busy school calendar for all key dates and activities.'
    },
    { 
      title: 'Newsletters', 
      image: '/card_news.png', 
      icon: <FileText className="w-6 h-6" />,
      color: '#004b87',
      desc: 'Read the latest updates and stories from William Austin Junior School.'
    },
    { 
      title: 'Online Payments', 
      image: '/card_payment.png', 
      icon: <CreditCard className="w-6 h-6" />,
      color: '#006eb5',
      desc: 'Quick and secure platform for paying school fees and activities.'
    },
  ];

  return (
    <section id="parents" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#fbb03b' }}>Essential Information</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#004b87' }}>Parent Resources</h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full" style={{ backgroundColor: '#fbb03b' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: card.color }}
                />
                {/* Float Icon Badge */}
                <div 
                  className="absolute -bottom-6 right-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: card.color }}
                >
                  {card.icon}
                </div>
              </div>

              <div className="p-10 pt-12 flex flex-col items-start flex-grow">
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors" style={{ color: '#004b87' }}>
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {card.desc}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-auto flex items-center gap-2 font-black text-sm tracking-wider uppercase group-hover:underline decoration-2 underline-offset-8"
                  style={{ color: card.color }}
                >
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
