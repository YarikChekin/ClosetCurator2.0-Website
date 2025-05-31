'use client';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: "📸",
      title: "Smart Photo Capture",
      description: "Quickly photograph your entire wardrobe with intelligent auto-tagging. Our AI recognizes colors, patterns, and clothing types automatically."
    },
    {
      icon: "🤖", 
      title: "AI Organization",
      description: "Let machine learning sort and categorize your clothes. No more manual tagging – everything is organized intelligently."
    },
    {
      icon: "👔",
      title: "Outfit Suggestions", 
      description: "Get personalized outfit recommendations based on your style preferences, occasion, and what you actually own."
    },
    {
      icon: "🌤️",
      title: "Weather Integration",
      description: "Receive weather-aware styling suggestions. Perfect outfits for any forecast, automatically tailored to your wardrobe."
    },
    {
      icon: "📊",
      title: "Style Analytics & Sustainability",
      description: "Track what you wear and love. Make smarter purchasing decisions, reduce waste, and discover items to donate or sell."
    },
    {
      icon: "💡",
      title: "Smart Reminders",
      description: "Never forget about pieces you own. Rediscover forgotten favorites and get reminded to wear items you haven't used."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful features that
            <span className="text-gradient block">
              transform your style
            </span>
          </h2>
          <p className="text-xl text-accent-light max-w-3xl mx-auto">
            From AI-powered organization to sustainable shopping insights, 
            Closet Curator gives you everything you need to master your wardrobe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-accent-light mb-6">
            Ready to revolutionize your wardrobe?
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Style Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
} 