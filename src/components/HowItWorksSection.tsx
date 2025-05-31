'use client';
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Capture Your Wardrobe", 
      description: "Simply photograph your clothes as you add them to the app. Our AI automatically identifies colors, patterns, brands, and clothing types.",
      icon: "📱"
    },
    {
      step: "02", 
      title: "Smart Organization",
      description: "Watch as your wardrobe gets intelligently categorized. Items are sorted by type, color, season, and style without any manual tagging.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Get Personalized Outfits",
      description: "Receive daily outfit suggestions based on weather, your calendar, and personal style preferences. See exactly what to wear and where to find it.",
      icon: "✨"
    },
    {
      step: "04",
      title: "Track & Optimize", 
      description: "Monitor what you wear most, discover forgotten pieces, and get insights to make smarter shopping decisions while reducing waste.",
      icon: "📊"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-primary-light/10 scroll-mt-2">
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
            How it works
          </h2>
          <p className="text-xl text-accent-light max-w-3xl mx-auto">
            Transform your wardrobe chaos into organized style with our simple 4-step process. 
            No manual tagging, no complicated setup—just smart technology working for you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <span className="text-6xl mr-4">{step.icon}</span>
                  <div className="text-6xl lg:text-7xl font-bold text-primary/20">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-accent-light leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-60 bg-white rounded-2xl shadow-lg border border-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <div className="text-sm text-accent-light">
                      {step.title} Preview
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 