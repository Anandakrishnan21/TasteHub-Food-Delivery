import React, { useEffect, useState } from "react";
import New from "./New";

const data = [
  {
    id: 1,
    text: "Delightful flavors, just a click away!",
    img: "https://images.pexels.com/photos/7315013/pexels-photo-7315013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    text: "Good food, good mood from our service",
    img: "https://images.pexels.com/photos/4348789/pexels-photo-4348789.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    text: "Taste the passion in every delicious bite",
    img: "https://images.pexels.com/photos/4348800/pexels-photo-4348800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Slider() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="h-full lg:h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="w-1/2 h-96 lg:h-screen flex justify-center items-center ">
          <h1 className="text-center uppercase text-rose-500 text-5xl font-sans md:text-6xl">
            {data[slide].text}
          </h1>
        </div>
        <div className="w-screen h-1/2 lg:h-screen lg:w-1/2">
          <img
            src={data[slide].img}
            alt=""
            fill
            className="object-cover w-screen h-96 lg:h-full lg:w-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap ">
        <New />
      </div>
    </>
  );
}

export default Slider;
