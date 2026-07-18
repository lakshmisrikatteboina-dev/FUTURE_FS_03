import "../styles/about.css";
import cafeInterior from "../assets/images/about.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={cafeInterior} alt="Cafe Interior" />
      </div>

      <div className="about-text">

        <p className="section-tag">ABOUT US</p>

        <h2>
          Every Cup, Every Meal,
          <br />
          Every Moment Matters.
        </h2>

        <p className="about-description">
          At Bean & Bloom Café & Bistro, we believe great food and great coffee
          bring people together. Whether you're stopping by for your morning
          espresso, enjoying a cozy brunch, sharing a family dinner, or ending
          your day with desserts, every visit is crafted to feel warm,
          welcoming, and memorable.
        </p>

        <div className="about-features">

          <div className="feature">
            <h3>☕ Premium Coffee</h3>
            <p>Freshly brewed every day using premium beans.</p>
          </div>

          <div className="feature">
            <h3>🍽 Fresh Food</h3>
            <p>Delicious vegetarian & non-vegetarian specialties.</p>
          </div>

          <div className="feature">
            <h3>🍰 Signature Desserts</h3>
            <p>Freshly baked cakes and pastries.</p>
          </div>

          <div className="feature">
            <h3>🌿 Cozy Ambience</h3>
            <p>A warm and relaxing atmosphere for everyone.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;