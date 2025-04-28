import { ReactNode, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./back-to-top";
import Loader from "./loader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Set up reveal animations on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
