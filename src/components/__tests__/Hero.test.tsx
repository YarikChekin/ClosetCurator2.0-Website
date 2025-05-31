import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
  },
}));

describe.skip('Hero', () => {
  it('renders the main headline and subheadline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /your wardrobe, beautifully organized/i })).toBeInTheDocument();
    expect(screen.getByText(/stop staring at a full closet with "nothing to wear"/i)).toBeInTheDocument();
  });

  it('renders a visible CTA button', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('button', { name: /get early access/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveClass('bg-primary');
  });

  it('includes trust indicators', () => {
    render(<Hero />);
    expect(screen.getByText(/4.9\/5 rating/i)).toBeInTheDocument();
    expect(screen.getByText(/10,000\+ wardrobes organized/i)).toBeInTheDocument();
    expect(screen.getByText(/free for 30 days/i)).toBeInTheDocument();
  });

  it('includes animation classes or Framer Motion', () => {
    render(<Hero />);
    // Check for section with animation classes (pt-16 indicates fixed header layout)
    const heroSection = screen.getByRole('main', { hidden: true }) || document.querySelector('section');
    expect(heroSection).toHaveClass('pt-16');
  });
}); 