/**
 * Framer Motion Animation Variants Library
 * Reusable animation variants for consistent motion design
 */

// Easing curves
export const EASING = {
  easeInOut: [0.6, -0.05, 0.01, 0.99],
  easeOut: [0.6, 0.01, -0.05, 0.95],
  easeIn: [0.6, 0.04, 0.98, 0.34],
  spring: { type: 'spring', stiffness: 100, damping: 15 }
}

// Fade animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.easeOut }
  }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.easeOut }
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.easeOut }
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.easeOut }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

// Scale animations
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASING.easeOut }
  }
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASING.easeOut }
  }
}

// Slide animations
export const slideInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASING.easeInOut }
  }
}

export const slideInDown = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASING.easeInOut }
  }
}

// Stagger animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Rotate animations
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: EASING.easeOut }
  }
}

export const flipIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.8, ease: EASING.easeOut }
  }
}

// Interactive hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: EASING.easeOut }
}

export const hoverLift = {
  y: -8,
  transition: { duration: 0.3, ease: EASING.easeOut }
}

export const elasticScale = {
  scale: 1.1,
  transition: { type: 'spring', stiffness: 400, damping: 10 }
}

export const magneticHover = {
  scale: 1.05,
  rotate: [0, -2, 2, -2, 0],
  transition: { duration: 0.5 }
}

// Page transitions
export const pageTransition = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.easeInOut }
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: { duration: 0.4, ease: EASING.easeIn }
  }
}

// Reveal animations
export const revealUp = {
  hidden: { 
    opacity: 0, 
    y: 100,
    clipPath: 'inset(100% 0% 0% 0%)'
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.8, ease: EASING.easeOut }
  }
}

export const revealFromCenter = {
  hidden: { 
    opacity: 0,
    scale: 0,
    clipPath: 'circle(0% at 50% 50%)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'circle(150% at 50% 50%)',
    transition: { duration: 1, ease: EASING.easeOut }
  }
}

// Text animations
export const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: EASING.easeOut
    }
  })
}

export const letterSpacing = {
  hidden: { opacity: 0, letterSpacing: '0.2em' },
  visible: {
    opacity: 1,
    letterSpacing: '0em',
    transition: { duration: 1, ease: EASING.easeOut }
  }
}

// Blur animations
export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8 }
  }
}

// Continuous animations
export const float = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const rotate360 = {
  rotate: 360,
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear'
  }
}

// Gradient animations
export const gradientShift = {
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'linear'
  }
}
