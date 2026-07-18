import "../styles/Hero.css";

function Hero() {

  const scrollToMenu = () => {
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth"
    });
  };


  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          ✦ Welcome to
        </p>


        <h1>
          Bean & Bloom
        </h1>


        <h2>
          CAFÉ & BISTRO
        </h2>


        <p className="hero-line">
          Sip • Savor • Stay
        </p>


        <p className="hero-description">

          Experience handcrafted coffees, refreshing beverages, delicious
          vegetarian and non-vegetarian specialties, and irresistible desserts
          in a warm, modern space designed for unforgettable moments with family
          and friends.

        </p>


        <div className="hero-buttons">

          <button 
            className="primary-btn"
            onClick={scrollToMenu}
          >
            Explore Menu
          </button>


        </div>


      </div>

    </section>
  );
}

export default Hero;