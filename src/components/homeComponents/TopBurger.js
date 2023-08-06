import React from "react";
import img4 from "../../image/img4.png";
import img5 from "../../image/img5.png";
import img6 from "../../image/img6.png";

const data = [
  {
    id: "1",
    name: "Cheeseburger Whopper",
    img: img4,
    description: "Classic flame-grilled burger with cheese, Whopper trademark",
    price: "₹100",
  },
  {
    id: "2",
    name: "Bacon Sushi",
    img: img5,
    description: "Sushi-inspired burger with bacon twist, delectable fusion delight",
    price: "₹120",
  },
  {
    id: "3",
    name: "Chicken Sandwich Burger",
    img: img6,
    description: "Delicious grilled chicken, topped with flavorful condiments",
    price: "₹100",
  },
];

function TopBurger() {
  return (
    <>
    {data.map((item) => (
      <div
        key={item.id}
        className="flex flex-col items-center justify-center w-screen p-4 lg:w-1/3 hover:bg-rose-50"
      >
        {item.img && (
          <div className="w-60 h-1/2">
            <img src={item.img} alt="" className="object-contain hover:rotate-12 h-60" />
          </div>
        )}
        <div className="h-1/2 flex flex-col justify-center items-center text-center gap-y-1 text-xl">
          <p className="font-semibold">{item.name}</p>
          <p className="text-rose-500">{item.description}</p>
          <p className="font-semibold">{item.price}</p>
        </div>
      </div>
    ))}
  </>
  );
}

export default TopBurger;
