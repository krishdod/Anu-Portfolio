import React from 'react'
import { motion } from 'framer-motion'
import { Play, Award, Users, Briefcase, Code, Palette, Zap } from 'lucide-react'
import { RevealOnScroll } from '../effects/RevealOnScroll'
import { GradientText } from '../animated/GradientText'
import { Card } from '../ui/card'
import { staggerContainer, staggerItem } from '../../lib/animations'
import Tilt from 'react-parallax-tilt'

const About = () => {
  const skills = [
    { icon: Code, name: 'Custom Shopify Apps & APIs', level: 95 },
    { icon: Zap, name: 'Performance & Checkout Optimization', level: 92 },
    { icon: Briefcase, name: 'E-commerce Project Leadership', level: 90 },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container-width relative z-10">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <GradientText>Where Shopify Expertise Meets E-commerce Growth</GradientText>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I design, build, and scale Shopify experiences that improve performance, automate operations, and drive measurable business results
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Video Card */}
          <RevealOnScroll delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <Card className="relative h-full min-h-[400px] overflow-hidden group cursor-pointer bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={40} className="text-white ml-2" fill="white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    2024 Design Showreel
                  </h3>
                  <p className="text-white/80 text-lg">Watch my creative journey</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </Card>
            </Tilt>
          </RevealOnScroll>

          {/* Stats Cards */}
          <RevealOnScroll delay={0.2}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <Card className="p-8 h-full bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="text-blue-500" size={32} />
                  </motion.div>
                  <h3 className="text-5xl font-bold mb-2">
                    <GradientText>6+</GradientText>
                  </h3>
                  <p className="text-muted-foreground">Years in E-commerce</p>
                </div>
              </Card>
            </Tilt>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <Card className="p-8 h-full bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="text-purple-500" size={32} />
                  </motion.div>
                  <h3 className="text-5xl font-bold mb-2">
                    <GradientText>30+</GradientText>
                  </h3>
                  <p className="text-muted-foreground">Merchants Supported</p>
                </div>
              </Card>
            </Tilt>
          </RevealOnScroll>

          {/* Skills Card */}
          <RevealOnScroll delay={0.4} className="lg:col-span-1">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <Card className="p-8 h-full bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Briefcase className="text-green-500" size={32} />
                  </motion.div>
                  <h3 className="text-5xl font-bold mb-2">
                    <GradientText>60+</GradientText>
                  </h3>
                  <p className="text-muted-foreground">Shopify Projects</p>
                </div>
              </Card>
            </Tilt>
          </RevealOnScroll>
        </div>

        {/* Skills Section */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Core <GradientText>Expertise</GradientText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all border-primary/10 hover:border-primary/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <skill.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default About
