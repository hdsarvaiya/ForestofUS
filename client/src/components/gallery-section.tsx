import { galleryImages } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { useGallery } from "@/hooks/use-gallery";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const { ref } = useReveal();
  const { openLightbox, lightboxOpen, currentImage, closeLightbox } = useGallery();

  return (
    <section className="py-20 bg-forest-light text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="text-center mb-12 reveal">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Our <span className="text-soft-yellow">Gallery</span>
            </h2>
            <p className="font-poppins text-lg max-w-3xl mx-auto">
              Explore moments from our events, festivals, teaching sessions, and community activities.
            </p>
          </div>
          
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg cursor-pointer" 
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          <div ref={ref} className="text-center mt-10 reveal">
            <Button 
              variant="accent"
              className="transform hover:scale-105"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gallery Lightbox */}
      {lightboxOpen && (
        <div className="gallery-lightbox flex" onClick={closeLightbox}>
          <span className="absolute top-4 right-4 text-white text-4xl cursor-pointer">&times;</span>
          <img src={currentImage} alt="Lightbox Image" className="lightbox-content" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
