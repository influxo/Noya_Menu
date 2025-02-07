import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onAnimationComplete: () => void;
}

const Loader = ({ onAnimationComplete }: LoaderProps) => {
  const [currentScene, setCurrentScene] = useState(1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < 3) {
        setCurrentScene(prev => prev + 1);
      }
    }, 1000); // Shorter duration between scenes

    return () => clearTimeout(timer);
  }, [currentScene]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Image */}
      <motion.img 
        src="/images/noya-background-2 1.png" 
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
              className="w-[150px]"
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
              className="w-[150px]"
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
                x: '0', // Move to the center horizontally
                y: '-63%' // Move to the top of the application
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut",
                opacity: { duration: 0.3 }
              }}
              onAnimationComplete={onAnimationComplete}
              className="w-[150px]"
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