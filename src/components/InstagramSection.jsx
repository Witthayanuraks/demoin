function InstagramSection() {
    return (
      <section className="p-8 bg-white" id="gallery">
        <h2 className="text-center text-2xl mb-6">Instagram</h2>
        <p className="text-center mb-6">Connect to Instagram and tag this event<br /><span className="font-bold">#CONCHI-JAVI</span></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <img key={id} src={`/insta${id}.jpg`} alt={`Instagram ${id}`} className="w-full h-40 object-cover rounded" />
          ))}
        </div>
      </section>
    );
  }
  
  export default InstagramSection;
  