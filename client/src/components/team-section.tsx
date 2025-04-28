import { teamMembers } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const { ref } = useReveal();

  return (
    <section id="team" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
              Meet Our <span className="text-forest-primary">Team</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals who drive Forrest of Us forward, each dedicated to making our community thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                ref={ref}
                className="bg-white rounded-lg shadow-md overflow-hidden card reveal" 
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-1">{member.name}</h3>
                  <p className="font-poppins text-forest-primary mb-3">{member.role}</p>
                  <p className="font-poppins text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-600 hover:text-forest-primary transition">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-600 hover:text-forest-primary transition">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-forest-primary transition">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.social.spotify && (
                      <a href={member.social.spotify} className="text-gray-600 hover:text-forest-primary transition">
                        <i className="fab fa-spotify"></i>
                      </a>
                    )}
                    {member.social.email && (
                      <a href={member.social.email} className="text-gray-600 hover:text-forest-primary transition">
                        <i className="fas fa-envelope"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={ref} className="text-center mt-10 reveal">
            <Button 
              variant="outline"
              className="transform hover:scale-105"
            >
              Meet the Full Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
