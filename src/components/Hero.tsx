'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted to-primary/5 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight pb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your wardrobe,{' '}
              <span className="text-gradient">
                beautifully organized
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-accent-light mt-6 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Stop staring at a full closet with &ldquo;nothing to wear.&rdquo; Closet Curator uses AI to organize your wardrobe and suggest perfect outfits—every single day.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Early Access
              </button>
            </motion.div>
          </motion.div>

          {/* Visual/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Mockup Placeholder */}
              <div className="w-80 h-96 bg-gradient-to-b from-primary/20 to-primary-light/30 rounded-3xl shadow-2xl border-8 border-white flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="text-6xl mb-4">👗</div>
                  <div className="text-lg font-semibold">App Preview</div>
                  <div className="text-sm opacity-70">Coming Soon</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
              >
                <span className="text-2xl">📸</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 