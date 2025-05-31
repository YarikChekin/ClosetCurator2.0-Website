'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/3 via-white to-primary-light/4 py-20 lg:py-32 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          data-testid="hero-motion"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight pb-2">
            Your wardrobe,
            <span className="text-gradient block leading-tight">
              beautifully organized
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-accent-light max-w-3xl mx-auto leading-relaxed">
            Transform chaos into style with AI-powered wardrobe management. 
            Photograph, organize, and discover perfect outfits from clothes you already own.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get Early Access"
            >
              Get Early Access
            </button>
            <button
              className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
            >
              Watch Demo
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 text-sm text-accent-light">
            <p>Join 10,000+ style-conscious users who&apos;ve organized their wardrobes</p>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-light/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
} 