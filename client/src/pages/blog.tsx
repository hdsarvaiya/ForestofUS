import { useEffect } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/utils";
import Layout from "@/components/layout";
import { useReveal } from "@/hooks/use-reveal";
import WavyDivider from "@/components/wavy-divider";

const BlogPage = () => {
  const { ref } = useReveal();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-forest-primary relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="font-poppins text-xl mb-8">
                Stories, updates, and reflections from the Forrest of Us community
              </p>
            </div>
          </div>
          <WavyDivider position="bottom" color="#f7f3e9
" waveStyle="wave-1" />
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Categories */}
              <div ref={ref} className="mb-12 reveal">
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-4 py-2 bg-forest-primary text-white rounded-full font-medium text-sm hover:bg-forest-dark transition">
                    All Categories
                  </button>
                  <button className="px-4 py-2 bg-white text-forest-dark border border-forest-light rounded-full font-medium text-sm hover:bg-forest-light hover:text-white transition">
                    Events
                  </button>
                  <button className="px-4 py-2 bg-white text-forest-dark border border-forest-light rounded-full font-medium text-sm hover:bg-forest-light hover:text-white transition">
                    Music
                  </button>
                  <button className="px-4 py-2 bg-white text-forest-dark border border-forest-light rounded-full font-medium text-sm hover:bg-forest-light hover:text-white transition">
                    Education
                  </button>
                  <button className="px-4 py-2 bg-white text-forest-dark border border-forest-light rounded-full font-medium text-sm hover:bg-forest-light hover:text-white transition">
                    Sustainability
                  </button>
                  <button className="px-4 py-2 bg-white text-forest-dark border border-forest-light rounded-full font-medium text-sm hover:bg-forest-light hover:text-white transition">
                    Stories
                  </button>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    ref={ref}
                    className="bg-white rounded-lg shadow-md overflow-hidden card reveal" 
                    style={{ transitionDelay: `${0.1 * (index % 6 + 1)}s` }}
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
                      <a href={`/blog/${post.id}`} className="flex items-center text-forest-primary hover:text-forest-dark transition">
                        <span className="mr-2">Read more</span>
                        <i className="fas fa-arrow-right text-sm"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <i className="fas fa-chevron-left text-xs"></i>
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-forest-light bg-forest-primary text-sm font-medium text-white">
                    1
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <i className="fas fa-chevron-right text-xs"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default BlogPage;