import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center section-padding bg-white" ref={ref}>
      <div className="container-width max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
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
              animate={{
                rotate: [0, 14, -8, 14, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-gray-900 leading-tight"
          >
            Together!
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 font-light"
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
            className="inline-flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 hover:text-gray-600 transition-colors group"
          >
            anitadantani0@gmail.com
            <HiArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg md:text-xl text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Connect on LinkedIn →
            </motion.a>
            <p className="text-base md:text-lg text-gray-500">+91 91049 74221</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
