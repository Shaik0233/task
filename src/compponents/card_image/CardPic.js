import React from "react";

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
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-header">
            <img src={card.image} alt="Food" />
          </div>
          <div className="card-body">
            <p>{card.date}</p>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPic;
