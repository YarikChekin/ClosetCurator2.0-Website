import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders the main headline and subheadline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /your wardrobe, beautifully organized/i })).toBeInTheDocument();
    expect(screen.getByText(/transform chaos into style with ai-powered wardrobe management/i)).toBeInTheDocument();
  });

  it('renders a visible CTA button', () => {
    render(<Hero />);
    const cta = screen.getByRole('button', { name: /get early access/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAccessibleName('Get Early Access');
  });

  it('has accessible buttons and content', () => {
    render(<Hero />);
    const getStartedButton = screen.getByRole('button', { name: /get early access/i });
    const watchDemoButton = screen.getByRole('button', { name: /watch demo/i });
    
    expect(getStartedButton).toBeInTheDocument();
    expect(watchDemoButton).toBeInTheDocument();
  });

  it('includes animation classes or Framer Motion', () => {
    render(<Hero />);
    // Check for a motion div or animation class
    const animated = screen.getByTestId('hero-motion');
    expect(animated).toBeInTheDocument();
  });
}); 