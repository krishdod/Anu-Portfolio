import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Senior Shopify Full Stack Developer',
      category: 'Function Growth • Custom Apps • Functions • Checkout Extensions',
      image: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Shopify Developer',
      category: 'Tenovia Solutions • B2B • Marketplaces • Automation',
      image: '🛒',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Shopify Developer',
      category: 'ISpark IT • Private Apps • Admin API • Integrations',
      image: '🔌',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Shopify Developer',
      category: 'Creatpix Infotech • Themes • Performance • LCP & SEO',
      image: '⚡',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Technical Lead',
      category: 'Bacha Motors (TATA) • PHP • MySQL • Internal Systems',
      image: '🧠',
      gradient: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-100',
    },
    {
      title: 'Awards & Recognition',
      category: 'Shopify Badge • Launch Success • Performance Wins',
      image: '🏆',
      gradient: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="work" className="section-padding bg-white" ref={ref}>
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-gray-900 leading-tight">
            I pour my <span className="text-red-500">❤️</span> into<br />
            every Shopify build.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
            6+ years of building scalable Shopify solutions across luxury brands, B2B marketplaces, and high-volume stores.
          </p>
          <motion.button
            whileHover={{ x: 8 }}
            className="text-gray-900 font-medium text-lg flex items-center gap-2 hover:underline group"
          >
            Explore all projects
            <HiArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Project Image */}
              <div className={`aspect-square bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden relative mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl">
                  {project.image}
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0.8,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiArrowRight size={40} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredIndex === index ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ x: 8 }}
            className="text-gray-900 font-medium text-lg flex items-center gap-2 mx-auto hover:underline group"
          >
            view more work
            <HiArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
