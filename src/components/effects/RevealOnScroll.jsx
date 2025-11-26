import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * RevealOnScroll component for revealing content on scroll
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to reveal
 * @param {Object} props.variants - Framer Motion variants
 * @param {number} props.delay - Delay before animation starts
 * @param {number} props.threshold - Intersection observer threshold
 * @param {boolean} props.once - Whether to animate only once
 */
export function RevealOnScroll({ 
  children, 
  variants, 
  delay = 0, 
  threshold = 0.1,
  once = true,
  className = ''
}) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once
  })

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
