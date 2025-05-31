'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a 
            href="#top"
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Closet Curator
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#the-problem" 
              className="text-accent hover:text-primary transition-colors duration-200 font-medium"
            >
              The Problem
            </a>
            <a 
              href="#how-it-works" 
              className="text-accent hover:text-primary transition-colors duration-200 font-medium"
            >
              How it Works
            </a>
            <a 
              href="#features" 
              className="text-accent hover:text-primary transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Get Early Access
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent hover:text-primary transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-primary/10"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#the-problem" 
                className="text-accent hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Problem
              </a>
              <a 
                href="#how-it-works" 
                className="text-accent hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#features" 
                className="text-accent hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all duration-200 font-medium text-left">
                Get Early Access
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
} 