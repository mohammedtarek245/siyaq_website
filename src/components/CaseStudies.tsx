import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { staggerContainer, fadeInUp } from '../lib/animations';

const CaseStudies: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="case-studies" dir={isRTL ? 'rtl' : 'ltr'} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            {t.caseStudies.badge}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-medium text-black mb-4">
            {t.caseStudies.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-base max-w-2xl">{t.caseStudies.subtitle}</motion.p>
        </motion.div>

        {/* Case Studies grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {t.caseStudies.items.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="group relative bg-[#F9F9F9] border border-gray-200 p-8 hover:border-black transition-colors duration-300"
            >
              {/* Category badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-300 text-gray-600 bg-white">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-medium text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.description}</p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-black text-sm font-medium">
                <span className="border-b border-black pb-0.5">{isRTL ? 'اقرأ المزيد' : 'Read more'}</span>
                <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
