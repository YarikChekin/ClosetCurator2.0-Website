import { render, screen } from '@testing-library/react';
import FeaturesSection from '../FeaturesSection';

describe('FeaturesSection', () => {
  it('renders the main section heading', () => {
    render(<FeaturesSection />);
    expect(screen.getByRole('heading', { level: 2, name: /powerful features that transform your style/i })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/from ai-powered organization to sustainable shopping insights/i)).toBeInTheDocument();
  });

  it('renders all 6 feature cards', () => {
    render(<FeaturesSection />);
    
    // Check for all feature titles
    expect(screen.getByText('Smart Photo Capture')).toBeInTheDocument();
    expect(screen.getByText('AI Organization')).toBeInTheDocument();
    expect(screen.getByText('Outfit Suggestions')).toBeInTheDocument();
    expect(screen.getByText('Weather Integration')).toBeInTheDocument();
    expect(screen.getByText('Style Analytics & Sustainability')).toBeInTheDocument();
    expect(screen.getByText('Smart Reminders')).toBeInTheDocument();
  });

  it('includes sustainability messaging in style analytics', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/make smarter purchasing decisions, reduce waste/i)).toBeInTheDocument();
  });

  it('renders feature icons', () => {
    render(<FeaturesSection />);
    
    // Check for emoji icons
    expect(screen.getByText('📸')).toBeInTheDocument();
    expect(screen.getByText('🤖')).toBeInTheDocument();
    expect(screen.getByText('👔')).toBeInTheDocument();
    expect(screen.getByText('🌤️')).toBeInTheDocument();
    expect(screen.getByText('📊')).toBeInTheDocument();
    expect(screen.getByText('💡')).toBeInTheDocument();
  });

  it('renders the bottom CTA section', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/ready to revolutionize your wardrobe/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start your style journey/i })).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    render(<FeaturesSection />);
    
    // Main heading should be h2
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
    
    // Feature titles should be h3 (rendered by FeatureCard)
    const featureHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(featureHeadings).toHaveLength(6);
  });
}); 