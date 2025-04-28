import { Link } from "wouter";
import { blogPosts } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const { ref } = useReveal();

  return (
    <section id="blog" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold text-forest-dark mb-4">
              Our <span className="text-forest-primary">Stories</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our blog where community members share experiences, reflections, and updates on our journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div 
                key={post.id}
                ref={ref}
                className="bg-white rounded-lg shadow-md overflow-hidden card reveal" 
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-forest-light bg-opacity-20 text-forest-dark text-xs px-2 py-1 rounded mr-2">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-forest-dark mb-2">{post.title}</h3>
                  <p className="font-poppins text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="flex items-center text-forest-primary hover:text-forest-dark transition">
                    <span className="mr-2">Read more</span>
                    <i className="fas fa-arrow-right text-sm"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={ref} className="text-center mt-10 reveal">
            <Button asChild className="transform hover:scale-105">
              <Link href="/blog">View All Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
