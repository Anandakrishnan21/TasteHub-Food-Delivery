import { Carousel, Image } from "antd";
import React from "react";
import { carousels } from "../utils/data";

const contentStyle = {
  margin: 0,
  width: "100%",
  height: "300px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function CarouselComp() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      {carousels.map((carousel) => (
        <div key={carousel.id}>
          <Image src={carousel.img} alt={carousel.id} width={1600} height={600}/>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
