import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Blur when scrolling down 10px+
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[999]"
    >
      <div
        className={`w-full h-[180px] border-b-2 border-[#D4B069] flex justify-center items-center transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-black/10" : "bg-transparent"
        }`}
      >
        <div className="px-5 py-5">
          <img src="/images/logo.svg" alt="Noya Logo" className="w-[80px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
