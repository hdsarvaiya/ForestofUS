import { Button } from "@/components/ui/button";
import { forestImages, scrollToSection } from "@/lib/utils";
import FlyingLeaves from "./flying-leaves";
import WavyDivider from "./wavy-divider";

const HeroSection = () => {
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section 
      className="relative h-screen flex items-center"
      style={{ 
        backgroundImage: `url(${forestImages.hero})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <FlyingLeaves />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Growing a Community of <span className="text-soft-yellow">Change Makers</span>
          </h1>
          <p className="font-poppins text-xl text-white mb-8">
            A vibrant community-driven initiative nurturing well-being, spreading positivity, and creating meaningful social impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              onClick={handleClick("join")}
              className="transform hover:scale-105"
            >
              Join Our Community
            </Button>
            <Button 
              variant="outlineWhite" 
              size="lg" 
              onClick={handleClick("about")}
              className="transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <WavyDivider 
        position="bottom" 
        color="#f7f3e9" 
        waveStyle="wave-1"
      />
    </section>
  );
};

export default HeroSection;
