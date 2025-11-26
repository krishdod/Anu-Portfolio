import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center section-padding bg-background" ref={ref}>
      <div className="container-width max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          {/* Hand gesture emoji */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="text-7xl md:text-8xl lg:text-9xl mb-12 inline-block"
          >
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 14, -8, 14, -8, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -20, 20, -20, 20, 0],
                transition: { duration: 0.5 }
              }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground leading-tight"
          >
            Let's Build Something{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Amazing
            </motion.span>
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-foreground leading-tight"
          >
            Together!
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 font-light"
          >
            <p>Open to full-time roles, freelance projects, and consulting opportunities</p>
          </motion.div>

          <motion.a
            href="mailto:anitadantani0@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ x: 8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground hover:text-primary transition-colors group relative"
          >
            <motion.span
              className="relative"
              whileHover={{ y: -2 }}
            >
              anitadantani0@gmail.com
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </motion.div>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/anita-dantani/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-2 group"
            >
              Connect on LinkedIn 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </motion.a>
            <p className="text-base md:text-lg text-muted-foreground">+91 91049 74221</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
