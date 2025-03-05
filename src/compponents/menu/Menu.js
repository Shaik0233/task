import React from 'react';
import { Link } from 'react-router-dom';
import '../menu/Menu.css';
import CardPic from '../card_image/CardPic';



function Menu() {
  const services = [
    { icon: "fa-solid fa-utensils", title: "Best Chef", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." },
    { icon: "fa-solid fa-bowl-food", title: "Quality Food", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." },
    { icon: "fa-solid fa-wine-glass", title: "Great Ambience", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." }
  ];

  return (
    <section className="offer">
      <h1 className="offer-title">Our Offered Menu</h1>
      <h2>Some Trendy And Popular <br/> Courses Offered</h2>
      
      <ul className="menu-list">
        <li><Link to="/special"><button className="offer-button">Special</button></Link></li>
        <li><Link to="/lunch">Lunch</Link></li>
        <li><Link to="/breakfast">Breakfast</Link></li>
        <li><Link to="/dinner">Dinner</Link></li>
      </ul>

      <div className="menu_items">
        <div className="menu_item1"><img src='./images/about.png.webp' width="100%" alt="Menu Item"/></div>
        <div className="menu_item2"><img src='./images/about.png.webp' width="100%" alt="Menu Item"/></div>
        <div className="menu_item3">
          <img src='./images/about.png.webp' alt="Menu Item"/>
          <img src='./images/about.png.webp' alt="Menu Item"/>
        </div>
      </div>

      <div className="about">
        <div className="a_left">
          <img src='./images/about.png.webp' alt="About Our Restaurant"/>
        </div>
        <div className="a_right">
          <p className="offer-title1">About Our Restaurant</p>
          <h1>We Provide Good Food <br/> For Your Family!</h1>
          <p className="t-start">Ut enim acgsd minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button>Learn more</button>
        </div>
      </div>

      <div className="ab_ours">
        <p>About Our Restaurant</p>
        <h1>Book A Table</h1>
        <div className="booking">
          <select>
            <option value="">Person 1</option>
            <option value="">Person 2</option>
            <option value="">Person 3</option>
            <option value="">Person 4</option>
          </select>
          <div>
            <input type="date"/>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className="serv">
        <p>Services We Offer</p>
        <h1>Our Best Services</h1>
      </div>

      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <i className={service.icon}></i><br/>
              {service.title}
            </div>
            <div className="card-body">
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about2">
        <div className="ab-left">
          <img src='./images/about.png.webp' alt="Restaurant Interior"/>
        </div>
        <div className="ab-right">
          <p>About Our Restaurant</p>
          <h1>We Provide Good Food <br/>For Your Family!</h1>
          <p>Ut enim acgsd minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <input type="email" placeholder="Your E-mail"/>
          <button>Subscribe</button>
        </div>
      </div>

      <div className="news">
        <p>Our New Blog News</p>
        <h1>Our Recent News</h1>
        <div className='news-sec'>
          <CardPic/>
        </div>
      </div>
    </section>
  );
}

export default Menu;
