import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    render(<Footer />);
    const copyright = screen.getByText(/© 2025 closet curator/i);
    expect(copyright).toBeInTheDocument();
  });

  it('renders footer navigation links', () => {
    render(<Footer />);
    
    // Check for footer links
    const privacyLink = screen.getByRole('link', { name: /privacy/i });
    const termsLink = screen.getByRole('link', { name: /terms/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('has correct href attributes for footer links', () => {
    render(<Footer />);
    
    const privacyLink = screen.getByRole('link', { name: /privacy/i });
    const termsLink = screen.getByRole('link', { name: /terms/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(privacyLink).toHaveAttribute('href', '/privacy');
    expect(termsLink).toHaveAttribute('href', '/terms');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('applies correct styling classes for design system', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    
    // Should have proper background color from design system
    expect(footer).toHaveClass('bg-secondary');
  });
}); 