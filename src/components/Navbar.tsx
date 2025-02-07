import React from 'react'
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className='w-full h-[180px] border-b-2 border-[#D4B069] flex justify-between items-center'>
        <div className='px-5 py-5'>
          <img src="/images/logo.svg" alt="Noya Logo" className="w-[80px]"/>
        </div>
        <div className="text-[#D4B069] font-semibold">
          <ul className="flex gap-8">
            <li className="cursor-pointer hover:opacity-80">Home</li>
            <li className="cursor-pointer hover:opacity-80">Menu</li>
            <li className="cursor-pointer hover:opacity-80">About</li>
            <li className="cursor-pointer hover:opacity-80">Contact</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar