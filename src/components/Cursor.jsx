import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseSize = 30; // You can change this value to any size

  useEffect(() => {
    function mouseMove(e) {
      mouseX.set(e.clientX - mouseSize / 2);
      mouseY.set(e.clientY - mouseSize / 2);
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY, width: mouseSize, height: mouseSize, backgroundColor: '#EEEAE6' }}
      className="bg-shark-950 rounded-full fixed top-0 left-0 z-9 mix-blend-difference"
    />
  );
}
