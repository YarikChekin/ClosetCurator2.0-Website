import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-accent" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Closet Curator</h3>
            <p className="text-accent/80">
              Transform your wardrobe with AI-powered style management.
            </p>
          </div>
          
          {/* Links section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/privacy" 
                className="text-accent/80 hover:text-accent transition-colors duration-150"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-accent/80 hover:text-accent transition-colors duration-150"
              >
                Terms
              </Link>
              <Link 
                href="/contact" 
                className="text-accent/80 hover:text-accent transition-colors duration-150"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <p className="text-accent/80">
              Questions? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-accent/60">
            © 2025 Closet Curator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 