import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
}

const ShinyText = ({ text }: ShinyTextProps) => {
  return (
    <motion.span
      className="inline-block"
      style={{
        backgroundImage: 'linear-gradient(100deg, #64CEFB 40%, #ffffff 50%, #64CEFB 60%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      animate={{
        backgroundPosition: ['200% center', '-200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
