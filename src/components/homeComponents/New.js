import React from "react";
import img1 from "../../image/img1.png";
import img2 from "../../image/img2.png";
import img3 from "../../image/img3.png";

const data = [
  {
    id: "1",
    name: "Tomato Margherita",
    img: img1,
    description:
      "Authentic New York-style Margherita: Tomato, cheese, basil bliss!",
    price: "₹400",
  },
  {
    id: "2",
    name: "Margherita Sushi",
    img: img2,
    description:
      "Savory Italian pizzas with tomato, cheese; irresistible delights!",
    price: "₹350",
  },
  {
    id: "3",
    name: "Pepperoni pizza",
    img: img3,
    description: "Delicious Pizza Margherita with melted cheese for delivery",
    price: "₹400",
  },
];

function New() {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center w-screen p-4 lg:w-1/3 hover:bg-rose-50"
        >
          {item.img && (
            <div className="w-60 h-60">
              <img
                src={item.img}
                alt=""
                className="object-contain hover:rotate-180 "
              />
            </div>
          )}
          <div className="flex flex-col justify-center items-center text-center gap-y-1 text-xl">
            <p className="font-semibold">{item.name}</p>
            <p className="text-rose-500">{item.description}</p>
            <p className="font-semibold">{item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default New;
