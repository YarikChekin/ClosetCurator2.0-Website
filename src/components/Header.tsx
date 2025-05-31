import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary/2 via-white to-primary-light/2 backdrop-blur-sm border-b border-primary/5" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Closet Curator
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-accent hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-accent hover:text-primary transition-colors duration-200"
            >
              How it works
            </Link>
            <Link 
              href="#features" 
              className="text-accent hover:text-primary transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              href="/auth" 
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Get Started
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-accent hover:text-primary p-2"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 