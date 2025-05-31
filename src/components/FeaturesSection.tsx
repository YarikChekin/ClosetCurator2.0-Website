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
      title: "Instant Categorization",
      description: "Skip the manual work. Your clothes are automatically sorted by season, occasion, color, and style the moment you add them."
    },
    {
      icon: "👔",
      title: "Personalized Outfits", 
      description: "Daily outfit suggestions tailored to your style, schedule, and mood. No more morning wardrobe paralysis."
    },
    {
      icon: "🌤️",
      title: "Weather Integration",
      description: "Get outfit recommendations that match the forecast. Rain or shine, you'll always be appropriately dressed."
    },
    {
      icon: "📊",
      title: "Style Analytics & Sustainability",
      description: "Track what you wear most, identify gaps in your wardrobe, and make eco-conscious shopping decisions."
    },
    {
      icon: "💡",
      title: "Forgotten Item Alerts",
      description: "Rediscover clothes you forgot you owned. Get gentle reminders to wear pieces that haven't seen daylight."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white scroll-mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
} 