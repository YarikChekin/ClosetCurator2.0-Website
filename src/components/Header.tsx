import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-accent shadow-sm" role="banner">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-secondary">
              Closet Curator
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-secondary hover:text-primary transition-colors duration-150"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="text-secondary hover:text-primary transition-colors duration-150"
            >
              Features
            </Link>
            <Link 
              href="/auth" 
              className="bg-primary text-accent px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-150"
            >
              Sign In
            </Link>
          </nav>
          
          {/* Mobile menu button - for future implementation */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-secondary hover:text-primary"
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