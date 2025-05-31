import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <header {...props}>{children}</header>,
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <button {...props}>{children}</button>,
  },
}));

describe.skip('Header', () => {
  it('renders the Closet Curator logo/title', () => {
    render(<Header />);
    const logo = screen.getByText(/closet curator/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    // Check for main navigation links
    const problemLink = screen.getByRole('link', { name: /the problem/i });
    const howItWorksLink = screen.getByRole('link', { name: /how it works/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    const getEarlyAccessButton = screen.getByRole('button', { name: /get early access/i });
    
    expect(problemLink).toBeInTheDocument();
    expect(howItWorksLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(getEarlyAccessButton).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<Header />);
    
    const problemLink = screen.getByRole('link', { name: /the problem/i });
    const howItWorksLink = screen.getByRole('link', { name: /how it works/i });
    const featuresLink = screen.getByRole('link', { name: /features/i });
    
    expect(problemLink).toHaveAttribute('href', '#the-problem');
    expect(howItWorksLink).toHaveAttribute('href', '#how-it-works');
    expect(featuresLink).toHaveAttribute('href', '#features');
  });

  it('applies correct styling classes for current design system', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    // Should have gradient background classes instead of old bg-secondary
    expect(header).toHaveClass('bg-gradient-to-r');
    expect(header).toHaveClass('backdrop-blur-sm');
  });
}); 