import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import images
import q1Img from '../assets/images/q1.jpg';
import q2Img from '../assets/images/q2.jpg';
import q3Img from '../assets/images/q3.jpg';
import q4Img from '../assets/images/q4.jpg';
import q5Img from '../assets/images/q5.jpg';

const questions = [
  {
    id: 1,
    img: q1Img,
    mainKey: 'q1_main',
    subKey: 'q1_sub',
    btnKey: 'q1_btn'
  },
  {
    id: 2,
    img: q2Img,
    mainKey: 'q2_main',
    subKey: 'q2_sub',
    btnKey: 'q2_btn'
  },
  {
    id: 3,
    img: q3Img,
    mainKey: 'q3_main',
    subKey: 'q3_sub',
    btnKey: 'q3_btn'
  },
  {
    id: 4,
    img: q4Img,
    mainKey: 'q4_main',
    subKey: 'q4_sub',
    btnKey: 'q4_btn'
  },
  {
    id: 5,
    img: q5Img,
    mainKey: 'q5_main',
    subKey: 'q5_sub',
    btnKey: 'q5_btn'
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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Gradient Overlay */}
      <AnimatePresence mode='wait'>
         <motion.div 
            key={currentQ.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
         >
             {/* Gradient Layer */}
             <div className="absolute inset-0 bg-black/70 z-10" />
             
             <img 
               src={currentQ.img} 
               alt="" 
               className="absolute inset-0 w-full h-full object-cover z-0"
               fetchPriority={currentIndex === 0 ? "high" : undefined}
               loading={currentIndex === 0 ? "eager" : undefined}
             />
         </motion.div>
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 h-full"
        >
          {/* Top Line (Old Main) - Smaller */}
          <h3 className="text-lg text-blue-200/90 font-medium mb-6 text-center">
            {t(currentQ.mainKey)}
          </h3>
          
          {/* Bottom Line (Old Sub) - Larger & Bold */}
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug text-center drop-shadow-lg mb-12 max-w-2xl">
            {t(currentQ.subKey)}
          </h2>

          <button
            onClick={handleNext}
            className="px-10 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-bold text-lg tracking-wide hover:bg-white/20 active:scale-95 transition-all"
          >
            {t(currentQ.btnKey)}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResonanceFlow;
