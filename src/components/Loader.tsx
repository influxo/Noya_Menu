import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onAnimationComplete: () => void;
  targetPosition: {
    top: number;
    left: number;
  };
}

const Loader: React.FC<LoaderProps> = ({ onAnimationComplete, targetPosition }) => {
  const [currentScene, setCurrentScene] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < 3) {
        setCurrentScene(prev => prev + 1);
      }
    }, 1000); // Shorter duration between scenes

    return () => clearTimeout(timer);
  }, [currentScene]);

  useEffect(() => {
    const handleResize = () => {
      // Removed the unused windowSize state
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Image */}
      <motion.img 
        src="/images/noya-bg-short-scaled.jpg" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: currentScene === 3 ? 0 : 1 
        }}
        transition={{ duration: 0.4 }}
      />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentScene === 1 && (
            <motion.div
              key="scene1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 0.8 }}
              exit={{ opacity: 1, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[30vw]"
            >
              <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
            </motion.div>
          )}
          
          {currentScene === 2 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.25 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[30vw]"
            >
              <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
            </motion.div>
          )}

          {currentScene === 3 && (
            <motion.div
              key="scene3"
              initial={{ 
                opacity: 1, 
                scale: 1.25,
                x: 0,
                y: 0
              }}
              animate={{ 
                opacity: 1, 
                scale: 0.8,
                y: targetPosition.top - (window.innerHeight / 2) + (window.innerHeight * 0.1) // Add 10% offset to adjust for the overshoot
              }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
              onAnimationComplete={onAnimationComplete}
              className="w-[30vw]"
            >
              <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Loader;