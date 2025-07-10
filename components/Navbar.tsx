import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#1A1F36]/80 backdrop-blur-lg border-b border-gray-800/50">
        <nav className="container mx-auto max-w-6xl px-8 py-4 flex justify-between items-center">
          <a href="#home" onClick={handleLinkClick} className="text-xl font-bold text-white hover:text-[#FF7A00] transition-colors">
            Vedant Kandge
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-[#00BFA5] hover:text-[#FF7A00] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white z-50 relative"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1A1F36]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className="text-3xl font-semibold text-[#00BFA5] hover:text-[#FF7A00] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;