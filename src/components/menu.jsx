import "../styles/menu.css";

import coffee from "../assets/images/coffee.jpg";
import pasta from "../assets/images/pasta.jpg";
import dessert from "../assets/images/cake.jpg";
import burger from "../assets/images/burger.jpg";

function Menu() {
  return (
    <section id="menu" className="menu">


      <div className="menu-images">

        <img src={coffee} alt="Coffee" />

        <img src={pasta} alt="Pasta" />

        <img src={dessert} alt="Dessert" />

        <img src={burger} alt="Burger" />

      </div>



      <div className="menu-list">

        <p className="section-tag">
          OUR MENU
        </p>


        <h2>
          Delicious Choices
        </h2>



        <div className="menu-category">

          <h3>
            ☕ Coffee & Beverages
          </h3>


          <div className="menu-item">
            <span>Espresso</span>
            <span>₹120</span>
          </div>


          <div className="menu-item">
            <span>Cappuccino</span>
            <span>₹180</span>
          </div>


          <div className="menu-item">
            <span>Cafe Latte</span>
            <span>₹200</span>
          </div>


          <div className="menu-item">
            <span>Mocha</span>
            <span>₹220</span>
          </div>

        </div>





        <div className="menu-category">

          <h3>
            🍝 Main Course
          </h3>


          <div className="menu-item">
            <span>Alfredo Pasta</span>
            <span>₹320</span>
          </div>


          <div className="menu-item">
            <span>Margherita Pizza</span>
            <span>₹300</span>
          </div>


          <div className="menu-item">
            <span>Veg Gourmet Burger</span>
            <span>₹250</span>
          </div>

        </div>






        <div className="menu-category">

          <h3>
            🍰 Desserts
          </h3>


          <div className="menu-item">
            <span>Chocolate Truffle Cake</span>
            <span>₹220</span>
          </div>


          <div className="menu-item">
            <span>Brownie</span>
            <span>₹180</span>
          </div>


          <div className="menu-item">
            <span>Cheesecake</span>
            <span>₹280</span>
          </div>


        </div>


      </div>


    </section>
  );
}

export default Menu;