import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t-2 border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 text-sm md:text-base"
        >
          <p>
            © {currentYear} Anita Dantani. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500">
            Built with React, Vite, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
