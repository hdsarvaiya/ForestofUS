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
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional()
});

type FormData = z.infer<typeof formSchema>;

const LoginPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      
      // Here you would normally make an API call to authenticate the user
      console.log("Login data:", data);
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Login successful!",
        description: "Welcome back to Forrest of Us!",
      });
      
      // Redirect would happen here
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="font-playfair text-3xl font-bold text-forest-dark mb-2">
                    Welcome Back
                  </h1>
                  <p className="font-poppins text-gray-600">
                    Sign in to your Forrest of Us account
                  </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <a href="#" className="text-sm text-forest-primary hover:text-forest-dark">Forgot password?</a>
                    </div>
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox 
                        id="rememberMe"
                        {...register("rememberMe")}
                      />
                      <label 
                        htmlFor="rememberMe"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-forest-primary hover:bg-forest-dark"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or sign in with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <i className="fab fa-google mr-2"></i>
                      Google
                    </button>
                    <button 
                      type="button"
                      className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <i className="fab fa-facebook-f mr-2"></i>
                      Facebook
                    </button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account yet? <Link href="/register" className="text-forest-primary font-medium hover:text-forest-dark">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default LoginPage;