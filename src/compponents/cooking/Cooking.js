import React from 'react';
import '../cooking/Cooking.css';
import Card from '../card/Card';

function Cooking() {
  const cardContent = [
    "Ut enim ad minim veniam, quis nostrud exer.",
    "Ut enim ad minim veniam, quis nostrud exer.",
    "Ut enim ad minim veniam, quis nostrud exer.",
    "Ut enim ad minim veniam, quis nostrud exer."
  ];

  return (
    <section className="food">
      <div className="food-left">
        <div className="food-para">
          <p className="food-title">Discover Your Taste</p>
          <h1>We Provide Good Food <br />For Your Family!</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="food-grid">
          {cardContent.map((text, index) => (
            <Card key={index} para={text} />
          ))}
        </div>
      </div>
      <div className="food-right">
        <img src="/images/about.png.webp" alt="Delicious food" />
      </div>
    </section>
  );
}

export default Cooking;
