import "./../styles/Navbar.css";

function Navbar() {

  const scrollToReservation = () => {
    document.getElementById("reservation").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-main">Bean & Bloom</span>
        <span className="logo-sub">CAFÉ & BISTRO</span>
      </div>


      <nav>
        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#menu">Menu</a>
          </li>

          <li>
            <a href="#gallery">Gallery</a>
          </li>

          <li>
            <a href="#reviews">Reviews</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>


      <button 
        className="reserve-btn"
        onClick={scrollToReservation}
      >
        Reserve a Table
      </button>


    </header>
  );
}

export default Navbar;