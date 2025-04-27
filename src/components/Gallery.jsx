function Gallery() {
    const images = [
      { src: "/img1.jpg", alt: "Bride and groom smiling" },
      { src: "/img2.jpg", alt: "Wedding ceremony" },
      { src: "/img3.jpg", alt: "Reception celebration" },
      // Add more images as needed
    ];
  
    return (
      <section id="gallery" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Wedding Moments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;