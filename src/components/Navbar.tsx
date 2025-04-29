
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className={cn(
            "text-2xl font-bold transition-colors",
            scrolled ? "text-electric-blue" : "text-white"
          )}>
            שלום חשמל
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 rtl:space-x-reverse">
          <NavItem onClick={() => scrollToSection('hero')} scrolled={scrolled}>בית</NavItem>
          <NavItem onClick={() => scrollToSection('about')} scrolled={scrolled}>אודות</NavItem>
          <NavItem onClick={() => scrollToSection('services')} scrolled={scrolled}>שירותים</NavItem>
          <NavItem onClick={() => scrollToSection('gallery')} scrolled={scrolled}>גלריה</NavItem>
          <NavItem onClick={() => scrollToSection('contact')} scrolled={scrolled}>צור קשר</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            "space-y-2 transition-colors",
            scrolled ? "text-electric-dark" : "text-white"
          )}>
            <span className={`block w-8 h-0.5 ${scrolled ? "bg-electric-dark" : "bg-white"}`}></span>
            <span className={`block w-8 h-0.5 ${scrolled ? "bg-electric-dark" : "bg-white"}`}></span>
            <span className={`block w-8 h-0.5 ${scrolled ? "bg-electric-dark" : "bg-white"}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <MobileNavItem onClick={() => scrollToSection('hero')}>בית</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('about')}>אודות</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('services')}>שירותים</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('gallery')}>גלריה</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('contact')}>צור קשר</MobileNavItem>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ 
  children, 
  onClick, 
  scrolled 
}: { 
  children: React.ReactNode, 
  onClick: () => void, 
  scrolled: boolean 
}) => {
  return (
    <button 
      className={cn(
        "px-4 py-2 font-medium hover:opacity-75 transition-colors",
        scrolled ? "text-electric-dark" : "text-white"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const MobileNavItem = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode, 
  onClick: () => void 
}) => {
  return (
    <button 
      className="block w-full text-right py-2 text-electric-dark font-medium hover:text-electric-blue"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Navbar;
