import { motion } from 'framer-motion';

export default function DesktopNavbar() {
  return (
    <ul className='mr-8'>
      {['Home', 'Services', 'Portfolio', 'Contact me'].map((text, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            show: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.3 }}
          className='font-lora uppercase'
        >
          <a href={`#${text.toLowerCase().replace(' ', '-')}`}>{text}</a>
        </motion.li>
      ))}
    </ul>
  );
}
