'use client';
import { useState, useEffect } from 'react';

const themes = [
  { id: 'default', name: 'Modern Minimalist', class: '' },
  { id: 'warm', name: 'Warm & Playful', class: 'theme-warm' },
  { id: 'fashion', name: 'Fashion Magazine', class: 'theme-fashion' },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-warm', 'theme-fashion');
    
    // Add current theme class if not default
    if (themes[currentTheme].class) {
      document.body.classList.add(themes[currentTheme].class);
    }
  }, [currentTheme]);

  const nextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-primary/20">
      <div className="text-sm font-medium text-accent mb-2">
        Theme A/B Testing
      </div>
      <button
        onClick={nextTheme}
        className="bg-cta text-white px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-150 w-full"
      >
        {themes[currentTheme].name}
        <div className="text-xs opacity-80 mt-1">
          Click to switch ({currentTheme + 1}/{themes.length})
        </div>
      </button>
    </div>
  );
} 