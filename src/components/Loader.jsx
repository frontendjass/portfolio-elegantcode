import { motion } from 'framer-motion';

export default function Loader({ loadingTime }) {
  const loadingText = 'ElegantCode';
  const totalDuration = loadingTime / 1000;
  const duration = totalDuration / loadingText.length;

  return (
    <div className='bg-stone-300 h-screen'>
      <div className='flex h-full justify-center items-center'>
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: totalDuration + 0.5 }}
          className='text-5xl md:text-8xl'
        >
          {loadingText.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: duration, delay: (index + 1) * duration }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
}
