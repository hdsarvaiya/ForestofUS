import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";
import TreeLogo from "@/assets/tree-logo";

const Footer = () => {
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter form submission
  };

  return (
    <footer className="bg-forest-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1 */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-white">
                  <TreeLogo />
                </div>
                <span className="font-playfair text-2xl font-bold">Forrest of Us</span>
              </div>
              <p className="font-poppins text-gray-300 mb-6">
                A vibrant community-driven initiative dedicated to nurturing well-being, spreading positivity, and creating meaningful social impact.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-playfair text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" onClick={handleNavClick("about")} className="text-gray-300 hover:text-white transition">About Us</a></li>
                <li><a href="#events" onClick={handleNavClick("events")} className="text-gray-300 hover:text-white transition">Events</a></li>
                <li><a href="#blog" onClick={handleNavClick("blog")} className="text-gray-300 hover:text-white transition">Blog</a></li>
                <li><a href="#airbnb" onClick={handleNavClick("airbnb")} className="text-gray-300 hover:text-white transition">Stay with Us</a></li>
                <li><a href="#team" onClick={handleNavClick("team")} className="text-gray-300 hover:text-white transition">Our Team</a></li>
                <li><a href="#contact" onClick={handleNavClick("contact")} className="text-gray-300 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="font-playfair text-xl font-bold mb-6">Get Involved</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition">Volunteer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Donate</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Jamming Circle</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Teaching Program</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Book a Stay</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Partner with Us</a></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h3 className="font-playfair text-xl font-bold mb-6">Newsletter</h3>
              <p className="font-poppins text-gray-300 mb-4">
                Subscribe to receive updates on our community activities and events.
              </p>
              <form className="mb-4" onSubmit={handleSubmit}>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white bg-opacity-10 text-white placeholder-gray-400 border-0 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-soft-yellow flex-grow"
                  />
                  <button 
                    type="submit" 
                    className="bg-soft-yellow hover:bg-white text-forest-dark font-medium py-2 px-4 rounded-r-lg transition"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <p className="font-poppins text-gray-300 text-sm">
                By subscribing, you agree to our Privacy Policy and provide consent to receive updates from us.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-poppins text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Forrest of Us. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="font-poppins text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
                <a href="#" className="font-poppins text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
                <a href="#" className="font-poppins text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
