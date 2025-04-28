import { forestImages } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import WavyDivider from "./wavy-divider";
import { Button } from "@/components/ui/button";

const AirbnbSection = () => {
  const { ref } = useReveal();

  return (
    <section id="airbnb" className="py-20 bg-forest-light relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={ref} className="order-2 lg:order-1 reveal">
              <h2 className="font-playfair text-4xl font-bold text-white mb-4">
                Stay with <span className="text-soft-yellow">Us</span>
              </h2>
              <p className="font-poppins text-white text-lg mb-6">
                Experience our beautiful, cozy Airbnb nestled amidst nature and built with love. 
                Your stay directly supports our community initiatives and social causes.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm mb-6">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">What we offer:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-soft-yellow mt-1 mr-3"></i>
                    <span>A serene getaway experience surrounded by nature</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-users text-soft-yellow mt-1 mr-3"></i>
                    <span>Opportunities to interact with our community</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-music text-soft-yellow mt-1 mr-3"></i>
                    <span>Access to events and jamming sessions during your stay</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-heart text-soft-yellow mt-1 mr-3"></i>
                    <span>The satisfaction of supporting social causes</span>
                  </li>
                </ul>
                <Button 
                  variant="accent"
                  className="transform hover:scale-105"
                >
                  Book Your Stay
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Guest" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Guest" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Guest" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <i className="fas fa-star text-soft-yellow"></i>
                    <i className="fas fa-star text-soft-yellow"></i>
                    <i className="fas fa-star text-soft-yellow"></i>
                    <i className="fas fa-star text-soft-yellow"></i>
                    <i className="fas fa-star text-soft-yellow"></i>
                  </div>
                  <p className="text-white text-sm">Over 50 five-star reviews on Airbnb</p>
                </div>
              </div>
            </div>
            
            <div ref={ref} className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full reveal">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48">
                  <img 
                    src={forestImages.cabin1} 
                    alt="Airbnb Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <img 
                    src={forestImages.cabin2} 
                    alt="Airbnb Exterior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-lg overflow-hidden h-64">
                  <img 
                    src={forestImages.cabin3} 
                    alt="Airbnb Bedroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48">
                  <img 
                    src={forestImages.cabin4} 
                    alt="Airbnb View" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    <WavyDivider 
      position="bottom" 
      color="#f7f3e9" 
      waveStyle="wave-1"
    />    </section>
  );
};

export default AirbnbSection;
