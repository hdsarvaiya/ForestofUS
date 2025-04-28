import { initiatives } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const AboutSection = () => {
  const { ref } = useReveal();
  
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
              About Our <span className="text-forest-primary">Community</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
              At its heart, Forrest of Us is more than just a community – it's a family. 
              Rooted in empathy, creativity, and compassion, we bring people together through various initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={initiative.id}
                ref={ref} 
                className="bg-white rounded-lg shadow-md overflow-hidden card reveal" 
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={initiative.image ||"https://marketing-cdn.tickettailor.com/ZgP1j7LRO5ile62O_HowdoyouhostasmallcommunityeventA10-stepguide%2CMiniflagsattheevent.jpg?auto=format,compress"} 
                    alt={initiative.title} 
                    className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-2">{initiative.title}</h3>
                  <p className="font-poppins text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
