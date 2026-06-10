import { motion } from 'framer-motion';

export const AnimatedBlobs = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => {
  const colors = variant === 'primary' 
    ? ['bg-primary/20', 'bg-teal-500/10', 'bg-emerald-500/10'] 
    : ['bg-rose-500/10', 'bg-orange-500/10', 'bg-[#E1E0CC]/10'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-70 ${colors[0]}`}
      />
      <motion.div
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, 100, 50, 100, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute top-1/2 -right-20 w-[30rem] h-[30rem] rounded-full mix-blend-screen filter blur-[120px] opacity-60 ${colors[1]}`}
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 50, 0],
          y: [0, -50, 50, -50, 0],
          scale: [1, 1.5, 1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute -bottom-40 left-1/3 w-[25rem] h-[25rem] rounded-full mix-blend-screen filter blur-[90px] opacity-50 ${colors[2]}`}
      />
    </div>
  );
};
