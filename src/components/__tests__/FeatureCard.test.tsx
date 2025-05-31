import { render, screen } from '@testing-library/react';
import FeatureCard from '../FeatureCard';

describe('FeatureCard', () => {
  const mockProps = {
    icon: "📸",
    title: "Test Feature",
    description: "This is a test description for the feature card component."
  };

  it('renders the feature card with all props', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText(mockProps.icon)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('renders the icon in a styled container', () => {
    render(<FeatureCard {...mockProps} />);
    
    // Get the actual icon container (the inner div with styling)
    const iconElement = screen.getByText(mockProps.icon);
    expect(iconElement).toHaveClass('w-12', 'h-12', 'bg-primary/10');
  });

  it('renders the title as an h3 heading', () => {
    render(<FeatureCard {...mockProps} />);
    
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(mockProps.title);
  });

  it('applies correct styling classes', () => {
    render(<FeatureCard {...mockProps} />);
    
    // The motion.div should have the card styling
    const cardElement = screen.getByText(mockProps.title).closest('div');
    expect(cardElement).toHaveClass('bg-white', 'rounded-2xl', 'shadow-sm');
  });

  it('handles different delay prop values', () => {
    render(<FeatureCard {...mockProps} delay={0.5} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });
}); 