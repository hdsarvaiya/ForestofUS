import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import TreeLogo from "@/assets/tree-logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Function to check if a path is active
  const isActive = (path: string) => {
    return location === path || location.startsWith(path);
  };

  return (
    <nav className={cn(
      "bg-white bg-opacity-95 backdrop-blur-sm shadow-md fixed w-full z-50 transition-all duration-300",
      isScrolled ? "py-2" : "py-3"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-2 overflow-hidden">
              <TreeLogo />
            </div>
            <span className="font-playfair text-2xl font-bold text-forest-primary">Forrest of Us</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <a href="#about" onClick={handleNavClick("about")} className="nav-link font-poppins text-gray-700 hover:text-forest-primary transition">About</a>
                <a href="#events" onClick={handleNavClick("events")} className="nav-link font-poppins text-gray-700 hover:text-forest-primary transition">Events</a>
                <Link href="/events" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/events") ? "text-forest-primary font-medium" : "text-gray-700")}>All Events</Link>
                <Link href="/blog" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/blog") ? "text-forest-primary font-medium" : "text-gray-700")}>Blog</Link>
                <div className="dropdown relative group">
                  <Link href="/initiatives" className={cn("nav-link font-poppins hover:text-forest-primary transition flex items-center", isActive("/initiatives") ? "text-forest-primary font-medium" : "text-gray-700")}>
                    Initiatives
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-3 hidden group-hover:block min-w-[200px] z-10">
                    <Link href="/initiatives#education" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Education</Link>
                    <Link href="/initiatives#social" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Social Activities</Link>
                    <Link href="/initiatives#conservation" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Conservation</Link>
                  </div>
                </div>
                <Link href="/team" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/team") ? "text-forest-primary font-medium" : "text-gray-700")}>Team</Link>
                <a href="#contact" onClick={handleNavClick("contact")} className="nav-link font-poppins text-gray-700 hover:text-forest-primary transition">Contact</a>
              </>
            ) : (
              <>
                <Link href="/#about" className="nav-link font-poppins text-gray-700 hover:text-forest-primary transition">About</Link>
                <Link href="/events" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/events") ? "text-forest-primary font-medium" : "text-gray-700")}>Events</Link>
                <Link href="/blog" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/blog") ? "text-forest-primary font-medium" : "text-gray-700")}>Blog</Link>
                <div className="dropdown relative group">
                  <Link href="/initiatives" className={cn("nav-link font-poppins hover:text-forest-primary transition flex items-center", isActive("/initiatives") ? "text-forest-primary font-medium" : "text-gray-700")}>
                    Initiatives
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-3 hidden group-hover:block min-w-[200px] z-10">
                    <Link href="/initiatives#education" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Education</Link>
                    <Link href="/initiatives#social" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Social Activities</Link>
                    <Link href="/initiatives#conservation" className="block py-2 px-3 hover:bg-gray-100 rounded-md">Conservation</Link>
                  </div>
                </div>
                <Link href="/team" className={cn("nav-link font-poppins hover:text-forest-primary transition", isActive("/team") ? "text-forest-primary font-medium" : "text-gray-700")}>Team</Link>
                <Link href="/#contact" className="nav-link font-poppins text-gray-700 hover:text-forest-primary transition">Contact</Link>
              </>
            )}
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/register">Join Us</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-gray-700 hover:text-forest-primary p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-2 py-3 space-y-2 mt-1">
            {isHomePage ? (
              <>
                <a href="#about" onClick={handleNavClick("about")} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-forest-primary hover:bg-gray-50">About</a>
                <a href="#events" onClick={handleNavClick("events")} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-forest-primary hover:bg-gray-50">Events</a>
                <Link href="/events" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/events") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>All Events</Link>
                <Link href="/blog" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/blog") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Blog</Link>
                <Link href="/initiatives" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/initiatives") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Initiatives</Link>
                <Link href="/team" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/team") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Team</Link>
                <a href="#contact" onClick={handleNavClick("contact")} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-forest-primary hover:bg-gray-50">Contact</a>
              </>
            ) : (
              <>
                <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-forest-primary hover:bg-gray-50">About</Link>
                <Link href="/events" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/events") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Events</Link>
                <Link href="/blog" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/blog") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Blog</Link>
                <Link href="/initiatives" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/initiatives") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Initiatives</Link>
                <Link href="/team" className={cn("block px-3 py-2 rounded-md text-base font-medium hover:text-forest-primary hover:bg-gray-50", isActive("/team") ? "text-forest-primary bg-gray-50" : "text-gray-700")}>Team</Link>
                <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-forest-primary hover:bg-gray-50">Contact</Link>
              </>
            )}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login" className="block w-full px-3 py-2 border border-forest-primary text-forest-primary rounded-md text-base font-medium text-center">Login</Link>
              <Link href="/register" className="block w-full px-3 py-2 bg-forest-primary text-white rounded-md text-base font-medium text-center">Join Us</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
