'use client';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const stats = [
    {
      number: "70%",
      label: "of clothes in your closet are rarely worn"
    },
    {
      number: "18 min",
      label: "average time spent choosing an outfit daily"
    },
    {
      number: "$1,800",
      label: "worth of unworn clothes in the average closet"
    }
  ];

  return (
    <section id="the-problem" className="py-20 lg:py-32 bg-muted scroll-mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The wardrobe struggle is real
          </h2>
          <p className="text-xl text-accent-light max-w-3xl mx-auto">
            Most people own more clothes than ever, yet feel like they have nothing to wear. 
            The problem isn&apos;t your closet—it&apos;s the chaos.
          </p>
        </motion.div>

        {/* Problem Scenarios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-accent">
              🤔 &quot;I have nothing to wear!&quot;
            </h3>
            <p className="text-accent-light">
              Standing in front of a full closet, feeling overwhelmed by choices 
              but unable to put together an outfit you love.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-accent">
              😫 Stressful mornings
            </h3>
            <p className="text-accent-light">
              Rushing to get dressed, trying on multiple outfits, 
              and still feeling unsure about your final choice.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-accent">
              💸 Wasteful purchases
            </h3>
            <p className="text-accent-light">
              Buying new clothes because you forgot what you already own, 
              leading to duplicates and unworn items.
            </p>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/10 to-primary-light/5 p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">The numbers don&apos;t lie</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-accent-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 