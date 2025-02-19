import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import noyaBg from "/images/noya-bg-short-scaled.jpg";
import Loader from "../components/Loader";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const targetLogoRef = useRef<HTMLDivElement>(null);
  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (targetLogoRef.current) {
        const rect = targetLogoRef.current.getBoundingClientRect();
        const paddingTop = parseInt(
          window.getComputedStyle(targetLogoRef.current).paddingTop
        );
        setTargetPosition({
          top: rect.top + paddingTop,
          left: rect.left,
        });
      }
    };

    // Update position initially and on resize
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="max-h-screen relative">
      <img
        src={noyaBg}
        alt="Noya Background"
        className="absolute inset-0 w-full h-full brightness-[0.7] object-cover"
      />

      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <Loader
            onAnimationComplete={handleLoaderComplete}
            targetPosition={targetPosition}
          />
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
            ref={targetLogoRef}
            key="scene1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.8 }}
            className="w-[30vw] py-10"
          >
            <img src="/images/logo.svg" alt="Noya Logo" className="w-full" />
          </motion.div>
          <img src="/images/noyatext.png" alt="" />
          <div className="py-8 px-[4%] flex justify-center items-center text-center">
            <p className="text-[#D4B069] font-italiana font-semibold text-md">
              NOYA GOES BEYOND A MERE RESTAURANT. IT’S YOUR HAVEN FOR ASIAN
              EXCELLENCE. ENJOY THE REFINED AMBIANCE WITH CURATED INTERIORS AND
              BREATHTAKING VIEWS OF PRISHTINA FROM OUR PANORAMIC TERRACE. NOYA
              STANDS PROUDLY AT PRISHTINA’S PEAK, A TESTAMENT TO ASIAN CULINARY
              BRILLIANCE. WE MERGE TRADITIONAL FLAVORS WITH CUTTING-EDGE
              TECHNIQUES, CRAFTING EACH DISH TO STIR THE SENSES IN OUR TRANQUIL
              SETTING.
            </p>
          </div>
          <div className='w-full flex justify-center items-center px-[4%]'>
            <button className="bg-transparent border border-[#D4B069] font-italiana w-full text-[#D4B069] font-semibold py-2 px-4 rounded">
              <Link to="/menu">View Menu</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
