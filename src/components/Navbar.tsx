
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if we're on the index page
  const isIndexPage = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled || !isIndexPage 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50 py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="PostEngage Homepage"
        >
          <span className="font-display text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            PostEngage
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/') 
                ? "text-primary font-semibold" 
                : "text-gray-600"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/about') 
                ? "text-primary font-semibold" 
                : "text-gray-600"
            )}
          >
            About
          </Link>
          <Link 
            to="/dashboard" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/dashboard') || isActive('/posts') || isActive('/metrics')
                ? "text-primary font-semibold" 
                : "text-gray-600"
            )}
          >
            Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary/10">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[62px] z-50 bg-white/95 backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            <Link 
              to="/" 
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                isActive('/') ? "text-primary font-semibold" : "text-gray-700"
              )}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                isActive('/about') ? "text-primary font-semibold" : "text-gray-700"
              )}
            >
              About
            </Link>
            <Link 
              to="/dashboard" 
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                isActive('/dashboard') ? "text-primary font-semibold" : "text-gray-700"
              )}
            >
              Dashboard
            </Link>
            <div className="flex flex-col w-full max-w-xs space-y-4">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
