import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Briefcase, Code, Zap } from 'lucide-react'
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
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      
      <div className="container-width relative z-10">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-24">
            <motion.div
              className="inline-block mb-6 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm md:text-base font-semibold tracking-wide"
              whileHover={{ scale: 1.08, y: -3 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              About Me
            </motion.div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              <GradientText>Where Shopify Expertise</GradientText>
              <br />
              <GradientText>Meets E-commerce Growth</GradientText>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              I design, build, and scale{' '}
              <span className="font-semibold text-foreground">Shopify experiences</span> that improve performance,{' '}
              <span className="font-semibold text-foreground">automate operations</span>, and drive{' '}
              <span className="font-semibold text-foreground">measurable business results</span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Stats Cards */}
          <RevealOnScroll delay={0.1}>
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

          <RevealOnScroll delay={0.2}>
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

          <RevealOnScroll delay={0.3}>
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
        <RevealOnScroll delay={0.4}>
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
