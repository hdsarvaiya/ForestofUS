import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/lib/utils";
import Layout from "@/components/layout";
import { useReveal } from "@/hooks/use-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WavyDivider from "@/components/wavy-divider";

const BlogPostPage = () => {
  const { ref } = useReveal();
  const [match, params] = useRoute<{id: string}>("/blog/:id");
  const postId = params?.id ? parseInt(params.id, 10) : undefined;
  
  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0]; // Default to first post if not found

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
        {/* Hero Section with Post Image */}
        <section className="pt-32 relative bg-forest-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/blog">
                  <a className="inline-flex items-center text-white hover:text-soft-yellow transition mb-4">
                    <i className="fas fa-arrow-left mr-2"></i>
                    <span>Back to all posts</span>
                  </a>
                </Link>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg text-white p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-soft-yellow text-forest-dark text-xs px-2 py-1 rounded mr-2">
                      {post.category}
                    </span>
                    <span className="text-gray-300 text-sm">{post.date}</span>
                  </div>
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                  <p className="font-poppins text-xl text-gray-200">{post.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30rem] w-full">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <WavyDivider position="bottom" color="cream" waveStyle="wave-2" />
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Author Info */}
              <div ref={ref} className="flex items-center mb-10 reveal">
                <Avatar className="h-16 w-16 border-2 border-forest-light">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-playfair text-lg font-bold text-forest-dark">Amelia Nayak</p>
                  <p className="font-poppins text-sm text-gray-600">Community Manager • {post.date}</p>
                </div>
                <div className="ml-auto flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-forest-primary transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-forest-primary transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-forest-primary transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              
              {/* Blog Content */}
              <div ref={ref} className="prose prose-lg max-w-none reveal">
                <p>
                  The Forrest of Us community recently organized its annual tree plantation drive, marking a significant milestone in our ongoing commitment to environmental sustainability. Over 150 volunteers from all walks of life gathered early Sunday morning at the outskirts of Green Valley, armed with saplings, tools, and an unwavering determination to make a difference.
                </p>
                
                <p>
                  "This year's plantation drive is special because we've partnered with the local agricultural university to select indigenous species that are not only suited to our soil but also provide habitat for local wildlife," explained Raj Kapoor, the lead coordinator of the event.
                </p>
                
                <h2>Community Participation</h2>
                
                <p>
                  What made this event truly remarkable was the diversity of participants. From school children to senior citizens, everyone played their part. The youngest volunteer was just five years old, while the oldest was an inspiring 82-year-old who has been participating in environmental conservation efforts for decades.
                </p>
                
                <blockquote>
                  "When you plant a tree, you're planting hope. You may not sit in its shade, but future generations will. That's what community is all about - thinking beyond ourselves."
                  <cite>— Maya Patil, Community Elder</cite>
                </blockquote>
                
                <p>
                  The day wasn't just about planting trees; it was a holistic learning experience. Botanists from the agricultural university conducted workshops on plant care, while environmental activists spoke about the importance of forest conservation in mitigating climate change.
                </p>
                
                <h2>Impact and Future Plans</h2>
                
                <p>
                  By the end of the day, over 500 saplings were planted across five acres of land. The species included neem, banyan, peepal, and various fruit-bearing trees that will not only enrich the ecosystem but also provide sustenance to local wildlife and communities in the coming years.
                </p>
                
                <p>
                  Looking ahead, the Forrest of Us community plans to adopt this area for the next three years, ensuring that the saplings grow into healthy trees. Monthly maintenance drives have been scheduled, and a rainwater harvesting system is being designed to support the new plantation during dry seasons.
                </p>
                
                <p>
                  If you'd like to get involved in our future conservation efforts or want to learn more about sustainable living practices, join our upcoming workshop on July 15th. Together, we can make a significant impact on our local environment and create a greener future for all.
                </p>
              </div>
              
              {/* Tags */}
              <div ref={ref} className="mt-10 mb-12 reveal">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-forest-light bg-opacity-20 text-forest-dark text-sm rounded-full">Environment</span>
                  <span className="px-3 py-1 bg-forest-light bg-opacity-20 text-forest-dark text-sm rounded-full">Community</span>
                  <span className="px-3 py-1 bg-forest-light bg-opacity-20 text-forest-dark text-sm rounded-full">Sustainability</span>
                  <span className="px-3 py-1 bg-forest-light bg-opacity-20 text-forest-dark text-sm rounded-full">Tree Plantation</span>
                </div>
              </div>
              
              {/* Share */}
              <div ref={ref} className="border-t border-b border-gray-200 py-6 my-8 reveal">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <p className="font-medium text-forest-dark mb-4 sm:mb-0">Share this post:</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div ref={ref} className="mt-16 reveal">
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-8">Related Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.slice(0, 2).map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center mb-2">
                          <span className="bg-forest-light bg-opacity-20 text-forest-dark text-xs px-2 py-1 rounded mr-2">
                            {relatedPost.category}
                          </span>
                          <span className="text-gray-500 text-sm">{relatedPost.date}</span>
                        </div>
                        <h4 className="font-playfair text-lg font-bold text-forest-dark mb-2">{relatedPost.title}</h4>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <a className="flex items-center text-forest-primary hover:text-forest-dark transition">
                            <span className="mr-2">Read more</span>
                            <i className="fas fa-arrow-right text-sm"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Comments Section */}
              <div ref={ref} className="mt-16 reveal">
                <h3 className="font-playfair text-2xl font-bold text-forest-dark mb-8">Comments (3)</h3>
                
                {/* Comment Form */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h4 className="font-playfair text-xl font-bold text-forest-dark mb-4">Leave a Comment</h4>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Comment</label>
                      <textarea 
                        id="comment" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-primary"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="bg-forest-primary hover:bg-forest-dark text-white font-medium py-2 px-6 rounded-lg transition"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
                
                {/* Comments List */}
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256" />
                        <AvatarFallback>SR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-playfair font-bold text-forest-dark">Sophia Rodriguez</h5>
                          <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <p className="text-gray-700 mb-3">
                          It was wonderful to be part of this tree plantation drive. The energy and enthusiasm of all the volunteers, especially the children, was truly inspiring!
                        </p>
                        <button className="text-forest-primary hover:text-forest-dark text-sm font-medium transition">Reply</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comment 2 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=256" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-playfair font-bold text-forest-dark">John Doe</h5>
                          <span className="text-gray-500 text-sm">3 days ago</span>
                        </div>
                        <p className="text-gray-700 mb-3">
                          I'm looking forward to joining the maintenance drives. It's important that we not only plant trees but also ensure they survive and thrive. Count me in for the July workshop as well!
                        </p>
                        <button className="text-forest-primary hover:text-forest-dark text-sm font-medium transition">Reply</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comment 3 with Reply */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-playfair font-bold text-forest-dark">Arjun Kumar</h5>
                          <span className="text-gray-500 text-sm">5 days ago</span>
                        </div>
                        <p className="text-gray-700 mb-3">
                          Can you share more details about the indigenous species that were planted? I'm particularly interested in the fruit-bearing trees and how they support local wildlife.
                        </p>
                        <button className="text-forest-primary hover:text-forest-dark text-sm font-medium transition">Reply</button>
                        
                        {/* Reply */}
                        <div className="mt-4 ml-6 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256" />
                              <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center mb-1">
                                <h6 className="font-playfair font-bold text-forest-dark mr-2">Amelia Nayak</h6>
                                <span className="text-gray-500 text-sm">4 days ago</span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                Great question, Arjun! We planted mango, jamun, and amla trees among others. These trees not only provide fruits but also attract birds and small mammals. I'll be sharing a detailed post about this next week with resources from the agricultural university.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default BlogPostPage;