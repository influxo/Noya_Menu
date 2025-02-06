import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import { motion, AnimatePresence } from 'framer-motion';
import noyaBg from "/images/noya-background-2 1.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNavLogo, setShowNavLogo] = useState(false);

  const handleLoaderComplete = () => {
    setShowNavLogo(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div className="min-h-screen relative">
      <img src={noyaBg} alt="Noya Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <Loader onAnimationComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      
      {/* Persistent navbar logo */}
      <AnimatePresence>
        {showNavLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-5 left-5 w-[100px] z-50"
          >
            <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-full"
      >
        <div className="container mx-auto px-4 py-8">
          <p className='text-yellow-500 font-semibold text-3xl'>Hello World </p>
        </div>
      </motion.div>
    </div>
  )
}

export default App
