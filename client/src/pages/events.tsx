import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import WavyDivider from "@/components/wavy-divider";
import { apiRequest } from "@/lib/queryClient";
import { upcomingEvents } from "@/lib/utils";
import { Event } from "@shared/schema";

// Form validation schema
const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  attendees: z.coerce.number().min(1, "At least 1 attendee required").max(10, "Maximum 10 attendees allowed"),
  specialRequests: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const { toast } = useToast();

  // Fetch events from API
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["/api/events"],
    refetchOnWindowFocus: false,
  });

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      attendees: 1,
      specialRequests: "",
      agreeTerms: false
    }
  });

  const onRegister = async (formData: RegisterFormData) => {
    if (!selectedEvent) return;
    
    try {
      setIsRegistering(true);
      
      // Make API request to register for the event
      await apiRequest(`/api/events/${selectedEvent.id}/register`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      
      // Show success message
      setRegisterSuccess(true);
      toast({
        title: "Registration Successful",
        description: `You've successfully registered for ${selectedEvent.title}`,
      });
      
      // Reset form
      reset();
      
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRegistering(false);
    }
  };

  const closeRegistrationModal = () => {
    setSelectedEvent(null);
    setRegisterSuccess(false);
    reset();
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
                Our Events
              </h1>
              <p className="font-poppins text-xl text-gray-200 mb-10">
                Connect with nature and our community through our diverse range of events.
                From forest clean-ups to educational workshops, there's something for everyone.
              </p>
              <Button asChild size="lg">
                <a href="#upcoming-events">View Upcoming Events</a>
              </Button>
            </div>
          </div>
          <WavyDivider position="bottom" color="#f7f3e9" waveStyle="wave-1" />
        </section>

        {/* Upcoming Events Section */}
        <section id="upcoming-events" className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
                Upcoming Events
              </h2>
              <p className="font-poppins text-gray-600 max-w-3xl mx-auto">
                Join us for these exciting events. Register early as spots fill up quickly!
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-forest-primary"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">Error loading events. Please try again later.</p>
                {/* Show the mock data when there's an error fetching from API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {upcomingEvents.map((event, index) => (
                    <EventCard 
                      key={index}
                      event={{
                        id: index + 1,
                        title: event.title,
                        description: event.description,
                        date: new Date(event.date).toISOString(),
                        location: event.location,
                        image: event.image,
                        capacity: event.capacity,
                        registrationOpen: true,
                        createdAt: new Date().toISOString()
                      }}
                      onRegisterClick={setSelectedEvent}
                    />
                  ))}
                </div>
              </div>
            ) : events && events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event: Event) => (
                  <EventCard 
                    key={event.id}
                    event={event}
                    onRegisterClick={setSelectedEvent}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No upcoming events found.</p>
                {/* Show the mock data when there are no events from API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {upcomingEvents.map((event, index) => (
                    <EventCard 
                      key={index}
                      event={{
                        id: index + 1,
                        title: event.title,
                        description: event.description,
                        date: new Date(event.date).toISOString(),
                        location: event.location,
                        image: event.image,
                        capacity: event.capacity,
                        registrationOpen: true,
                        createdAt: new Date().toISOString()
                      }}
                      onRegisterClick={setSelectedEvent}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 bg-cream relative">
          <WavyDivider position="top" color="#89aa50" waveStyle="wave-3" />
          <div className="container mx-auto px-4 py-14 bg-forest-light bg-opacity-30 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
                Past Events
              </h2>
              <p className="font-poppins text-gray-600 max-w-3xl mx-auto">
                Take a look at some of our previous gatherings and the impact we've made together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Past Event 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1592483478492-8d1d35e482cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Forest Cleanup" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-200 text-forest-dark text-xs font-semibold px-3 py-1 rounded-full">
                      Volunteer
                    </span>
                    <span className="text-gray-500 text-sm">January 15, 2023</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-2">Spring Forest Cleanup</h3>
                  <p className="text-gray-600 mb-4">
                    Over 50 volunteers gathered to clean up Valley Creek Forest, collecting more than 100kg of waste and planting 30 new trees.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Valley Creek Forest
                    </span>
                    <span className="text-forest-primary font-semibold">50+ attendees</span>
                  </div>
                </div>
              </div>
              
              {/* Past Event 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                    alt="Workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-200 text-forest-dark text-xs font-semibold px-3 py-1 rounded-full">
                      Workshop
                    </span>
                    <span className="text-gray-500 text-sm">March 22, 2023</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-2">Sustainable Living Workshop</h3>
                  <p className="text-gray-600 mb-4">
                    An engaging workshop on sustainable living practices, covering composting, renewable energy, and reducing plastic waste.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Community Center
                    </span>
                    <span className="text-forest-primary font-semibold">75+ attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Registration Dialog */}
        <Dialog open={!!selectedEvent} onOpenChange={open => !open && closeRegistrationModal()}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-playfair">
                {registerSuccess ? "Registration Complete" : selectedEvent ? `Register for ${selectedEvent.title}` : "Event Registration"}
              </DialogTitle>
              <DialogDescription>
                {registerSuccess 
                  ? "Thank you for registering for our event. We've sent a confirmation to your email."
                  : "Fill out the form below to secure your spot at this event."}
              </DialogDescription>
            </DialogHeader>
            
            {registerSuccess ? (
              <div className="py-6 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-500 mb-6">
                  We look forward to seeing you at the event. A confirmation has been sent to your email.
                </p>
                <Button onClick={closeRegistrationModal}>Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register("firstName")} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register("lastName")} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" {...register("phone")} />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="attendees">Number of Attendees</Label>
                  <Input id="attendees" type="number" min="1" max="10" {...register("attendees")} />
                  {errors.attendees && <p className="text-red-500 text-sm">{errors.attendees.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests (optional)</Label>
                  <Textarea id="specialRequests" {...register("specialRequests")} />
                  {errors.specialRequests && <p className="text-red-500 text-sm">{errors.specialRequests.message}</p>}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="agreeTerms" {...register("agreeTerms")} />
                  <Label htmlFor="agreeTerms" className="text-sm font-normal">
                    I agree to the event terms and conditions
                  </Label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>}
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={closeRegistrationModal}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isRegistering}>
                    {isRegistering ? "Registering..." : "Register Now"}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </Layout>
    </motion.div>
  );
};

interface EventCardProps {
  event: Event;
  onRegisterClick: (event: Event) => void;
}

const EventCard = ({ event, onRegisterClick }: EventCardProps) => {
  // Format date
  const formattedDate = event.date ? format(parseISO(event.date), 'MMMM d, yyyy • h:mm a') : '';
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={event.image || "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-forest-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {event.registrationOpen ? "Registration Open" : "Registration Closed"}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="font-playfair text-xl text-forest-dark">{event.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center text-gray-500 mb-1">
            <i className="far fa-calendar-alt mr-2"></i>
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{event.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-sm text-gray-500">
          {event.capacity ? `${event.capacity} spots available` : "Unlimited spots"}
        </div>
        <Button 
          onClick={() => onRegisterClick(event)}
          disabled={!event.registrationOpen}
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventsPage;