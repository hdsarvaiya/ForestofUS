import { useState } from "react";

export const useGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = "auto";
  };

  return {
    lightboxOpen,
    currentImage,
    openLightbox,
    closeLightbox
  };
};
