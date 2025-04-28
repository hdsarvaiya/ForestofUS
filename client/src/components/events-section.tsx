import { upcomingEvents } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import WavyDivider from "./wavy-divider";

const EventsSection = () => {
  const { ref } = useReveal();
  const featuredEvent = upcomingEvents.find(event => event.isFeatured);
  const otherEvents = upcomingEvents.filter(event => !event.isFeatured);

  return (
    <section id="events" className="py-20 bg-forest-primary text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={ref} className="reveal">
              <h2 className="font-playfair text-4xl font-bold mb-6">
                Upcoming <span className="text-soft-yellow">Events</span>
              </h2>
              
              {featuredEvent && (
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm mb-6">
                  <span className="inline-block bg-soft-yellow text-forest-dark font-medium text-sm px-3 py-1 rounded-full mb-3">
                    Featured Event
                  </span>
                  <h3 className="font-playfair text-2xl font-bold mb-2">{featuredEvent.title}</h3>
                  <p className="mb-4 text-gray-100">{featuredEvent.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="far fa-clock mr-2"></i>
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <a href="#" className="inline-block bg-soft-yellow hover:bg-white text-forest-dark font-medium py-2 px-4 rounded-full transition transform hover:scale-105">
                    Register Now
                  </a>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                {otherEvents.map(event => (
                  <div 
                    key={event.id}
                    className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-filter backdrop-blur-sm flex-1 min-w-[250px]"
                  >
                    <h4 className="font-playfair text-lg font-bold mb-1">{event.title}</h4>
                    <div className="flex items-center text-sm mb-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{event.date}</span>
                    </div>
                    <a href="#" className="text-soft-yellow hover:underline text-sm">Learn more →</a>
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={ref} className="relative h-96 md:h-auto rounded-lg overflow-hidden reveal">
              <img 
                src='https://marketing-cdn.tickettailor.com/ZgP1j7LRO5ile62O_HowdoyouhostasmallcommunityeventA10-stepguide%2CMiniflagsattheevent.jpg' 
                alt="Event Photo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <a href="#" className="flex items-center text-white hover:text-soft-yellow transition">
                  <span className="mr-2">View all events</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default EventsSection;
