interface cardData {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  status: string;
}

const cardDatas: cardData[] = [
  {
    id: 1,
    image: "src/images/Main/image 12.png", // Replace with actual image URL
    title: "Life lessons with Katie Zaferes",
    rating: 5.0,
    reviews: 6,
    location: "USA",
    price: 136,
    status: "SOLD OUT",
  },
  {
    id: 2,
    image: "src/images/Main/wedding-photography 1.png",
    title: "Learn wedding photography",
    rating: 5.0,
    reviews: 30,
    location: "USA",
    price: 125,
    status: "ONLINE",
  },
  {
    id: 3,
    image: "src/images/Main/mountain-bike 1.png",
    title: "Group Mountain Biking",
    rating: 4.8,
    reviews: 2,
    location: "USA",
    price: 50,
    status: "ONLINE",
  },
];

import React from "react";

const Card = () => {
  return (
    <div className="Card">
      {cardDatas.map((data) => (
        <div className="CardInfo">
          <div className="ImageBox">
            <img src={data.image} className="DataImage" />
            <p className="DataStatus">{data.status}</p>
          </div>

          <div className="Rate">
            <img src="src\images\Main\Star 1.png" className="Star" />
            <p className="Rating">{data.rating.toFixed(1)}</p>
            <p className="Review">({data.reviews})</p>
            <img src="src\images\Main\Ellipse 6.png" className="Ellipse" />
            <p className="Location">{data.location}</p>
          </div>

          <div>
            <p className="Title">{data.title}</p>
          </div>

          <div>
            <p className="Price">
              <b>From ${data.price}</b> / person
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
