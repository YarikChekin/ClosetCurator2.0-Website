import { render, screen } from '@testing-library/react';
import ProblemSection from '../ProblemSection';

describe('ProblemSection', () => {
  it('renders the main section heading', () => {
    render(<ProblemSection />);
    expect(screen.getByRole('heading', { level: 2, name: /sound familiar/i })).toBeInTheDocument();
  });

  it('renders all problem cards with emojis', () => {
    render(<ProblemSection />);
    
    // Check for problem cards
    expect(screen.getByText(/i have nothing to wear/i)).toBeInTheDocument();
    expect(screen.getByText(/stressful mornings/i)).toBeInTheDocument();
    expect(screen.getByText(/impulse purchases/i)).toBeInTheDocument();
  });

  it('displays all statistics', () => {
    render(<ProblemSection />);
    
    // Check for statistics
    expect(screen.getByText('70%')).toBeInTheDocument();
    expect(screen.getByText('18 min')).toBeInTheDocument();
    expect(screen.getByText('$1,800')).toBeInTheDocument();
  });

  it('includes the transition to solution', () => {
    render(<ProblemSection />);
    expect(screen.getByText(/what if there was a better way/i)).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    render(<ProblemSection />);
    
    // Should have proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toBeInTheDocument();
    
    // Should have section structure
    expect(screen.getByRole('heading', { level: 3, name: /the hidden cost/i })).toBeInTheDocument();
  });
}); 