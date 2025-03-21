
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                PostEngage
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Amplify your team's social media presence with pre-approved content and engagement tracking.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary text-sm">About</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-500 hover:text-primary text-sm">Dashboard</Link>
              </li>
              <li>
                <Link to="/posts" className="text-gray-500 hover:text-primary text-sm">Posts</Link>
              </li>
              <li>
                <Link to="/metrics" className="text-gray-500 hover:text-primary text-sm">Metrics</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">API</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary text-sm">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} PostEngage. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-400">
              Designed with precision. Built with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
