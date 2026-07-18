import { useState } from "react";
import "../styles/gallery.css";

import chair from "../assets/images/chair.jpg";
import decor from "../assets/images/decor.jpg";
import food1 from "../assets/images/food1.jpg";
import coffee from "../assets/images/coffee.jpg";
import cake from "../assets/images/cake.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";
import pasta from "../assets/images/pasta.jpg";
import two from "../assets/images/two.jpg";

function Gallery() {

  const galleryImages = [
    chair,
    decor,
    food1,
    coffee,
    cake,
    food2,
    food3,
    pasta,
    two,
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev < galleryImages.length - 3 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 3
    );
  };

  return (
    <section id="gallery" className="gallery">

      <h1>Our Gallery</h1>

      <div className="gallery-wrapper">

        <button className="arrow" onClick={prevSlide}>
          ❮
        </button>

        <div className="gallery-container">
          {galleryImages
            .slice(startIndex, startIndex + 3)
            .map((image, index) => (
              <div className="gallery-card" key={index}>
                <img 
                  src={image} 
                  alt="Bean and Bloom Cafe"
                />
              </div>
            ))}
        </div>

        <button className="arrow" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </section>
  );
}

export default Gallery;