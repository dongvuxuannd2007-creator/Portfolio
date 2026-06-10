import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../lib/utils';

export const WordsPullUp = ({ text, className, showAsterisk }: { text: string, className?: string, showAsterisk?: boolean }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const words = text.split(' ');
  
  return (
    <div ref={containerRef} className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mr-[0.25em] relative inline-block"
        >
          {word}
          {showAsterisk && i === words.length - 1 && word.endsWith('a') && (
            <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
          )}
        </motion.span>
      ))}
    </div>
  );
};

export const WordsPullUpMultiStyle = ({ segments, className }: { segments: {text: string, className?: string}[], className?: string }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  let globalWordIndex = 0;
  
  return (
    <div ref={containerRef} className={cn("inline-flex flex-wrap justify-center", className)}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ');
        return (
          <span key={segIdx} className={cn("inline-flex flex-wrap", segment.className)}>
            {words.map((word, wordIdx) => {
              const currentIdx = globalWordIndex++;
              return (
                <motion.span
                  key={wordIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{
                    delay: currentIdx * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export const AnimatedLetter = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export const ScrollTextReveal = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');
  
  return (
    <p ref={containerRef} className={cn("flex flex-wrap", className)}>
      {chars.map((char, i) => {
        const charProgress = i / chars.length;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);
        return (
          <AnimatedLetter key={i} progress={scrollYProgress} range={[start, end]}>
            {char === ' ' ? '\u00A0' : char}
          </AnimatedLetter>
        );
      })}
    </p>
  );
};
