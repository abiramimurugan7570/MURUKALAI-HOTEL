function Gallery() {
  return (
    <section id="gallery">
      <p>OUR GALLERY</p>

      <h2>A Taste of Murukalai Hotel</h2>

      <p className="gallery-intro">
        A glimpse of the food, flavours, and moments
        waiting for you at Murukalai Hotel.
      </p>

      <div className="gallery-grid">

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85"
            alt="Indian food"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85"
            alt="Indian cuisine"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=85"
            alt="Dosa"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=85"
            alt="South Indian food"
          />
        </div>

      </div>
    </section>
  );
}

export default Gallery;