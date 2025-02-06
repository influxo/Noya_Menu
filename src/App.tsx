import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import { motion, AnimatePresence } from 'framer-motion';
import noyaBg from "/images/noya-background-2 1.png"
import Navbar from './components/Navbar';

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
      
      {/* Navbar */}
      <AnimatePresence>
        {showNavLogo && <Navbar />}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full h-full pt-[120px]"
      >
        <div className="container mx-auto px-4">
          <p className='text-yellow-500 font-semibold text-3xl'>Hello World </p>
        </div>
      </motion.div>
    </div>
  )
}

export default App
