import React from "react";
import CarouselComp from "../components/CarouselComp";
import { Card, Image } from "antd";
import { NavLink } from "react-router-dom";
import { navList, productList } from "../utils/data";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <CarouselComp />
      <div className="p-4">
        <h2 className="text-lg font-bold">PRODUCT CATEGORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {Object.keys(navList).map((category) => (
            <NavLink key={category} to={`/${category}`}>
              <div className="flex flex-col p-2">
                <Image src={navList[category].imgSrc} alt="category" height={200} className="rounded-xl"/>
                <p className="font-bold">{category.toUpperCase()}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
