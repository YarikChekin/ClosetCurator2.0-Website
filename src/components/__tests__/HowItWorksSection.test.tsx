import { render, screen } from '@testing-library/react';
import HowItWorksSection from '../HowItWorksSection';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
  },
}));

// Mock IntersectionObserver for Framer Motion
beforeAll(() => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe.skip('HowItWorksSection', () => {
  it('renders the section title and description', () => {
    render(<HowItWorksSection />);
    
    expect(screen.getByRole('heading', { level: 2, name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByText(/transform your wardrobe chaos into organized style/i)).toBeInTheDocument();
  });

  it('renders all four steps', () => {
    render(<HowItWorksSection />);
    
    // Check for step titles
    expect(screen.getByText(/capture your wardrobe/i)).toBeInTheDocument();
    expect(screen.getByText(/smart organization/i)).toBeInTheDocument();
    expect(screen.getByText(/get personalized outfits/i)).toBeInTheDocument();
    expect(screen.getByText(/track & optimize/i)).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorksSection />);
    
    expect(screen.getByText(/simply photograph your clothes/i)).toBeInTheDocument();
    expect(screen.getByText(/watch as your wardrobe gets intelligently categorized/i)).toBeInTheDocument();
    expect(screen.getByText(/receive daily outfit suggestions/i)).toBeInTheDocument();
    expect(screen.getByText(/monitor what you wear most/i)).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HowItWorksSection />);
    
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders the bottom CTA section', () => {
    render(<HowItWorksSection />);
    
    expect(screen.getByText(/ready to get started/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start organizing today/i })).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<HowItWorksSection />);
    
    const section = document.querySelector('#how-it-works');
    expect(section).toBeInTheDocument();
  });
}); 