import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import Loader from "@/components/loader";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// Social media display helper
const renderSocialIcons = (index: number) => {
  switch (index) {
    case 0:
      return <FaLinkedin />;
    case 1:
      return <FaTwitter />;
    case 2:
      return <FaEnvelope />;
    default:
      return <FaLinkedin />;
  }
};

// Dummy data for development
const staticTeamMembers = {
  leadership: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Leading our initiatives with over 10 years of environmental conservation experience.",
      socialLinks: ["https://linkedin.com", "https://twitter.com"],
      order: 1
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Bringing strategic vision and operational excellence to our programs.",
      socialLinks: ["https://linkedin.com"],
      order: 2
    }
  ],
  external: [
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Community Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Passionate about connecting communities with nature.",
      socialLinks: ["https://linkedin.com", "https://instagram.com"],
      order: 3
    },
    {
      id: 4,
      name: "David Park",
      role: "Environmental Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Expert in sustainable forestry practices and ecosystem restoration.",
      socialLinks: ["https://linkedin.com"],
      order: 4
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Education Coordinator",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      bio: "Developing environmental education programs for schools and communities.",
      socialLinks: ["https://linkedin.com", "https://twitter.com"],
      order: 5
    }
  ]
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // Fetch team members from API (using static data for now)
  const teamMembers = staticTeamMembers;
  const isLoading = false;
  const error = null;


  // Hide loader after initial loading
  useEffect(() => {
    if (!isLoading) {
      // Add a slight delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoaderVisible(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleViewProfile = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <main className="pt-12 pb-20">
            <section className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-forest-dark mb-6">Our Team</h1>
                <p className="text-gray-600 text-lg">
                  Meet the passionate individuals behind Forrest of Us. Our diverse team brings together expertise in sustainability, community building, and environmental education.
                </p>
              </div>

              {isLoaderVisible ? (
                <div className="flex justify-center items-center min-h-[300px]">
                  <Loader />
                </div>
              ) : error ? (
                <div className="text-center text-red-500">
                  Failed to load team members. Please try again later.
                </div>
              ) : (
                <>
                  {/* Leadership Team */}
                  <div className="mb-20">
                    <h2 className="font-playfair text-3xl font-bold text-forest-dark mb-8 text-center">Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {teamMembers.leadership && teamMembers.leadership.length > 0 && 
                        teamMembers.leadership.map((member: TeamMember) => (
                            <TeamMemberCard 
                              key={member.id} 
                              member={member} 
                              onViewProfile={handleViewProfile}
                              isLeadership={true}
                            />
                          ))
                      }
                    </div>
                  </div>

                  {/* Extended Team */}
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-forest-dark mb-8 text-center">Our Extended Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {teamMembers.external && teamMembers.external.length > 0 && 
                        teamMembers.external.map((member: TeamMember) => (
                            <TeamMemberCard 
                              key={member.id} 
                              member={member} 
                              onViewProfile={handleViewProfile}
                              isLeadership={false}
                            />
                          ))
                      }
                    </div>
                  </div>
                </>
              )}
            </section>

            {/* Join the Team CTA */}
            <section className="bg-forest-light bg-opacity-20 rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-playfair text-3xl font-bold text-forest-dark mb-4">Join Our Team</h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Passionate about making a difference? We're always looking for dedicated individuals to join our growing community of change-makers.
              </p>
              <Button className="bg-forest-primary hover:bg-forest-dark text-white font-bold px-8 py-6 h-auto text-lg">
                Apply Now
              </Button>
            </section>
          </main>
        </div>

        {/* Member Profile Dialog */}
        <Dialog open={selectedMember !== null} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="font-playfair text-2xl font-bold text-forest-dark">
                {selectedMember?.name}
              </DialogTitle>
              <DialogDescription className="text-forest-primary font-medium">
                {selectedMember?.role}
              </DialogDescription>
            </DialogHeader>

            {selectedMember && (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedMember.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"} 
                      alt={selectedMember.name} 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-forest-dark">{selectedMember.role}</h4>

                    <div className="flex gap-3 mt-2">
                      {selectedMember.socialLinks?.map((social, index) => (
                        <a 
                          key={index}
                          href={social}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-forest-primary transition text-xl"
                        >
                          {renderSocialIcons(index)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-700 whitespace-pre-line">{selectedMember.bio}</p>

                  <h4 className="font-playfair text-lg font-bold text-forest-dark">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-forest-light bg-opacity-20 text-forest-dark px-3 py-1 rounded-full text-sm">Sustainability</span>
                    <span className="bg-forest-light bg-opacity-20 text-forest-dark px-3 py-1 rounded-full text-sm">Community Building</span>
                    <span className="bg-forest-light bg-opacity-20 text-forest-dark px-3 py-1 rounded-full text-sm">Environmental Education</span>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter className="mt-6">
              <Button onClick={() => setSelectedMember(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Layout>
    </motion.div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  onViewProfile: (member: TeamMember) => void;
  isLeadership: boolean;
}

const TeamMemberCard = ({ member, onViewProfile, isLeadership }: TeamMemberCardProps) => {
  return isLeadership ? (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="font-playfair text-xl text-forest-dark">{member.name}</CardTitle>
        <CardDescription>
          <div className="text-gray-500 font-medium">
            {member.role}
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 line-clamp-3">{member.bio}</p>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-3 text-lg">
          {member.socialLinks?.map((social, index) => (
            <a 
              key={index}
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-forest-primary transition"
            >
              {renderSocialIcons(index)}
            </a>
          ))}
        </div>
        <Button 
          onClick={() => onViewProfile(member)}
          variant="outline"
        >
          View Profile
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage 
            src={member.image || undefined}
            alt={member.name} 
            className="object-cover"
          />
          <AvatarFallback className="text-2xl">
            {member.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-playfair text-lg font-bold text-forest-dark mb-1">{member.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{member.role}</p>

        <div className="flex gap-3 mb-4 text-lg">
          {member.socialLinks?.map((social, index) => (
            <a 
              key={index}
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-forest-primary transition"
            >
              {renderSocialIcons(index)}
            </a>
          ))}
        </div>

        <p className="text-gray-600 line-clamp-3 mb-4 text-sm">{member.bio}</p>

        <Button 
          onClick={() => onViewProfile(member)}
          variant="outline"
          size="sm"
          className="mt-auto"
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
};

export default TeamPage;