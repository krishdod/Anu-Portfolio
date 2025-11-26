import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code2 } from 'lucide-react'
import { GradientText } from './animated/GradientText'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { SparklesCore } from './ui/sparkles'
import { BackgroundBeams } from './ui/background-beams'
import { staggerContainer, staggerItem } from '../lib/animations'
import { smoothScrollTo } from '../lib/utils'

const HeroEnhanced = () => {
  const scrollToNext = () => {
    smoothScrollTo('about', 80)
  }

  const words = ['Build', 'Optimize', 'Scale', 'Deliver']
  const [currentWord, setCurrentWord] = React.useState(0)
  const [showScrollHint, setShowScrollHint] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const hero = document.getElementById('home')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const visibleRatio = rect.bottom / window.innerHeight
      setShowScrollHint(visibleRatio > 0.7)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 md:pt-32">
      {/* Animated Background with Beams */}
      <BackgroundBeams className="opacity-40" />
      
      {/* Sparkles Effect */}
      <SparklesCore
        id="tsparticles"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={28}
        className="w-full h-full pointer-events-none"
        particleColor="100, 150, 255"
      />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="container-width w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Badge with Glow */}
          <motion.div variants={staggerItem} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/40 bg-blue-500/15 backdrop-blur-md relative"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                y: -3,
                transition: { duration: 0.3 }
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity }
                }}
              >
                <Sparkles size={18} className="text-blue-400" />
              </motion.div>
              <span className="text-sm md:text-base font-semibold text-white tracking-wide">Open to Full-Time & Freelance</span>
            </motion.div>
          </motion.div>

          {/* Main Heading with Enhanced Gradient */}
          <motion.div variants={staggerItem} className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.9] tracking-tighter">
              <motion.span 
                className="block mb-3 md:mb-4 text-white/90 font-light tracking-normal text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Anita Dantani
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Role with Text Generate Effect */}
          <motion.div variants={staggerItem} className="mb-10">
            <div className="flex items-center gap-4 md:gap-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-200">
              <span className="font-extralight">I</span>
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 150,
                }}
                className="min-w-[250px] md:min-w-[350px]"
              >
                <motion.span
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {words[currentWord]}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Job Title with Icon */}
          <motion.div variants={staggerItem} className="mb-14">
            <div className="flex items-start gap-5">
              <motion.div 
                className="flex gap-3 text-blue-400 mt-2"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
              >
                <Code2 size={28} strokeWidth={2} />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-100">
                  <motion.span
                    className="block mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Senior Shopify Full Stack Developer
                  </motion.span>
                  <motion.span
                    className="block mb-2 text-gray-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    & E-commerce Project Manager
                  </motion.span>
                  <motion.span 
                    className="block font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-3xl md:text-4xl lg:text-5xl mt-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                  >
                    Recognized by Shopify
                  </motion.span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Description with Text Generate Effect */}
          <motion.div variants={staggerItem} className="mb-14 max-w-4xl">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              I build{' '}
              <span className="font-semibold text-white">high-performing Shopify stores</span>,{' '}
              <span className="font-semibold text-white">custom apps</span>, and{' '}
              <span className="font-semibold text-white">checkout experiences</span> that{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                boost revenue
              </motion.span>,{' '}
              improve performance, and streamline operations for fast-growing brands.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with Enhanced Effects */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-5 md:gap-6">
            <motion.button
              onClick={scrollToNext}
              className="relative px-10 py-5 text-lg md:text-xl font-bold rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl overflow-hidden group"
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.5)',
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 20px 40px rgba(59, 130, 246, 0.4)',
                  '0 25px 50px rgba(147, 51, 234, 0.4)',
                  '0 20px 40px rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('contact', 80)
              }}
              className="relative px-10 py-5 text-lg md:text-xl font-bold rounded-full border-3 border-blue-400 text-blue-400 hover:text-white backdrop-blur-md transition-all duration-300 overflow-hidden group"
              whileHover={{ 
                scale: 1.08,
                borderColor: 'rgb(147, 51, 234)',
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Talk</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>

          {/* Stats with Glassmorphism */}
          <motion.div 
            variants={staggerItem}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: '6+' },
              { label: 'Shopify Projects', value: '60+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Key Achievements', value: '3+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
              whileHover={{ y: -4 }}
            >
              <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={20} className="group-hover:scale-110 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default HeroEnhanced
