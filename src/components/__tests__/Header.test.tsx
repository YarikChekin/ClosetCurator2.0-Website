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
    const howItWorksLink = screen.getByRole('link', { name: /how it works/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    const getStartedLink = screen.getByRole('link', { name: /get started/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(howItWorksLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(getStartedLink).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const howItWorksLink = screen.getByRole('link', { name: /how it works/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    const getStartedLink = screen.getByRole('link', { name: /get started/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(howItWorksLink).toHaveAttribute('href', '#how-it-works');
    expect(featuresLink).toHaveAttribute('href', '#features');
    expect(getStartedLink).toHaveAttribute('href', '/auth');
  });

  it('applies correct styling classes for current design system', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    // Should have gradient background classes instead of old bg-secondary
    expect(header).toHaveClass('bg-gradient-to-r');
    expect(header).toHaveClass('backdrop-blur-sm');
  });
}); 