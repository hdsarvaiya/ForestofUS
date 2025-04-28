import { useEffect, useRef } from "react";

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElement = ref.current;
    
    if (currentElement) {
      observer.observe(currentElement);
      
      // Also observe any child elements with reveal class
      const childElements = currentElement.querySelectorAll('.reveal');
      childElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        
        // Also cleanup child observations
        const childElements = currentElement.querySelectorAll('.reveal');
        childElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return { ref };
};
