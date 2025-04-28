import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Define form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
  interests: z.array(z.string()).optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    watch,
    setValue,
    getValues 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      interests: [],
      agreeTerms: false
    }
  });

  const interestOptions = [
    { value: "jamming", label: "Jamming Sessions" },
    { value: "festivals", label: "Festival Celebrations" },
    { value: "education", label: "Educational Outreach" },
    { value: "social", label: "Social Activities" },
    { value: "volunteering", label: "Volunteering" },
    { value: "stays", label: "Booking Stays" }
  ];

  const handleInterestChange = (value: string) => {
    const currentInterests = getValues("interests") || [];
    const updatedInterests = currentInterests.includes(value)
      ? currentInterests.filter(i => i !== value)
      : [...currentInterests, value];
    
    setValue("interests", updatedInterests);
  };

  // Define form submission handler
  const processSubmit = async (data: FormData) => {
    try {
      // Here you would normally make an API call to register the user
      console.log("Registration data:", data);
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success state
      setRegistrationComplete(true);
      
      toast({
        title: "Registration successful!",
        description: "Welcome to the Forrest of Us community!",
      });
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };
  
  // Connect the form handler to React Hook Form
  const onSubmit = handleSubmit(processSubmit);

  const nextStep = () => {
    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <section className="pt-40 pb-20 min-h-screen bg-gradient-to-b from-forest-light to-cream flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              
              {!registrationComplete ? (
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h1 className="font-playfair text-3xl font-bold text-forest-dark mb-2">
                      Join Our Community
                    </h1>
                    <p className="font-poppins text-gray-600">
                      Become part of the Forrest of Us family and participate in our events, activities and initiatives
                    </p>
                  </div>
                  
                  {/* Step Indicator */}
                  <div className="flex mb-8">
                    <div className="w-1/2">
                      <div className={`h-1 rounded-l-full ${step === 1 ? 'bg-forest-primary' : 'bg-gray-200'}`}></div>
                      <div className="text-center mt-2 text-sm font-medium text-gray-600">Personal Info</div>
                    </div>
                    <div className="w-1/2">
                      <div className={`h-1 rounded-r-full ${step === 2 ? 'bg-forest-primary' : 'bg-gray-200'}`}></div>
                      <div className="text-center mt-2 text-sm font-medium text-gray-600">Interests & Preferences</div>
                    </div>
                  </div>
                  
                  <form onSubmit={onSubmit}>
                    {step === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <Input 
                              id="firstName" 
                              type="text" 
                              {...register("firstName")} 
                              className={errors.firstName ? "border-red-500" : ""}
                            />
                            {errors.firstName && (
                              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <Input 
                              id="lastName" 
                              type="text" 
                              {...register("lastName")} 
                              className={errors.lastName ? "border-red-500" : ""}
                            />
                            {errors.lastName && (
                              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <Input 
                            id="email" 
                            type="email" 
                            {...register("email")} 
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            {...register("phone")} 
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                          <Input 
                            id="password" 
                            type="password" 
                            {...register("password")} 
                            className={errors.password ? "border-red-500" : ""}
                          />
                          {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                          <Input 
                            id="confirmPassword" 
                            type="password" 
                            {...register("confirmPassword")} 
                            className={errors.confirmPassword ? "border-red-500" : ""}
                          />
                          {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                          )}
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            className="w-full bg-forest-primary hover:bg-forest-dark"
                          >
                            Continue
                          </Button>
                        </div>
                        
                        <div className="text-center text-sm text-gray-600 mt-4">
                          Already have an account? <Link href="/login" className="text-forest-primary font-medium hover:text-forest-dark">Sign in</Link>
                        </div>
                      </div>
                    )}
                    
                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium text-forest-dark mb-3">What are you interested in?</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {interestOptions.map((option) => (
                              <div key={option.value} className="flex items-center">
                                <Checkbox 
                                  id={option.value}
                                  checked={(watch("interests") || []).includes(option.value)}
                                  onCheckedChange={() => handleInterestChange(option.value)}
                                />
                                <label 
                                  htmlFor={option.value}
                                  className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                          <Checkbox 
                            id="agreeTerms"
                            {...register("agreeTerms")}
                          />
                          <label 
                            htmlFor="agreeTerms"
                            className="ml-2 text-sm text-gray-700"
                          >
                            I agree to the <a href="#" className="text-forest-primary hover:text-forest-dark">Terms and Conditions</a> and <a href="#" className="text-forest-primary hover:text-forest-dark">Privacy Policy</a>
                          </label>
                        </div>
                        {errors.agreeTerms && (
                          <p className="mt-1 text-sm text-red-600">{errors.agreeTerms.message}</p>
                        )}
                        
                        <div className="pt-4 flex space-x-4">
                          <Button 
                            type="button" 
                            onClick={prevStep}
                            variant="outline"
                            className="w-1/2"
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            className="w-1/2 bg-forest-primary hover:bg-forest-dark"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Registering..." : "Complete Registration"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-3xl text-green-500"></i>
                  </div>
                  <h1 className="font-playfair text-3xl font-bold text-forest-dark mb-4">
                    Registration Complete!
                  </h1>
                  <p className="font-poppins text-gray-600 mb-8">
                    Thank you for joining the Forrest of Us community. We've sent you an email with verification instructions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/">Return to Home</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/login">Log In</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default RegisterPage;