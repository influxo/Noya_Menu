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
    }, 1500); // Shorter duration between scenes

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
        transition={{ duration: 0.8 }}
      />
      
      <div className="relative z-10 h-full">
        <AnimatePresence mode="wait">
          {currentScene === 1 && (
            <motion.div
              key="scene1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"
            >
              <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
            </motion.div>
          )}
          
          {currentScene === 2 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 1, scale: 2 }}
              animate={{ opacity: 1, scale: 2.5 }}
              exit={{ opacity: 1, scale: 2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]"
            >
              <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
            </motion.div>
          )}

          {currentScene === 3 && (
            <motion.div
              key="scene3"
              initial={{ 
                opacity: 1, 
                scale: 2,
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%'
              }}
              animate={{ 
                opacity: 1, 
                scale: 0.5,
                top: '20px',
                left: '20px',
                x: '0%',
                y: '0%'
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut",
                opacity: { duration: 0.3 }
              }}
              onAnimationComplete={onAnimationComplete}
              className="absolute w-[200px]"
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