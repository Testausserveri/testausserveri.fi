import { motion } from 'framer-motion'
import { useEffect } from "react";
import { useWrappingCounter } from '../../hooks/useWrappingCounter';

export const TextLoop = ({ children, duration = 3, stayTimeRatio = 0.95 }) => {
  const [index, incrementIndex] = useWrappingCounter(children ? children.length : 0);

  useEffect(() => {
    const id = setTimeout(incrementIndex, duration * 1000);
    return () => clearTimeout(id);
  }, [index])

  if (!children) return null;

  return <motion.div
    animate={{
      opacity: [0, 1, 1, 0],
      y: 35
    }}
    key={index}
    transition={{
      repeat: Infinity,
      duration,
      opacity: {
        duration,
        times: [0, 0.1, 0.9, 1]
      },
      y: {
        duration: duration * (1 - stayTimeRatio),
        delay: duration * stayTimeRatio,
      },
    }}
  >
    {children[index]}
  </motion.div>
}
