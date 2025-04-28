import { useReveal } from "@/hooks/use-reveal";

const ContactSection = () => {
  const { ref } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div ref={ref} className="reveal">
              <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
                Get in <span className="text-forest-primary">Touch</span>
              </h2>
              <p className="font-poppins text-lg text-gray-600 mb-8">
                Have questions or want to learn more about Forrest of Us? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-forest-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-forest-dark mb-1">Location</h3>
                    <p className="font-poppins text-gray-600">
                      123 Forest Lane, Green Valley<br />Himachal Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-forest-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-forest-dark mb-1">Email</h3>
                    <p className="font-poppins text-gray-600">hello@forrestofus.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-forest-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-forest-dark mb-1">Phone</h3>
                    <p className="font-poppins text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-playfair text-xl font-bold text-forest-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-forest-primary hover:bg-forest-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-forest-primary hover:bg-forest-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-forest-primary hover:bg-forest-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-forest-primary hover:bg-forest-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div ref={ref} className="reveal">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-forest-primary hover:bg-forest-dark text-white font-medium py-3 px-4 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
