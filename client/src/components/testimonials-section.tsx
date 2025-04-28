import { testimonials } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const { ref } = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
              What People <span className="text-forest-primary">Say</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our community members, students, airbnb guests, and volunteers.
            </p>
          </div>
          
          <div ref={ref} className="relative reveal">
            <motion.div 
              className="overflow-hidden"
              animate={{ x: `${-currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-xl">
                      <div className="flex items-center mb-4">
                        <div className="flex text-forest-primary">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                      </div>
                      <p className="font-poppins text-gray-600 italic mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-playfair font-bold text-forest-dark">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-4 h-4 rounded-full transition ${
                    currentSlide === index 
                      ? "bg-forest-primary opacity-100" 
                      : "bg-gray-300 hover:bg-forest-primary opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
