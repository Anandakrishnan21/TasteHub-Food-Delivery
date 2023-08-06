import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    name: "Pizza",
    img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Thin crust, gooey cheese, savory toppings—a slice of pure delight!",
    color: "rose-600",
    text: "white",
  },
  {
    id: "2",
    name: "Burger",
    img: "https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Juicy, mouthwatering burgers with a perfect blend of flavors and textures",
    color: "white",
    text: "black",
  },
  {
    id: "3",
    name: "Sandwich",
    img: "https://images.pexels.com/photos/6608664/pexels-photo-6608664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hearty, stacked layers of deliciousness, a portable and delightful meal option",
    color: "amber-500",
    text: "white",
  },
];

function Category() {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className={`w-full h-1/3 lg:h-3/5 flex flex-row justify-center items-center border-2 border-rose-600 rounded`}
        >
          <div
            className={`w-1/2 h-72 md:h-96 lg:h-full bg-${item.color} text-${item.text} flex flex-col justify-center items-center text-center font-semibold gap-y-3 rounded-l`}
          >
            <p className="text-2xl font-semibold">{item.name}</p>
            <p>{item.desc}</p>
            <Link to={`/category/${item.name.toLowerCase()}`}>
              <button className="w-24 p-2 bg-lime-400 rounded">Explore</button>
            </Link>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={item.img}
              alt=""
              fill
              className="object-cover w-full h-72 md:h-96 lg:h-full rounded-r"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;
