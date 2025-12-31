import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import images
import q1Img from '../assets/images/q1.jpeg';
import q2Img from '../assets/images/q2.jpeg';
import q3Img from '../assets/images/q3.jpeg';
import q4Img from '../assets/images/q4.jpeg';
import q5Img from '../assets/images/q5.jpeg';

const questions = [
  {
    id: 1,
    img: q1Img,
    textKey: 'q1_text',
    btnKey: 'q1_btn',
    sub: "Gamification"
  },
  {
    id: 2,
    img: q2Img,
    textKey: 'q2_text',
    btnKey: 'q2_btn',
    sub: "AI Empowerment"
  },
  {
    id: 3,
    img: q3Img,
    textKey: 'q3_text',
    btnKey: 'q3_btn',
    sub: "Expertise"
  },
  {
    id: 4,
    img: q4Img,
    textKey: 'q4_text',
    btnKey: 'q4_btn',
    sub: "Sales Evolution"
  },
  {
    id: 5,
    img: q5Img,
    textKey: 'q5_text',
    btnKey: 'q5_btn',
    sub: "Kindred Spirits"
  }
];

const ResonanceFlow = ({ onComplete }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <AnimatePresence mode='wait'>
         <motion.div 
            key={currentQ.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
         >
             <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for text readability */}
             <img 
               src={currentQ.img} 
               alt="" 
               className="w-full h-full object-cover"
             />
         </motion.div>
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full px-6 text-center z-20 relative"
        >
          <div className="text-[#FF9900] font-bold tracking-widest uppercase mb-4 text-sm">
            {currentQ.sub}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
            {t(currentQ.textKey)}
          </h2>
          <button
            onClick={handleNext}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-[#1E5FA8] bg-white rounded-full overflow-hidden transition-all hover:bg-[#FF9900] hover:text-white"
          >
            <span className="relative z-10">{t(currentQ.btnKey)}</span>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResonanceFlow;
