'use client'

import { motion, AnimatePresence } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        className="w-full"
      >
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 