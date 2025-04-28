import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import WavyDivider from "@/components/wavy-divider";
import { initiatives as mockInitiatives } from "@/lib/utils";
import { Initiative } from "@shared/schema";

const InitiativesPage = () => {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  // Fetch initiatives from API
  const { data: initiatives, isLoading, error } = useQuery({
    queryKey: ["/api/initiatives"],
    refetchOnWindowFocus: false,
  });

  const handleLearnMore = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative bg-forest-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                Our Initiatives
              </h1>
              <p className="font-poppins text-xl text-gray-200 mb-10">
                Discover the impactful projects and programs we're leading to create
                a more sustainable and connected community.
              </p>
              <Button asChild size="lg">
                <a href="#initiatives">Explore Our Initiatives</a>
              </Button>
            </div>
          </div>
          <WavyDivider position="bottom" color="cream" waveStyle="wave-1" />
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
                Our Key Initiatives
              </h2>
              <p className="font-poppins text-gray-600 max-w-3xl mx-auto">
                We're dedicated to creating positive change through these ongoing initiatives.
                Learn more about each one and how you can get involved.
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-forest-primary"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">Error loading initiatives. Please try again later.</p>
                {/* Show the mock data when there's an error fetching from API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {mockInitiatives.map((initiative, index) => (
                    <InitiativeCard 
                      key={index}
                      initiative={{
                        id: index + 1,
                        title: initiative.title,
                        description: initiative.description,
                        image: initiative.image,
                        active: true,
                        createdAt: new Date().toISOString()
                      }}
                      onLearnMore={handleLearnMore}
                    />
                  ))}
                </div>
              </div>
            ) : initiatives && initiatives.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initiatives.map((initiative: Initiative) => (
                  <InitiativeCard 
                    key={initiative.id}
                    initiative={initiative}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No initiatives found.</p>
                {/* Show the mock data when there are no initiatives from API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {mockInitiatives.map((initiative, index) => (
                    <InitiativeCard 
                      key={index}
                      initiative={{
                        id: index + 1,
                        title: initiative.title,
                        description: initiative.description,
                        image: initiative.image,
                        active: true,
                        createdAt: new Date().toISOString()
                      }}
                      onLearnMore={handleLearnMore}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-cream relative">
          <WavyDivider position="top" color="forest-light" waveStyle="wave-3" />
          <div className="container mx-auto px-4 py-14 bg-forest-light bg-opacity-30 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
                Our Impact
              </h2>
              <p className="font-poppins text-gray-600 max-w-3xl mx-auto">
                Through our initiatives, we've created tangible positive change in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Impact Card 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-soft-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tree text-2xl text-forest-dark"></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-2">10,000+</h3>
                <p className="font-poppins text-gray-600">Trees planted across 15 different sites</p>
              </div>
              
              {/* Impact Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-soft-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-forest-dark"></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-2">5,000+</h3>
                <p className="font-poppins text-gray-600">Community members engaged in our programs</p>
              </div>
              
              {/* Impact Card 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-soft-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-recycle text-2xl text-forest-dark"></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-2">2 Tons</h3>
                <p className="font-poppins text-gray-600">Of waste diverted from landfills through recycling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Initiative Detail Dialog */}
        <Dialog open={!!selectedInitiative} onOpenChange={open => !open && setSelectedInitiative(null)}>
          <DialogContent className="sm:max-w-[650px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-playfair">
                {selectedInitiative?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedInitiative && (
              <div>
                <div className="h-64 overflow-hidden rounded-md mb-6">
                  <img 
                    src={selectedInitiative.image || "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"}
                    alt={selectedInitiative.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">{selectedInitiative.description}</p>
                  
                  <h4 className="font-playfair text-lg font-bold text-forest-dark">How You Can Get Involved</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Volunteer for our next community event</li>
                    <li>Donate to support this initiative</li>
                    <li>Spread awareness on social media</li>
                    <li>Apply your skills as a specialized volunteer</li>
                  </ul>
                </div>
              
                <DialogFooter className="mt-6">
                  <Button onClick={() => setSelectedInitiative(null)}>Close</Button>
                  
                  <Button variant="outline">
                    <a 
                      href="/contact" 
                      className="flex items-center"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      <span>Contact Us</span>
                    </a>
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Layout>
    </motion.div>
  );
};

interface InitiativeCardProps {
  initiative: Initiative;
  onLearnMore: (initiative: Initiative) => void;
}

const InitiativeCard = ({ initiative, onLearnMore }: InitiativeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={initiative.image || "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"} 
          alt={initiative.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="font-playfair text-xl text-forest-dark">{initiative.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded text-xs mr-2 ${initiative.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {initiative.active ? 'Active Initiative' : 'Coming Soon'}
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{initiative.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-end border-t pt-4">
        <Button 
          onClick={() => onLearnMore(initiative)}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InitiativesPage;