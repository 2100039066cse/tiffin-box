import React from "react";
import panImg from "./assets/pan.png";
import pplImg from "./assets/ppl.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";
import test1 from "./assets/test1.png";
import test2 from "./assets/test2.png";
import test3 from "./assets/test3.png";
import test4 from "./assets/test4.png";

import "./App.css";

function App() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo">
            <span className="logo-top">the</span>
            <span className="logo-mid">tiffin</span>
            <span className="logo-bottom">box.</span>
          </div>

          <h1 className="hero-title">
            AUTHENTIC <br />
            SOUTH INDIAN <br />
            CUISINE
          </h1>

          <button className="order-btn">
            Order Now <span>→</span>
          </button>
        </div>

        <div className="hero-image">
          <img src={panImg} alt="Tiffin Dish" />
        </div>

        <button className="view-menu">
          View Menu <span>→</span>
        </button>
      </div>

      {/* PEOPLE SECTION */}
      <div className="people-section">
        <div className="people-content">
          <h2>Join Thousands of Happy Customers</h2>
          <p>
            Experience the taste of home-cooked South Indian meals delivered
            fresh every day. Our customers love the authentic flavors and
            quality.
          </p>
          <button className="join-btn">
            Join Now <span>→</span>
          </button>
        </div>

        <div className="people-image">
          <img src={pplImg} alt="Happy Customers" />
        </div>
      </div>

      {/* FEATURED MENU SECTION */}
      <div className="featured-section">
        <h2 className="featured-heading">Featured Menu</h2>

        <div className="menu-gallery">
          <div className="menu-card">
            <img src={pic1} alt="Dish 1" />
            <h3>Chicken Chettinad</h3>
            <p>₹299</p>
          </div>

          <div className="menu-card">
            <img src={pic2} alt="Dish 2" />
            <h3>Masala Dosa</h3>
            <p>₹149</p>
          </div>

          <div className="menu-card">
            <img src={pic3} alt="Dish 3" />
            <h3>Idli Sambar</h3>
            <p>₹99</p>
          </div>
        </div>
      </div>

      {/* ONLINE ORDER SECTION */}
      <div className="order-section">
        <div className="order-content">
          <h4 className="order-label">ONLINE ORDER</h4>
          <h2 className="order-heading">
            FRESH SOUTH <br />
            INDIAN FLAVORS <br />
            DELIVERED!
          </h2>
          <p className="order-description">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time.
          </p>
          <button className="order-online-btn">
            Order Online <span>→</span>
          </button>
        </div>

        <div className="order-image">
          <img src={pic4} alt="Online Order" />
        </div>
      </div>

      {/* BOOK TABLE SECTION */}
      <div className="book-section">
        <div className="book-image">
          <img src={pic5} alt="Book Table" />
        </div>

        <div className="book-content">
          <h4 className="book-label">BOOK TABLE</h4>
          <h2 className="book-heading">
            PLANNING A <br />
            MEAL AT THE <br />
            TIFFIN BOX?
          </h2>
          <p className="book-description">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time.
          </p>
          <button className="book-btn">
            Book Table <span>→</span>
          </button>
        </div>
      </div>
            {/* CHEF SECTION */}
      <div className="chef-section">
        <h4 className="chef-label">CHEF</h4>
        <h2 className="chef-heading">OUR BRAND CHEF</h2>

        <div className="chef-container">
          <div className="chef-image">
            <img src={require("./assets/pic6.png")} alt="Chef Jomon" />
          </div>

          <div className="chef-content">
            <h3 className="chef-name">CHEF JOMON</h3>
            <h5 className="chef-role">Senior Chef at The Tiffin Box</h5>
            <p className="chef-description">
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring.
            </p>
            <p className="chef-description">
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep.
            </p>
          </div>
        </div>
      </div>
      {/* ===== TESTIMONIAL SECTION ===== */}
<section className="testimonial-section">
  <div className="testimonial-header">
    <h4 className="yellow-heading">TESTIMONIAL</h4>
    <h2 className="white-heading">
      WHAT  OUR  CUSTOMERS SAYS
    </h2>
  </div>

  <div className="testimonial-container">
    <div className="testimonial-card">
      <img src={require("./assets/test1.png")} alt="Customer 1" />
    </div>
    <div className="testimonial-card">
      <img src={require("./assets/test2.png")} alt="Customer 2" />
    </div>
    <div className="testimonial-card">
      <img src={require("./assets/test3.png")} alt="Customer 3" />
    </div>
    <div className="testimonial-card">
      <img src={require("./assets/test4.png")} alt="Customer 4" />
    </div>
  </div>
</section>
{/* LOCATIONS SECTION */}
<div className="locations-section">
  <div className="locations-content">
    <h4 className="locations-label">OUR LOCATIONS</h4>
    <h2 className="locations-heading">
      FIND US <br />
      AT THESE <br />
      CONVENIENT <br />
      LOCATIONS
    </h2>
    <button className="store-btn">
      Our Store <span>→</span>
    </button>
  </div>

  <div className="locations-image">
    <img src={require("./assets/loc.png")} alt="Our Locations" />
  </div>
</div>
{/* INSTAGRAM / COMMUNITY SECTION */}
<div className="community-section">
  <div className="community-content">
    <h4 className="community-label">INSTAGRAM</h4>
    <h2 className="community-heading">
      JOIN OUR <br />
      COMMUNITY
    </h2>
  </div>

  <div className="community-gallery">
    <div className="community-card">
      <img src={require("./assets/cum1.png")} alt="Community 1" />
    </div>
    <div className="community-card">
      <img src={require("./assets/cum2.png")} alt="Community 2" />
    </div>
    <div className="community-card">
      <img src={require("./assets/cum3.png")} alt="Community 3" />
    </div>
    <div className="community-card">
      <img src={require("./assets/cum4.png")} alt="Community 4" />
    </div>
  </div>
</div>
{/* FOOTER SECTION */}
<footer className="footer-section">
  <div className="footer-logo">
    <span className="footer-logo-top">the</span>
    <span className="footer-logo-mid">tiffin</span>
    <span className="footer-logo-bottom">box.</span>
  </div>

  <h2 className="footer-heading">SUBSCRIBE TO OUR NEWSLETTER</h2>

  <div className="footer-subscribe">
    <input type="email" placeholder="EMAIL ADDRESS" />
    <button>
      Subscribe <span>→</span>
    </button>
  </div>

  <div className="footer-contact">
    <h4>CONTACT U</h4>
    <p>0151 245 1500</p>
    <p>INFO@TIFFINBOX.CO.UK</p>
    <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
  </div>

  <div className="footer-links">
    <a href="#">MENU</a> | <a href="#">ORDER ONLINE</a> | <a href="#">BOOK A TABLE</a> |{" "}
    <a href="#">ABOUT US</a> | <a href="#">CONTACT U</a>
  </div>

  <div className="footer-socials">
    <a href="#"><i className="fa-brands fa-instagram"></i></a>
    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
  </div>
</footer>





    </div>
  );
}

export default App;
