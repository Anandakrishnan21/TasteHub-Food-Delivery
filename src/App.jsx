import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import { productList } from "./utils/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.keys(productList).map((category) => (
          <Route key={category} path={`/${category}`} element={<ProductList category={category} />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
