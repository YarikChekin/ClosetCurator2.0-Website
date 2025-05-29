import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the Closet Curator logo/title', () => {
    render(<Header />);
    const logo = screen.getByText(/closet curator/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    // Check for main navigation links
    const homeLink = screen.getByRole('link', { name: /home/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    const signInLink = screen.getByRole('link', { name: /sign in/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    const signInLink = screen.getByRole('link', { name: /sign in/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(featuresLink).toHaveAttribute('href', '#features');
    expect(signInLink).toHaveAttribute('href', '/auth');
  });

  it('applies correct styling classes for design system', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    // Should have proper background and spacing classes
    expect(header).toHaveClass('bg-accent');
  });
}); 