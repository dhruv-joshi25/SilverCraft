import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import useEmblaCarousel from 'embla-carousel-react';

// Define slide content
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Crafting Timeless Silver Elegance',
    description: 'Exquisite handcrafted silver jewelry since 1999, where tradition meets innovation.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Premium Silver Craftsmanship',
    description: 'Each piece tells a story of excellence, artistry, and meticulous attention to detail.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1574421233108-d0d2a5cb1b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Elegance in Every Detail',
    description: 'Discover our unique collection that combines traditional techniques with contemporary designs.'
  }
];

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // Auto-scroll every 5 seconds
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>
      
      {/* Embla Carousel */}
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        <div className="h-full flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] h-full relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${slide.image}')` 
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <Container className="h-full flex items-center z-20 relative">
        <motion.div 
          className="max-w-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            {slides[selectedIndex].title}
          </h1>
          <p className="text-lg mb-8">
            {slides[selectedIndex].description}
          </p>
          <div className="bg-black bg-opacity-30 inline-block p-3">
            <Link 
              to="/collection" 
              className="inline-block px-8 py-3 bg-gold text-white font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all"
            >
              Explore Collections
            </Link>
          </div>
          
          {/* Slider dots */}
          <div className="flex items-center space-x-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === selectedIndex ? 'bg-gold' : 'bg-white bg-opacity-50'}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
