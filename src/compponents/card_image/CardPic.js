import React from "react";
import "../card_image/CardPic.css";
const cardData = [
  {
    id: 1,
    date: "23 Dec, 2020",
    title: "Addiction When Food Plate Becomes",
    image: "./images/about.png.webp",
  },
  {
    id: 2,
    date: "23 Dec, 2020",
    title: "Addiction When Food Plate Becomes",
    image: "./images/about.png.webp",
  },
  {
    id: 3,
    date: "23 Dec, 2020",
    title: "Addiction When Food Plate Becomes",
    image: "./images/about.png.webp",
  },
];

function CardPic() {
  return (
    <>
      {cardData.map((item, index) => (
        
        <div key={item.id} className="card">
          <div className="card-header">
            <img src={item.image} alt="Food" />
          </div>
          <div className="card-body">
            <p>{item.date}</p>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPic;
