import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import { motion, AnimatePresence } from 'framer-motion';
import noyaBg from "/images/noya-background-2 1.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    // setShowNavLogo(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div className="h-screen relative">
      <img src={noyaBg} alt="Noya Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <Loader onAnimationComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isLoading ? 1 : 0 }}
        transition={{ duration: 0 }}
        className="relative motionDiv z-10 w-full h-full"
      >
        <div className="w-full h-screen flex flex-col items-center">
          <motion.div
            key="scene1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.8 }}
            className="w-[150px]"
          >
            <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
          </motion.div>
            <img src="/images/noyatext.png" alt="" />
            <div className='py-8 px-[4%] flex justify-center items-center text-center'>
              <p className="text-[#D4B069] font-italiana font-semibold text-md">NOYA GOES BEYOND A MERE RESTAURANT. IT’S YOUR HAVEN FOR ASIAN EXCELLENCE. ENJOY THE REFINED AMBIANCE WITH CURATED INTERIORS AND BREATHTAKING VIEWS OF PRISHTINA FROM OUR PANORAMIC TERRACE. NOYA STANDS PROUDLY AT PRISHTINA’S PEAK, A TESTAMENT TO ASIAN CULINARY BRILLIANCE. WE MERGE TRADITIONAL FLAVORS WITH CUTTING-EDGE TECHNIQUES, CRAFTING EACH DISH TO STIR THE SENSES IN OUR TRANQUIL SETTING.</p>
            </div>
            <div>
              <button className='bg-transparent border border-[#D4B069] text-[#D4B069] font-semibold py-2 px-4 rounded'>
                View Menu
              </button>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default App
