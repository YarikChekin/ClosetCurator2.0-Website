'use client';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-5 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-primary/15 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-accent mb-2">
        {title}
      </h3>
      <p className="text-accent-light leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
} 