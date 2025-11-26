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
          <motion.div variants={staggerItem} className="mb-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm relative"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-blue-400" />
              </motion.div>
              <span className="text-sm font-medium text-white">Open to Full-Time & Freelance Opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main Heading with Enhanced Gradient */}
          <motion.div variants={staggerItem} className="mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight">
              <span className="block mb-2 text-white">Hi, I'm</span>
              <GradientText className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Anita Dantani
              </GradientText>
            </h1>
          </motion.div>

          {/* Animated Role with Text Generate Effect */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="flex items-center gap-4 text-3xl md:text-4xl lg:text-5xl font-light text-gray-300">
              <span>I</span>
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-[200px]"
              >
                <GradientText className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {words[currentWord]}
                </GradientText>
              </motion.div>
            </div>
          </motion.div>

          {/* Job Title with Icon */}
          <motion.div variants={staggerItem} className="mb-12">
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex gap-3 text-blue-400 mt-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 size={24} />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-gray-200">
                  Senior Shopify Full Stack Developer<br />
                  & E-commerce Project Manager<br />
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Recognized by Shopify
                  </span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Description with Text Generate Effect */}
          <motion.div variants={staggerItem} className="mb-12 max-w-3xl">
            <TextGenerateEffect
              words="I build high-performing Shopify stores, custom apps, and checkout experiences that boost revenue, improve performance metrics like LCP, and streamline operations for fast-growing brands."
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            />
          </motion.div>

          {/* CTA Buttons with Enhanced Effects */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={scrollToNext}
                className="relative px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
              </button>
            </motion.div>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('contact', 80)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 backdrop-blur-sm transition-all duration-300"
            >
              Let's Talk
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
