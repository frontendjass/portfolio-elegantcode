import { motion } from 'framer-motion';
import { useState } from 'react';
import useViewport from '../hooks/useViewport';

import menuOpen from '../assets/menuOpen.svg';
import menuClose from '../assets/menuClose.svg';
import DesktopNavbar from './DestopNavbar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const { width } = useViewport();

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  console.log(width);

  const isMobile = width < 768;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='bg-swirl-100'
    >
      <div>
        <nav className='md:flex md:justify-between md:items-center md:py-4'>
          <div className='flex justify-between items-center h-16 px-8'>
            <span className='text-2xl font-playFair text-shark-950'>
              Elegant<span className='font-bold'>Code</span>
            </span>
            <button onClick={handleClick} className='z-10 md:hidden'>
              <img
                src={isOpen ? menuClose : menuOpen}
                className='w-8'
                alt='Menu Icon'
              />
            </button>
          </div>

          {isMobile ? (
            <div className='relative'>
              <motion.ul
                initial='hidden'
                animate={isOpen ? 'show' : 'hidden'}
                variants={{
                  hidden: { x: '100%' },
                  show: {
                    x: 0,
                    transition: {
                      duration: 0.2,
                      when: 'beforeChildren',
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className='bg-swirl-200 absolute flex flex-col justify-center items-center gap-2 text-xl font-lora uppercase h-screen w-full -top-16 z-0'
              >
                {['Home', 'Services', 'Portfolio', 'Contact me'].map(
                  (text, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        show: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <a href={`#${text.toLowerCase().replace(' ', '-')}`}>
                        {text}
                      </a>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </div>
          ) : (
            <DesktopNavbar />
          )}
        </nav>
      </div>
    </motion.header>
  );
}
